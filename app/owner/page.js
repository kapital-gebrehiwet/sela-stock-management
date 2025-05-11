'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import OwnerSidebar from '../../components/ownersidebar';
import {
  Calendar,
  Sticker,
  Users,
  DollarSign,
  Euro,
  MenuSquare,
} from 'lucide-react';

export default function OwnerDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-600"></div>
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white p-8">
      <OwnerSidebar />
      <div className="ml-64">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-yellow-700 mb-2">Welcome, Owner!</h1>
          <p className="text-lg text-gray-700 mb-8">
            Empower your business with real-time insights, easy management, and full control. Use the tools below to keep your business running smoothly and efficiently.
          </p>

          {/* Quick Actions */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => router.push('/owner/sales-report')}
                className="flex items-center bg-green-100 hover:bg-green-200 text-green-800 font-semibold px-6 py-3 rounded-lg shadow transition"
              >
                <Euro className="w-6 h-6 mr-2" /> Sales Report
              </button>
              <button
                onClick={() => router.push('/owner/stock-level')}
                className="flex items-center bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-semibold px-6 py-3 rounded-lg shadow transition"
              >
                <Sticker className="w-6 h-6 mr-2" /> Stock Level
              </button>
              <button
                onClick={() => router.push('/owner/credit-report')}
                className="flex items-center bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-semibold px-6 py-3 rounded-lg shadow transition"
              >
                <DollarSign className="w-6 h-6 mr-2" /> Credit Management
              </button>
              <button
                onClick={() => router.push('/owner/expenses')}
                className="flex items-center bg-pink-100 hover:bg-pink-200 text-pink-800 font-semibold px-6 py-3 rounded-lg shadow transition"
              >
                <DollarSign className="w-6 h-6 mr-2" /> Expenses
              </button>
            </div>
          </div>

          {/* Feature Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Setup */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <Calendar className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Business Setup</h3>
              <p className="text-gray-600 text-center mb-4">
                Set your business month/year, manage menu, and review set months.
              </p>
              <div className="flex flex-col gap-2 w-full">
                <button
                  onClick={() => router.push('/owner/set-month')}
                  className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-medium"
                >
                  Set Month/Year
                </button>
                <button
                  onClick={() => router.push('/owner/menu')}
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium"
                >
                  Set Menu
                </button>
                <button
                  onClick={() => router.push('/owner/month-history')}
                  className="bg-yellow-50 hover:bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-medium"
                >
                  Setted Months
                </button>
              </div>
            </div>

            {/* Staff & Fund */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <Users className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Staff & Fund</h3>
              <p className="text-gray-600 text-center mb-4">
                Manage your staff and owner funds with ease.
              </p>
              <div className="flex flex-col gap-2 w-full">
                <button
                  onClick={() => router.push('/owner/staff')}
                  className="bg-green-50 hover:bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium"
                >
                  Staff Members
                </button>
                <button
                  onClick={() => router.push('/owner/fund')}
                  className="bg-pink-50 hover:bg-pink-100 text-pink-700 px-4 py-2 rounded-lg font-medium"
                >
                  Owner Fund
                </button>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-12 text-center text-gray-400 text-sm">
            Powered by your business management platform.
          </div>
        </div>
      </div>
    </div>
  );
}