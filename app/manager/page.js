'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ManagerDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    router.push('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome, Manager!</h1>
        <p className="text-lg text-gray-700 mb-8">
          This is your dashboard. Here you can manage daily operations, track sales, monitor stock, handle credits, and record expenses with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <span className="text-indigo-600 text-4xl mb-2">📦</span>
            <h2 className="text-xl font-semibold mb-2">Stock Entry</h2>
            <p className="text-gray-600 text-center mb-4">
              Add and manage daily stock entries. Keep your inventory up to date and track all items efficiently.
            </p>
            <button
              onClick={() => router.push('/manager/stock-entry')}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Go to Stock Entry
            </button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <span className="text-green-600 text-4xl mb-2">💰</span>
            <h2 className="text-xl font-semibold mb-2">Sales Report</h2>
            <p className="text-gray-600 text-center mb-4">
              View and analyze daily sales reports. Monitor cash and transfer payments, and check for any money deviation.
            </p>
            <button
              onClick={() => router.push('/manager/sales-report')}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Go to Sales Report
            </button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <span className="text-yellow-500 text-4xl mb-2">📝</span>
            <h2 className="text-xl font-semibold mb-2">Credit Report</h2>
            <p className="text-gray-600 text-center mb-4">
              Track credits owed and to be received. Record payments and monitor outstanding balances.
            </p>
            <button
              onClick={() => router.push('/manager/credit-report')}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Go to Credit Report
            </button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <span className="text-pink-500 text-4xl mb-2">💸</span>
            <h2 className="text-xl font-semibold mb-2">Expenses</h2>
            <p className="text-gray-600 text-center mb-4">
              Add and review daily expenses. Upload receipts and keep your spending organized.
            </p>
            <button
              onClick={() => router.push('/manager/expenses')}
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
              Go to Expenses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 