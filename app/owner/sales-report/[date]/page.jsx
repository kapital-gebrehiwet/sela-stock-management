'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Ownersidebar from '../../../../components/ownersidebar';

export default function SaleReportPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [uploadedSales, setUploadedSales] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cashAmount, setCashAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [moneyDeviation, setMoneyDeviation] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get current date from URL if available
  const dateParam = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : null;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      if (dateParam && dateParam !== 'sales-report') {
        fetchUploadedSales();
      }
      setLoading(false);
    }
  }, [status, router, dateParam]);

  const fetchUploadedSales = async () => {
    try {
      if (!dateParam) {
        setError('No date selected');
        return;
      }
      const response = await fetch(`/api/owner/sales-report?date=${dateParam}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to fetch sales: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.sales && Array.isArray(data.sales)) {
        setUploadedSales(data.sales);
        // Calculate total sales and items
        const totals = data.sales.reduce((acc, sale) => {
          const totalPrice = sale.totalPrice || (sale.amount * sale.unitPrice);
          acc.totalSales += totalPrice;
          acc.totalItems += sale.amount;
          return acc;
        }, { totalSales: 0, totalItems: 0 });
        setTotalSales(totals.totalSales);
        setTotalItems(totals.totalItems);
        // Set cash and transfer amounts from the last sale
        if (data.sales.length > 0) {
          const lastSale = data.sales[0];
          setCashAmount(lastSale.cashAmount || 0);
          setTransferAmount(lastSale.transferAmount || 0);
        } else {
          setCashAmount(0);
          setTransferAmount(0);
        }
      } else {
        setUploadedSales([]);
        setTotalSales(0);
        setTotalItems(0);
        setCashAmount(0);
        setTransferAmount(0);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch uploaded sales');
      setUploadedSales([]);
      setTotalSales(0);
      setTotalItems(0);
      setCashAmount(0);
      setTransferAmount(0);
    }
  };

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
      <Ownersidebar />
      <div className="md:ml-64 p-2 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-8 gap-2 md:gap-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sales Report</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Total Sales:</span> {totalSales.toFixed(2)} birr
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Total Items:</span> {totalItems}
              </div>
            </div>
          </div>
          {/* Total Sales Card */}
          <div className="bg-white rounded-lg shadow p-3 md:p-6 mb-4 md:mb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="text-xs md:text-sm font-medium text-gray-500">Total Items Sold</h3>
                <p className="text-lg md:text-2xl font-bold text-indigo-600">{totalItems}</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-xs md:text-sm font-medium text-gray-500">Total Sales</h3>
                <p className="text-lg md:text-2xl font-bold text-indigo-600">{totalSales.toFixed(2)} birr</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-xs md:text-sm font-medium text-gray-500">Cash Payments</h3>
                <p className="text-lg md:text-2xl font-bold text-green-600">{cashAmount.toFixed(2)} birr</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-xs md:text-sm font-medium text-gray-500">Transfer Payments</h3>
                <p className="text-lg md:text-2xl font-bold text-blue-600">{transferAmount.toFixed(2)} birr</p>
              </div>
              <div className={`p-4 border rounded-lg ${moneyDeviation !== 0 ? 'bg-red-50' : 'bg-green-50'}`}>
                <h3 className="text-xs md:text-sm font-medium text-gray-500">Money Deviation</h3>
                <p className={`text-lg md:text-2xl font-bold ${moneyDeviation !== 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {moneyDeviation.toFixed(2)} birr
                </p>
              </div>
            </div>
          </div>
          {/* Uploaded Sales Table */}
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <h2 className="text-lg md:text-xl font-semibold p-3 md:p-6">Uploaded Sales for This Day</h2>
            <div className="min-w-[700px] md:min-w-0">
              <table className="min-w-full divide-y divide-gray-200 text-xs md:text-sm">
                <thead className="bg-gray-50">
                  <tr>
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
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
      </div>
    </div>
  );
}