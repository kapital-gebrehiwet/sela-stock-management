'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ManagerSidebar from '../../../../components/managersidebar';

export default function ManagerExpensesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    receipt: null
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      fetchExpenses();
    }
  }, [status, router]);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('/api/manager-expenses');
      if (response.ok) {
        const data = await response.json();
        setExpenses(data);
      } else {
        throw new Error('Failed to fetch expenses');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('amount', formData.amount);
      formDataToSend.append('description', formData.description);
      if (formData.receipt) {
        formDataToSend.append('receipt', formData.receipt);
      }

      const response = await fetch('/api/manager-expenses', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const newExpense = await response.json();
        setExpenses([newExpense, ...expenses]);
        setFormData({ amount: '', description: '', receipt: null });
        setError(null);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add expense');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <ManagerSidebar />
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Daily Expenses</h1>
          {/* Add Expense Form */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount (birr)</label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows="2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Receipt/Evidence (optional)</label>
                <input
                  type="file"
                  onChange={(e) => setFormData({ ...formData, receipt: e.target.files[0] })}
                  className="mt-1 block w-full"
                  accept="image/*,.pdf"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={uploading}
              >
                {uploading ? 'Adding...' : 'Add Expense'}
              </button>
            </form>
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
                  {expenses.map((expense) => (
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 