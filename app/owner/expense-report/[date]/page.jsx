'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import OwnerSidebar from '../../../../components/ownersidebar';

// Helper to get YYYY-MM-DD string
function toYMD(date) {
  return date.toISOString().slice(0, 10);
}

// Helper to validate YYYY-MM-DD
function isValidDateString(str) {
  return /^\d{4}-\d{2}-\d{2}$/.test(str);
}

export default function OwnerExpenseReportPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get date from URL
  const dateParam = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : null;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated' && isValidDateString(dateParam)) {
      fetchExpenses();
    } else if (status === 'authenticated') {
      setLoading(false);
      setError('No valid date selected.');
    }
    // eslint-disable-next-line
  }, [status, router, dateParam]);

  const fetchExpenses = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/owner/expense-report?date=${dateParam}`);
      if (response.ok) {
        const data = await response.json();
        setExpenses(data);
      } else {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to fetch expenses');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter expenses by the URL date
  const filteredExpenses = expenses.filter(exp =>
    toYMD(new Date(exp.createdAt)) === dateParam
  );

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!isValidDateString(dateParam)) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">No Date Selected</h2>
          <p className="text-gray-500 mb-4">Please select a date from the calendar to view expenses.</p>
          <button
            onClick={() => router.push('/owner/expense-report')}
            className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
          >
            Back to Calendar
          </button>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <OwnerSidebar />
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Daily Expenses</h1>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Total Expenses</h2>
              <span className="text-2xl font-bold text-indigo-600">
                {filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2)} birr
              </span>
              <button
                onClick={() => router.push('/owner/expense-report')}
                className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Back to Calendar
              </button>
            </div>
          </div>
          {/* Expenses History */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h2 className="text-xl font-semibold p-6">Expense History</h2>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded m-6">
                {error}
              </div>
            )}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Receipt
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredExpenses.map((expense) => (
                    <tr key={expense.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(expense.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {expense.amount.toFixed(2)} birr
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {expense.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {expense.receipt ? (
                          <a
                            href={expense.receipt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            View Receipt
                          </a>
                        ) : (
                          <span className="text-gray-400">No Receipt</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filteredExpenses.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center text-gray-400 py-8">
                        No expenses found for this date.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}