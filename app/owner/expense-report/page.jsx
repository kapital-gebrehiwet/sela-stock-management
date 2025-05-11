'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import OwnerSidebar from '../../../components/ownersidebar';

export default function StockLevel() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [monthSelection, setMonthSelection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      fetchMonthSelection();
    }
  }, [status, router]);

  const fetchMonthSelection = async () => {
    try {
      const response = await fetch('/api/month-selection');
      if (response.ok) {
        const data = await response.json();
        setMonthSelection(data);
      } else {
        throw new Error('Failed to fetch month selection');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDateClick = (day) => {
    const formattedDate = `${monthSelection.year}-${String(monthSelection.month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    router.push(`/owner/expense-report/${formattedDate}`);
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading expenses report...</p>
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
              fetchMonthSelection();
            }}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!monthSelection) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <OwnerSidebar />
        <div className="ml-64">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Expense Report</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">No month has been selected by the owner yet.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const monthName = new Date(2000, monthSelection.month - 1, 1).toLocaleString('default', { month: 'long' });
  const daysInMonth = new Date(monthSelection.year, monthSelection.month, 0).getDate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <OwnerSidebar />
      <div className="ml-64">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Expense Report</h1>
          
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {monthName} {monthSelection.year}
            </h2>
            
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: daysInMonth }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handleDateClick(i + 1)}
                  className="p-4 text-center rounded-lg border bg-white hover:bg-gray-50 transition-colors"
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 