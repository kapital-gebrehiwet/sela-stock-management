import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile"
        }
      },
      httpOptions: {
        timeout: 10000,
        retry: 3,
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        console.log("Sign in callback triggered for user:", user.email);
        
        // Convert emails to lowercase for case-insensitive comparison
        const userEmail = user.email?.toLowerCase();
        const ownerEmail = process.env.OWNER_EMAIL?.toLowerCase();
        const managerEmail = process.env.MANAGER_EMAIL?.toLowerCase();
        
        console.log("Email comparison:", {
          userEmail,
          ownerEmail,
          managerEmail,
          isOwner: userEmail === ownerEmail,
          isManager: userEmail === managerEmail
        });
        
        // Determine role based on email match
        const isOwner = userEmail === ownerEmail;
        const isManager = userEmail === managerEmail;
        const role = isOwner ? "owner" : (isManager ? "manager" : null);
        
        // If email doesn't match either role, deny access
        if (!role) {
          console.log("Access denied: Email not authorized");
          return false;
        }
        
        console.log("User role determined as:", role);
        
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          include: { accounts: true }
        });

        if (!existingUser) {
          console.log("Creating new user with role:", role);
          
          const newUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              role: role,
              accounts: {
                create: {
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  access_token: account.access_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  scope: account.scope,
                  id_token: account.id_token,
                }
              }
            },
          });
          
          // Set user properties
          user.id = newUser.id;
          user.role = role;
          user.isOwner = isOwner;
          user.isManager = isManager;
        } else {
          const accountExists = existingUser.accounts.some(
            acc => acc.provider === account.provider && 
                  acc.providerAccountId === account.providerAccountId
          );

          if (!accountExists) {
            await prisma.account.create({
              data: {
                userId: existingUser.id,
                type: account.type,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
              }
            });
          }

          const updatedUser = await prisma.user.update({
            where: { email: user.email },
            data: {
              name: user.name,
              image: user.image,
              role: role,
            },
          });
          
          // Set user properties
          user.id = existingUser.id;
          user.role = role;
          user.isOwner = isOwner;
          user.isManager = isManager;
        }
        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.isOwner = user.isOwner;
        token.isManager = user.isManager;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.isOwner = token.isOwner;
        session.user.isManager = token.isManager;
      }
      return session;
    },
    async redirect({ url, baseUrl, session }) {
      if (url.startsWith(baseUrl) || url === '/') {
        if (session?.user?.isOwner) {
          console.log("Redirecting owner to owner dashboard");
          return `${baseUrl}/owner`;
        } else if (session?.user?.isManager) {
          console.log("Redirecting manager to manager dashboard");
          return `${baseUrl}/manager`;
        }
      }
      
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }
      return url;
    }
  },
  pages: {
    signIn: '/',
    error: '/auth/error',
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === 'development',
}; 