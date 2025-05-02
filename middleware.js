import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  // Get the session token
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Allow access to home page and auth-related pages without authentication
  if (pathname === '/' || pathname.startsWith('/auth') || pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // If no token, redirect to home page
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const userEmail = token.email?.toLowerCase();
  const ownerEmail = process.env.OWNER_EMAIL?.toLowerCase();
  const managerEmail = process.env.MANAGER_EMAIL?.toLowerCase();

  // If email doesn't match either role, redirect to home
  if (!userEmail || (!ownerEmail && !managerEmail)) {
    console.log('No valid email found in token or environment variables');
    return NextResponse.redirect(new URL('/', request.url));
  }

  const isOwner = userEmail === ownerEmail;
  const isManager = userEmail === managerEmail;

  console.log('Email comparison:', {
    userEmail,
    ownerEmail,
    managerEmail,
    isOwner,
    isManager
  });

  // If email doesn't match either role, redirect to home
  if (!isOwner && !isManager) {
    console.log('Email not authorized:', userEmail);
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Check if user is accessing the correct section
  if (isOwner && pathname.startsWith('/owner')) {
    return NextResponse.next();
  }
  
  if (isManager && pathname.startsWith('/manager')) {
    return NextResponse.next();
  }

  // If user is trying to access the wrong section, redirect to their dashboard
  const redirectPath = isOwner ? '/owner' : '/manager';
  return NextResponse.redirect(new URL(redirectPath, request.url));
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 