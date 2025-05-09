'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function StockEntryPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [monthSelection, setMonthSelection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
    fetchMonthSelection();
  }, [status, router]);

  const fetchMonthSelection = async () => {
    try {
      const response = await fetch('/api/month-selection');
      if (response.ok) {
        const data = await response.json();
        setMonthSelection(data);
      }
    } catch (error) {
      console.error('Error fetching month selection:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateClick = (day) => {
    const formattedDate = `${monthSelection.year}-${String(monthSelection.month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    router.push(`/manager/credit-report/${formattedDate}`);
  };

  if (status === 'loading' || loading) {
    return <div>Loading...</div>;
  }

  if (!monthSelection) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Credit Report</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">No month has been selected by the owner yet.</p>
          </div>
        </div>
      </div>
    );
  }

  const monthName = new Date(2000, monthSelection.month - 1, 1).toLocaleString('default', { month: 'long' });
  const daysInMonth = new Date(monthSelection.year, monthSelection.month, 0).getDate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Credit report</h1>
        
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
  );
} 