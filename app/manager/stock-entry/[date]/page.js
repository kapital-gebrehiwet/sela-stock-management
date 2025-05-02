'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function StockEntry({ params }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stockItems, setStockItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newItem, setNewItem] = useState({
    name: '',
    amount: '',
    estimatedPrice: '',
    unit: '',
    image: null
  });

  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const currentDate = unwrappedParams.date;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      setLoading(false);
    }
  }, [status, router]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem({ ...newItem, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.amount && newItem.estimatedPrice && newItem.unit) {
      setStockItems([...stockItems, newItem]);
      setNewItem({ 
        name: '', 
        amount: '', 
        estimatedPrice: '', 
        unit: '',
        image: null 
      });
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/stock-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: currentDate,
          items: stockItems,
        }),
      });

      if (response.ok) {
        router.push('/manager');
      } else {
        throw new Error('Failed to submit stock');
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
          <p className="mt-4 text-gray-600">Loading stock entry form...</p>
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
            onClick={() => setError(null)}
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
        <h1 className="text-3xl font-bold mb-8">Stock Entry for {currentDate}</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Item Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="p-2 border rounded w-full"
                />
                {newItem.image && (
                  <img 
                    src={newItem.image} 
                    alt="Preview" 
                    className="mt-2 h-20 w-20 object-cover rounded"
                  />
                )}
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Item Name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className="p-2 border rounded w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Amount"
                    value={newItem.amount}
                    onChange={(e) => setNewItem({ ...newItem, amount: e.target.value })}
                    className="p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Unit (kg, pcs, etc)"
                    value={newItem.unit}
  
                    onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
                    className="p-2 border rounded"
                  />
                </div>
                <input
                  type="number"
                  placeholder="Estimated Price"
                  value={newItem.estimatedPrice}
                  onChange={(e) => setNewItem({ ...newItem, estimatedPrice: e.target.value })}
                  className="p-2 border rounded w-full"
                />
              </div>
            </div>
            <button
              onClick={handleAddItem}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Item
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Added Items</h2>
            <div className="space-y-2">
              {stockItems.map((item, index) => (
                <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-12 w-12 object-cover rounded mr-4"
                    />
                  )}
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-600">
                      {item.amount} {item.unit} - ${item.estimatedPrice}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 