'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import ManagerSidebar from '../../../../components/managersidebar';
import React from 'react';

export default function CreditReportDatePage() {
  const params = useParams();
  const date = params.date;
  const { data: session, status } = useSession();
  const router = useRouter();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    personName: '',
    amount: '',
    purpose: '',
    type: 'OWED',
    status: 'Pending',
    dueDate: date
  });
  const [uploading, setUploading] = useState(false);
  const [selectedCredit, setSelectedCredit] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentData, setPaymentData] = useState({
    amount: '',
    method: 'Cash',
    notes: ''
  });
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loadingPayments, setLoadingPayments] = useState(false);

  // Add console log to debug the date
  console.log('Selected date from URL:', date);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      fetchCredits();
    }
  }, [status, router]);

  const fetchCredits = async () => {
    try {
      const response = await fetch(`/api/credit-report?date=${date}`);
      if (response.ok) {
        const data = await response.json();
        // Include payments in the credits data
        const creditsWithPayments = [...data.moneyOwed, ...data.moneyToReceive].map(credit => ({
          ...credit,
          payments: credit.payments || []
        }));
        setCredits(creditsWithPayments);
      } else {
        throw new Error('Failed to fetch credits');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPaymentHistory = async (creditId) => {
    try {
      setLoadingPayments(true);
      const response = await fetch(`/api/credit-report/payment?creditId=${creditId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch payment history');
      }
      
      const data = await response.json();
      setPaymentHistory(data.payments || []);
    } catch (error) {
      console.error('Error fetching payment history:', error);
      setError(error.message);
    } finally {
      setLoadingPayments(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const response = await fetch('/api/credit-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newCredit = await response.json();
        setCredits([newCredit, ...credits]);
        setFormData({
          personName: '',
          amount: '',
          purpose: '',
          type: 'OWED',
          status: 'Pending',
          dueDate: date
        });
        setError(null);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add credit entry');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  const handlePayment = async () => {
    if (!selectedCredit || !paymentData.amount) return;

    // Format the date properly
    const selectedDate = new Date(date);
    console.log('Using payment date:', selectedDate);

    try {
      setLoading(true);
      const response = await fetch('/api/credit-report/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          creditId: selectedCredit.id,
          amount: parseFloat(paymentData.amount),
          method: paymentData.method,
          notes: paymentData.notes,
          paymentDate: selectedDate.toISOString()
        }),
      });

      if (response.ok) {
        setShowPaymentModal(false);
        setPaymentData({
          amount: '',
          method: 'Cash',
          notes: ''
        });
        fetchCredits();
        fetchPaymentHistory(selectedCredit.id);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to record payment');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const openPaymentModal = (credit) => {
    setSelectedCredit(credit);
    setShowPaymentModal(true);
    fetchPaymentHistory(credit.id);
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Filter credits to show all credits up to the selected date
  const filteredCredits = credits.filter(credit => {
    const creditDate = new Date(credit.dueDate).toISOString().slice(0, 10);
    const selectedDate = new Date(date).toISOString().slice(0, 10);

    // Show all credits for the selected date
    if (creditDate === selectedDate) {
      return true;
    }
    // Carry over only unpaid credits from previous dates
    return creditDate < selectedDate && credit.status !== 'Paid';
  });

  // Calculate remaining amounts and payment totals
  const creditsWithPayments = filteredCredits.map(credit => {
    const totalPaid = credit.payments?.reduce((sum, payment) => sum + payment.amount, 0) || 0;
    const remaining = credit.amount - totalPaid;
    const status = remaining <= 0 ? 'Paid' : 'Pending';
    return { ...credit, totalPaid, remaining, status };
  });

  // Get active (unpaid) credits for totals
  const activeCredits = creditsWithPayments.filter(credit => credit.remaining > 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <ManagerSidebar />
      <div className="md:ml-64 p-2 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-8 gap-2 md:gap-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Credit Report</h1>
            <button
              onClick={() => router.push('/manager/credit-report')}
              className="bg-gray-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-gray-600 text-sm md:text-base"
            >
              Back to Calendar
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-3 md:p-6 mb-4 md:mb-8">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
              <div className="flex-1 bg-gray-50 p-3 md:p-4 rounded-lg mb-2 md:mb-0">
                <h3 className="text-xs md:text-sm font-medium text-gray-500">Total Active Credits</h3>
                <p className="text-lg md:text-2xl font-bold text-indigo-600">
                  {activeCredits.reduce((sum, credit) => sum + credit.remaining, 0).toFixed(2)} birr
                </p>
              </div>
              <div className="flex-1 bg-red-50 p-3 md:p-4 rounded-lg mb-2 md:mb-0">
                <h3 className="text-xs md:text-sm font-medium text-gray-500">Money Owed</h3>
                <p className="text-lg md:text-2xl font-bold text-red-600">
                  {activeCredits
                    .filter(credit => credit.type === 'OWED')
                    .reduce((sum, credit) => sum + credit.remaining, 0)
                    .toFixed(2)} birr
                </p>
              </div>
              <div className="flex-1 bg-green-50 p-3 md:p-4 rounded-lg">
                <h3 className="text-xs md:text-sm font-medium text-gray-500">Money to Receive</h3>
                <p className="text-lg md:text-2xl font-bold text-green-600">
                  {activeCredits
                    .filter(credit => credit.type === 'TO_RECEIVE')
                    .reduce((sum, credit) => sum + credit.remaining, 0)
                    .toFixed(2)} birr
                </p>
              </div>
            </div>
          </div>

          {/* Add Credit Form */}
          <div className="bg-white rounded-lg shadow p-3 md:p-6 mb-4 md:mb-8">
            <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Add New Credit Entry</h2>
            <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.personName}
                  onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs md:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700">Amount (birr)</label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs md:text-base"
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700">Purpose</label>
                <textarea
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs md:text-base"
                  rows="2"
                  required
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700">Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs md:text-base"
                >
                  <option value="OWED">Money Owed to Others</option>
                  <option value="TO_RECEIVE">Money to Receive</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-xs md:text-base"
                disabled={uploading}
              >
                {uploading ? 'Adding...' : 'Add Credit Entry'}
              </button>
            </form>
          </div>

          {/* Credits History */}
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <h2 className="text-lg md:text-xl font-semibold p-3 md:p-6">Credit History</h2>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded m-6">
                {error}
              </div>
            )}
            <div className="min-w-[700px] md:min-w-0">
              <table className="min-w-full divide-y divide-gray-200 text-xs md:text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid Amount</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {creditsWithPayments.map((credit) => (
                    <React.Fragment key={credit.id}>
                      <tr>
                        <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm text-gray-900">
                          {credit.personName}
                        </td>
                        <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm text-gray-900">
                          {credit.amount.toFixed(2)} birr
                        </td>
                        <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm text-gray-900">
                          {credit.totalPaid.toFixed(2)} birr
                        </td>
                        <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm text-gray-900">
                          {credit.remaining.toFixed(2)} birr
                        </td>
                        <td className="px-2 md:px-6 py-3 text-sm text-gray-500">
                          {credit.purpose}
                        </td>
                        <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                          {credit.type === 'OWED' ? 'Money Owed' : 'To Receive'}
                        </td>
                        <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                          {new Date(credit.dueDate).toLocaleDateString()}
                        </td>
                        <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            credit.status === 'Paid' ? 'bg-green-100 text-green-800' :
                            credit.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {credit.status}
                          </span>
                        </td>
                        <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm">
                          {credit.remaining > 0 && (
                            <button
                              onClick={() => openPaymentModal(credit)}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Record Payment
                            </button>
                          )}
                        </td>
                      </tr>
                      {credit.payments && credit.payments.length > 0 && (
                        <tr>
                          <td colSpan="9" className="px-2 md:px-6 py-2 bg-gray-50">
                            <div className="text-sm text-gray-600">
                              <div className="font-medium mb-1">Payment History:</div>
                              <div className="space-y-1">
                                {credit.payments.map((payment, index) => (
                                  <div key={`${credit.id}-payment-${index}`} className="flex justify-between items-center text-xs">
                                    <div>
                                      <span className="font-medium">{payment.amount.toFixed(2)} birr</span>
                                      <span className="mx-2">-</span>
                                      <span>{payment.method}</span>
                                      {payment.notes && (
                                        <span className="ml-2 text-gray-500">({payment.notes})</span>
                                      )}
                                    </div>
                                    <div className="text-gray-500">
                                      {new Date(payment.paymentDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedCredit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 md:p-6 max-w-md w-full mx-2">
            <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Record Payment</h2>
            <div className="space-y-2 md:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <input
                  type="number"
                  value={paymentData.amount}
                  onChange={(e) => setPaymentData({ ...paymentData, amount: e.target.value })}
                  className="mt-1 p-2 border rounded w-full"
                  placeholder="Enter payment amount"
                  max={selectedCredit.remaining}
                  step="0.01"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Remaining amount: {selectedCredit.remaining.toFixed(2)} birr
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                <select
                  value={paymentData.method}
                  onChange={(e) => setPaymentData({ ...paymentData, method: e.target.value })}
                  className="mt-1 p-2 border rounded w-full"
                >
                  <option value="Cash">Cash</option>
                  <option value="Transfer">Transfer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Notes</label>
                <textarea
                  value={paymentData.notes}
                  onChange={(e) => setPaymentData({ ...paymentData, notes: e.target.value })}
                  className="mt-1 p-2 border rounded w-full"
                  placeholder="Add any notes about the payment"
                />
              </div>
              
              {loadingPayments ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mx-auto"></div>
                  <p className="mt-2 text-gray-600">Loading payment history...</p>
                </div>
              ) : paymentHistory.length > 0 ? (
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Payment History</h3>
                  <div className="space-y-2">
                    {paymentHistory.map((payment, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded border border-gray-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium">
                              {payment.amount.toFixed(2)} birr
                            </p>
                            <p className="text-xs text-gray-600">
                              Method: {payment.method}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">
                              {new Date(payment.paymentDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                        </div>
                        {payment.notes && (
                          <p className="text-xs text-gray-600 mt-1 border-t border-gray-200 pt-1">
                            Note: {payment.notes}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="flex justify-end space-x-2 md:space-x-3 mt-4 md:mt-6">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="px-3 py-2 border rounded hover:bg-gray-50 text-xs md:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePayment}
                  className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-xs md:text-base"
                  disabled={!paymentData.amount || loading}
                >
                  {loading ? 'Recording...' : 'Record Payment'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 