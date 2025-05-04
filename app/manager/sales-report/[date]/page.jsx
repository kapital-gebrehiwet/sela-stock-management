'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ManagerSidebar from '../../../../components/managersidebar';

// Example static items
const STATIC_ITEMS = [
    { name: 'shiro', image: '/images/tegabino.png' },
    { name: 'beyeaynetu', image: '/images/tegabino.png' },
    { name: 'fasting frfr', image: '/images/tegabino.png' },
    { name: 'tegabino', image: '/images/tegabino.png' },
    { name: 'egg frfr', image: '/images/tegabino.png' },
    { name: 'sandwich single', image: '/images/tegabino.png' },
    { name: 'sandwich double', image: '/images/tegabino.png' },
    { name: 'tbs', image: '/images/tegabino.png' },
    { name: 'mlas senber', image: '/images/tegabino.png' },
    { name: 'dulet', image: '/images/tegabino.png' },
    { name: 'sga frfr', image: '/images/tegabino.png' },
    { name: 'jambo', image: '/images/tegabino.png' },
    { name: 'signle', image: '/images/tegabino.png' },
    { name: 'soft drink', image: '/images/tegabino.png' },
    { name: 'birr', image: '/images/tegabino.png' },
    { name: 'water(2l)', image: '/images/tegabino.png' },
    { name: 'water(1l)', image: '/images/tegabino.png' },
    { name: 'birr(1/2 liter)', image: '/images/tegabino.png' },
  ];
export default function SaleReportPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [uploadedSales, setUploadedSales] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cashAmount, setCashAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [moneyDeviation, setMoneyDeviation] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [inputCashAmount, setInputCashAmount] = useState(0);
  const [inputTransferAmount, setInputTransferAmount] = useState(0);

  // Get current date from URL if available
  const dateParam = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : null;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      setItems(STATIC_ITEMS.map(item => ({ 
        ...item, 
        amount: '', 
        unitPrice: '', 
        totalPrice: '',
        imageFile: null 
      })));
      if (dateParam && dateParam !== 'sales-report') {
        fetchUploadedSales();
      }
      setLoading(false);
    }
  }, [status, router, dateParam]);

  const handleInputChange = (idx, field, value) => {
    setItems(prev =>
      prev.map((item, i) =>
        i === idx
          ? {
              ...item,
              [field]: value,
              totalPrice:
                field === 'amount' || field === 'unitPrice'
                  ? ((field === 'amount' ? value : item.amount) || 0) * ((field === 'unitPrice' ? value : item.unitPrice) || 0)
                  : item.totalPrice,
            }
          : item
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setSaveSuccess(false);
    try {
      const filledItems = items.filter(item => item.amount && item.unitPrice);
      console.log('Submitting items:', filledItems);
      
      for (const item of filledItems) {
        const formDataToSend = new FormData();
        formDataToSend.append('itemName', item.name);
        formDataToSend.append('amount', item.amount);
        formDataToSend.append('unitPrice', item.unitPrice);
        formDataToSend.append('totalPrice', (parseFloat(item.amount) * parseFloat(item.unitPrice)).toString());
        formDataToSend.append('date', dateParam);
        formDataToSend.append('image', item.image);
        formDataToSend.append('cashAmount', inputCashAmount.toString());
        formDataToSend.append('transferAmount', inputTransferAmount.toString());
        
        console.log('Sending form data for item:', {
          itemName: item.name,
          amount: item.amount,
          unitPrice: item.unitPrice,
          date: dateParam,
          cashAmount: inputCashAmount,
          transferAmount: inputTransferAmount
        });

        const response = await fetch('/api/sales-report', {
          method: 'POST',
          body: formDataToSend,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to save sale');
        }
      }
      
      setSaveSuccess(true);
      setItems(STATIC_ITEMS.map(item => ({ 
        ...item, 
        amount: '', 
        unitPrice: '', 
        totalPrice: '',
        imageFile: null 
      })));
      // Reset input fields after successful save
      setInputCashAmount(0);
      setInputTransferAmount(0);
      fetchUploadedSales();
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setError(error.message || 'Failed to save sale reports');
    } finally {
      setUploading(false);
    }
  };

  const fetchUploadedSales = async () => {
    try {
      console.log('Fetching sales for date:', dateParam);
      if (!dateParam) {
        console.error('No date parameter available');
        return;
      }

      const response = await fetch(`/api/sales-report?date=${dateParam}`);
      console.log('API response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched data:', data);
        
        if (data.sales && Array.isArray(data.sales)) {
          console.log('Number of sales found:', data.sales.length);
          setUploadedSales(data.sales);
          
          // Calculate total sales and items
          const totals = data.sales.reduce((acc, sale) => {
            const totalPrice = sale.totalPrice || (sale.amount * sale.unitPrice);
            acc.totalSales += totalPrice;
            acc.totalItems += sale.amount;
            return acc;
          }, { totalSales: 0, totalItems: 0 });
          
          console.log('Calculated totals:', totals);
          setTotalSales(totals.totalSales);
          setTotalItems(totals.totalItems);
          
          // Set cash and transfer amounts from the last sale
          if (data.sales.length > 0) {
            const lastSale = data.sales[0];
            console.log('Setting amounts from last sale:', {
              cashAmount: lastSale.cashAmount,
              transferAmount: lastSale.transferAmount
            });
            setCashAmount(lastSale.cashAmount || 0);
            setTransferAmount(lastSale.transferAmount || 0);
          } else {
            console.log('No sales found, resetting amounts to 0');
            setCashAmount(0);
            setTransferAmount(0);
          }
        } else {
          console.log('No sales data found in response');
          setUploadedSales([]);
          setTotalSales(0);
          setTotalItems(0);
          setCashAmount(0);
          setTransferAmount(0);
        }
      } else {
        const errorData = await response.json();
        console.error('Failed to fetch sales:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        });
        setError(`Failed to fetch sales: ${errorData.error || response.statusText}`);
      }
    } catch (err) {
      console.error('Error in fetchUploadedSales:', err);
      setError('Failed to fetch uploaded sales');
    }
  };

  // Add useEffect to calculate money deviation whenever cash or transfer amounts change
  useEffect(() => {
    const totalPayments = cashAmount + transferAmount;
    const deviation = totalSales - totalPayments;
    setMoneyDeviation(deviation);
  }, [cashAmount, transferAmount, totalSales]);

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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Daily Sale Reports</h1>
          {/* Total Sales Card */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Total Items Sold</h3>
                <p className="text-2xl font-bold text-indigo-600">{totalItems}</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Total Sales</h3>
                <p className="text-2xl font-bold text-indigo-600">{totalSales.toFixed(2)} birr</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Cash Payments</h3>
                <p className="text-2xl font-bold text-green-600">{cashAmount.toFixed(2)} birr</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Transfer Payments</h3>
                <p className="text-2xl font-bold text-blue-600">{transferAmount.toFixed(2)} birr</p>
              </div>
              <div className={`p-4 border rounded-lg ${moneyDeviation !== 0 ? 'bg-red-50' : 'bg-green-50'}`}>
                <h3 className="text-sm font-medium text-gray-500">Money Deviation</h3>
                <p className={`text-2xl font-bold ${moneyDeviation !== 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {moneyDeviation.toFixed(2)} birr
                </p>
              </div>
            </div>
          </div>
          {/* Add/Edit Sale Reports Form */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Add/Edit Sale Reports</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Unit Price</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total Price</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {items.map((item, idx) => (
                      <tr key={item.name}>
                        <td className="px-4 py-2">
                          <Image 
                            src={item.image}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="rounded"
                            unoptimized
                          />
                        </td>
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2">
                          <input
                            type="number"
                            value={item.amount}
                            onChange={e => handleInputChange(idx, 'amount', e.target.value)}
                            className="w-20 border rounded px-2 py-1"
                            min="0"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="number"
                            value={item.unitPrice}
                            onChange={e => handleInputChange(idx, 'unitPrice', e.target.value)}
                            className="w-24 border rounded px-2 py-1"
                            min="0"
                            step="0.01"
                          />
                        </td>
                        <td className="px-4 py-2">
                          {(item.unitPrice && item.amount)
                            ? (parseFloat(item.unitPrice) * parseInt(item.amount)).toFixed(2)
                            : ''}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Payment Method Inputs */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Cash Payments</h3>
                  <input
                    type="number"
                    value={inputCashAmount}
                    onChange={(e) => setInputCashAmount(parseFloat(e.target.value) || 0)}
                    className="w-full text-2xl font-bold text-green-600 border rounded px-4 py-2"
                    placeholder="0.00"
                    step="0.01"
                  />
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Transfer Payments</h3>
                  <input
                    type="number"
                    value={inputTransferAmount}
                    onChange={(e) => setInputTransferAmount(parseFloat(e.target.value) || 0)}
                    className="w-full text-2xl font-bold text-blue-600 border rounded px-4 py-2"
                    placeholder="0.00"
                    step="0.01"
                  />
                </div>
              </div>
              <div className="flex justify-end items-center mt-4">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={uploading}
                >
                  {uploading ? 'Saving...' : 'Save Sale Reports'}
                </button>
                {saveSuccess && <span className="text-green-600 ml-4">Saved successfully!</span>}
              </div>
              {error && <div className="text-red-500 mt-2">{error}</div>}
            </form>
          </div>
          {/* Uploaded Sales Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h2 className="text-xl font-semibold p-6">Uploaded Sales for This Day</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Unit Price</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total Price</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {uploadedSales.map((sale) => (
                    <tr key={sale.id}>
                      <td className="px-4 py-2">
                        {sale.image ? (
                          <a href={sale.image} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900">View Image</a>
                        ) : (
                          <span className="text-gray-400">No Image</span>
                        )}
                      </td>
                      <td className="px-4 py-2">{sale.itemName}</td>
                      <td className="px-4 py-2">{sale.amount}</td>
                      <td className="px-4 py-2">{sale.unitPrice.toFixed(2)} birr</td>
                      <td className="px-4 py-2">{sale.totalPrice ? sale.totalPrice.toFixed(2) : (sale.amount * sale.unitPrice).toFixed(2)} birr</td>
                      <td className="px-4 py-2">{new Date(sale.createdAt).toLocaleDateString()}</td>
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
