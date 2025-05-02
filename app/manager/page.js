'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ManagerDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [monthSelection, setMonthSelection] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [dailyReport, setDailyReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    fetchMonthSelection();
  }, []);

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

  const fetchDailyReport = async (day) => {
    try {
      const response = await fetch(`/api/daily-report?date=${day}`);
      if (response.ok) {
        const data = await response.json();
        setDailyReport(data);
      }
    } catch (error) {
      console.error('Error fetching daily report:', error);
    }
  };

  const handleDayClick = (day) => {
    const formattedDate = `${monthSelection.year}-${String(monthSelection.month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    router.push(`/manager/stock-entry/${formattedDate}`);
  };

  if (status === 'loading' || loading) {
    return <div>Loading...</div>;
  }

  if (!monthSelection) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Manager Dashboard</h1>
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
        <h1 className="text-3xl font-bold mb-8">Manager Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {monthName} {monthSelection.year}
          </h2>
          
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: daysInMonth }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handleDayClick(i + 1)}
                className={`p-4 text-center rounded-lg border ${
                  selectedDay === i + 1
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {selectedDay && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">
              Report for {monthName} {selectedDay}, {monthSelection.year}
            </h3>
            
            {dailyReport ? (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-700">Sales</h4>
                    <p className="text-2xl font-bold">${dailyReport.sales.toFixed(2)}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-700">Credit</h4>
                    <p className="text-2xl font-bold">${dailyReport.credit.toFixed(2)}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-700">Expenses</h4>
                    <p className="text-2xl font-bold">${dailyReport.expenses.toFixed(2)}</p>
                  </div>
                </div>
                
                {dailyReport.notes && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-700 mb-2">Notes</h4>
                    <p className="text-gray-600">{dailyReport.notes}</p>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-600">No report available for this day.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 