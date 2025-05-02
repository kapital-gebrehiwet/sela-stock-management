'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function SetMonthPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated' && !session?.user?.isOwner && session?.user?.role !== 'owner') {
      router.push('/manager');
    }
  }, [status, session, router]);

  useEffect(() => {
    let isMounted = true;

    const fetchMonthSelection = async () => {
      try {
        const res = await fetch('/api/month-selection');
        const data = await res.json();
        
        if (isMounted && data) {
          setMonth(data.month.toString());
          setYear(data.year.toString());
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to fetch month selection');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchMonthSelection();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/month-selection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          month: parseInt(month),
          year: parseInt(year),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to set month and year');
      }

      setMessage('Month and year set successfully!');
      setTimeout(() => {
        router.push('/owner');
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="ml-64 p-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ml-64 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Set Month and Year</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="month" className="block text-sm font-medium text-gray-700">
              Month
            </label>
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Select Month</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <option key={m} value={m}>
                  {new Date(2000, m - 1).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="2000"
              max="2100"
              required
            />
          </div>

          {message && (
            <div className="p-3 bg-green-100 text-green-700 rounded-md">
              {message}
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Set Month and Year
          </button>
        </form>
      </div>
    </div>
  );
} 