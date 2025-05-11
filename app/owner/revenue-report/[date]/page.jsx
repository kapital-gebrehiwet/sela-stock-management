'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import OwnerSidebar from '../../../../components/ownersidebar';

export default function DailyRevenueReport({ params }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [revenueData, setRevenueData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [monthlyRent, setMonthlyRent] = useState(0);

  // Properly unwrap params using React.use()
  const unwrappedParams = use(params);
  const currentDate = unwrappedParams.date;

  // Calculate days in the month for the selected date
  const daysInMonth = currentDate
    ? new Date(Number(currentDate.split('-')[0]), Number(currentDate.split('-')[1]), 0).getDate()
    : 30;

  // Calculate daily rent portion
  const dailyRent = monthlyRent && daysInMonth ? Number(monthlyRent) / daysInMonth : 0;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      fetchDailyRevenue();
    }
    // eslint-disable-next-line
  }, [status, router]);

  const fetchDailyRevenue = async () => {
    try {
      const response = await fetch(`/api/revenue-report/daily?date=${currentDate}`);
      if (response.ok) {
        const data = await response.json();
        setRevenueData(data);
      } else {
        throw new Error('Failed to fetch revenue data');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Net Revenue = Sales + Stock Value + To Receive - (Expenses + Staff Portion + Daily Rent Portion + Owed)
  const netRevenue = revenueData
    ? ((revenueData.totalSales ?? 0) + (revenueData.stockValue ?? 0) + (revenueData.totalToReceiveRemaining ?? 0)) -
      ((revenueData.totalExpenses ?? 0) + (revenueData.staffFees ?? 0) + dailyRent + (revenueData.totalOwedRemaining ?? 0))
    : 0;

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading daily revenue report...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error: {error}</p>
          <button 
            onClick={() => {
              setError(null);
              fetchDailyRevenue();
            }}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <OwnerSidebar />
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Revenue Report for {new Date(currentDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </h1>
            <button
              onClick={() => router.push('/owner/revenue-report')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Back to Calendar
            </button>
          </div>

          {revenueData && (
            <div className="space-y-6">
              {/* Monthly Rent Input */}
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly House Rent (birr)
                </label>
                <input
                  type="number"
                  value={monthlyRent}
                  onChange={e => setMonthlyRent(e.target.value)}
                  className="border rounded px-3 py-2 w-40"
                  min="0"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Daily Rent Portion: <span className="font-semibold">{dailyRent.toFixed(2)} birr</span> (auto-calculated)
                </p>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-sm font-medium text-gray-500">Total Sales</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {(revenueData.totalSales ?? 0).toFixed(2)} birr
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {revenueData.totalTransactions} transactions
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-sm font-medium text-gray-500">Active Money Owed</h3>
                  <p className="text-2xl font-bold text-red-600">
                    {(revenueData.totalOwedRemaining ?? 0).toFixed(2)} birr
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-sm font-medium text-gray-500">Active Money to Receive</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {(revenueData.totalToReceiveRemaining ?? 0).toFixed(2)} birr
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-sm font-medium text-gray-500">Total Expenses</h3>
                  <p className="text-2xl font-bold text-red-600">
                    {(revenueData.totalExpenses ?? 0).toFixed(2)} birr
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {revenueData.expenseCount} expense items
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-sm font-medium text-gray-500">Net Revenue</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {(netRevenue ?? 0).toFixed(2)} birr
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    (Net Revenue = Sales + Stock Value + To Receive - [Expenses + Staff Portion + Rent Portion + Owed])
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Staff Fees (Daily Portion)</h3>
                    <p className="text-lg font-semibold">
                      {(revenueData.staffFees ?? 0).toFixed(2)} birr
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Stock Value</h3>
                    <p className="text-lg font-semibold">
                      {(revenueData.stockValue ?? 0).toFixed(2)} birr
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">House Rent (Daily Portion)</h3>
                    <p className="text-lg font-semibold">
                      {dailyRent.toFixed(2)} birr
                    </p>
                  </div>
                </div>
              </div>

              {/* You can add breakdowns for sales and expenses here if you want */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}