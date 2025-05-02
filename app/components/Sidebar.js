'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  const navItems = [
    { name: 'Dashboard', path: '/manager' },
    { name: 'Add Stock', path: '/manager/stock-entry' },
    { name: 'Sales Report', path: '/manager/sales-report' },
    { name: 'Credit Report', path: '/manager/credit-report' },
    { name: 'Staff List', path: '/manager/staff' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-8">Manager Panel</h2>
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
} 