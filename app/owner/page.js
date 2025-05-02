'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import OwnerSidebar from '../../components/ownersidebar';

export default function OwnerDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/');
    return null;
  }

  if (status === 'authenticated' && !session?.user?.isOwner && session?.user?.role !== 'owner') {
    router.push('/manager');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <OwnerSidebar />
      <div className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to Owner Dashboard</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">
              Use the sidebar to navigate through different sections of the dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 