'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const OwnerSidebar = () => {
  const pathname = usePathname();
  const [currentMonth, setCurrentMonth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCurrentMonth();
  }, []);

  const fetchCurrentMonth = async () => {
    try {
      const response = await fetch('/api/month-selection');
      if (response.ok) {
        const data = await response.json();
        setCurrentMonth(data);
      }
    } catch (error) {
      console.error('Error fetching current month:', error);
    } finally {
      setLoading(false);
    }
  };

  const lists = [
    {
      name: 'Set Month/Year',
      icon: 'Calendar',
      href: '/owner/set-month'
    },
    {
      name: 'Stock Level',
      icon: 'ChartBar',
      href: '/owner/stock-level'
    },
    {
      name: 'Staff Members',
      icon: 'Users',
      href: '/owner/staff'
    },
    {
      name: 'Setted Months',
      icon: 'Calendar',
      href: '/owner/month-history'
    },
    {
      name: 'Owner Fund',
      icon: 'Money',
      href: '/owner/fund'
    },
    {
      name: 'Set menu',
      icon: 'Money',
      href: '/owner/menu'
    }
  ];

  return (
    <div className='fixed left-0 top-16 h-full w-64 bg-slate-800 text-white'>
      <nav className="mt-6">
        <div className="px-4 space-y-2">
          {lists.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block w-full text-left px-4 py-2 text-gray-300 rounded-lg ${
                pathname === item.href ? 'bg-slate-700 text-white' : 'hover:bg-slate-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 w-full p-4">
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full px-4 py-2 text-sm text-red-400 hover:bg-slate-700 rounded-lg"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default OwnerSidebar;
