'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const handleRedirect = async () => {
      if (status === 'authenticated' && session?.user && !redirecting) {
        setRedirecting(true);
        
        await new Promise(resolve => setTimeout(resolve, 0));
        
        console.log('Session data:', session);
        console.log('User role:', session.user.role);
        
        if (session.user.isOwner) {
          console.log('Redirecting to owner dashboard');
          router.replace('/owner');
        } else {
          console.log('Redirecting to manager dashboard');
          router.replace('/manager');
        }
      }
    };

    handleRedirect();
  }, [status, session, router, redirecting]);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const result = await signIn('google', {
        redirect: false,
        callbackUrl: window.location.origin
      });

      if (result?.error) {
        setError(result.error);
        setIsLoading(false);
        return;
      }
    } catch (err) {
      setError('An error occurred during sign in');
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-slate-400 text-white lg:grid lg:h-110 lg:w-170 lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Elevate Your Management Strategy and
            <strong className="text-indigo-600"> Streamline Stock Control </strong>
          </h1>

          <p className="mt-4 text-base text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Sign in to access your dashboard. Owners have access to additional features
            and controls for comprehensive system management.
          </p>

          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Button 
              onClick={handleGoogleSignIn}
              disabled={isLoading || status === 'loading' || redirecting}
              className="min-w-[200px] bg-black text-white"
            >
              {isLoading || status === 'loading' || redirecting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {redirecting ? 'Redirecting...' : 'Signing in...'}
                </>
              ) : (
                <>
                  <FcGoogle className="mr-2" /> Sign in with Google
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;