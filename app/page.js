'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Logo from "./components/logo";
import Login from "./components/login";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      console.log("Session data:", session.user);
      console.log("User role:", session.user.role);
      
      // Redirect based on user role
      if (session.user.isOwner) {
        console.log("Redirecting to owner dashboard");
        router.push('/owner');
      } else if (session.user.isManager) {
        console.log("Redirecting to manager dashboard");
        router.push('/manager');
      } else {
        // If somehow no role is set, redirect to home
        console.log("No valid role found, staying on home page");
      }
    }
  }, [session, status, router]);

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // If not authenticated, show the login page
  return (
    <div className="lgo min-h-screen">
      <div className="fixed top-0 left-0 p-4">
        <Logo/>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <Login/>
      </div>
    </div>
  );
}