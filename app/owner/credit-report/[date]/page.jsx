// app/manager/credit-report/[date]/page.js
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import OwnerSidebar from '../../../../components/ownersidebar';

export default function CreditReportDatePage() {
  const params = useParams();
  const date = params.date;
  const { data: session, status } = useSession();
  const router = useRouter();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      fetchCredits();
    }
  }, [status, router]);

  const fetchCredits = async () => {
    try {
      const response = await fetch(`/api/owner/credit-report?date=${date}`);
      if (response.ok) {
        const data = await response.json();
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

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Calculate remaining amounts and payment totals
  const creditsWithPayments = credits.map(credit => {
    const totalPaid = credit.payments?.reduce((sum, payment) => sum + payment.amount, 0) || 0;
    const remaining = credit.amount - totalPaid;
    const status = remaining <= 0 ? 'Paid' : 'Pending';
    return { ...credit, totalPaid, remaining, status };
  });

  // Get active (unpaid) credits for totals
  const activeCredits = creditsWithPayments.filter(credit => credit.remaining > 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <OwnerSidebar />
      <div className="md:ml-64 p-2 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-8 gap-2 md:gap-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Credit Report</h1>
            <button
              onClick={() => router.push('/owner/credit-report')}
              className="bg-gray-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-gray-600 text-sm md:text-base"
            >
              Back to Calendar
            </button>
          </div>

          {/* Summary Cards */}
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

          {/* Credits Table */}
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
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {creditsWithPayments.map((credit) => (
                    <tr key={credit.id}>
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
                      <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          credit.status === 'Paid' ? 'bg-green-100 text-green-800' :
                          credit.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {credit.status}
                        </span>
                      </td>
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