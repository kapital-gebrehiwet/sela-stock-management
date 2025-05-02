'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function StockLevelDetails({ params }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stockItems, setStockItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const currentDate = unwrappedParams.date;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      fetchStockItems();
    }
  }, [status, router]);

  const fetchStockItems = async () => {
    try {
      const response = await fetch(`/api/stock-entry?date=${currentDate}`);
      if (response.ok) {
        const data = await response.json();
        setStockItems(data.items || []);
      } else {
        throw new Error('Failed to fetch stock items');
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
          <p className="mt-4 text-gray-600">Loading stock details...</p>
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
              fetchStockItems();
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Stock Details for {currentDate}</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          {stockItems.length === 0 ? (
            <p className="text-gray-600">No stock items found for this date.</p>
          ) : (
            <div className="space-y-4">
              {stockItems.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-16 w-16 object-cover rounded mr-4"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <div className="text-sm text-gray-600">
                      <p>Amount: {item.amount} {item.unit}</p>
                      <p>Estimated Price: {item.estimatedPrice} Birr</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => router.push('/manager/stock-level')}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Back to Calendar
        </button>
      </div>
    </div>
  );
} 