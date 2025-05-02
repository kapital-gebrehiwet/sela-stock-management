'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function MonthHistoryPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [monthSelections, setMonthSelections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      fetchMonthSelections();
    }
  }, [status, router]);

  const fetchMonthSelections = async () => {
    try {
      const response = await fetch('/api/month-selection?all=true');
      if (response.ok) {
        const data = await response.json();
        setMonthSelections(data);
      } else {
        throw new Error('Failed to fetch month selections');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading months...</p>
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
              fetchMonthSelections();
            }}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (monthSelections.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Month History</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">No months have been set yet.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Month History</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthSelections.map((monthSelection) => {
              const monthName = new Date(2000, monthSelection.month - 1, 1).toLocaleString('default', { month: 'long' });
              return (
                <div
                  key={`${monthSelection.year}-${monthSelection.month}`}
                  className="p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="font-semibold">{monthName}</div>
                  <div className="text-gray-600">{monthSelection.year}</div>
                  <div className="text-sm text-gray-500 mt-2">
                    Set on: {new Date(monthSelection.createdAt).toLocaleDateString()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 