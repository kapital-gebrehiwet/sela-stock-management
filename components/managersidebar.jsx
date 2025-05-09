'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {ChartBar, Home,BanknoteArrowDownIcon,PlusIcon,Sticker,BadgeEuro,CreditCard,PersonStanding} from "lucide-react"

const Managersidebar = () => {
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path;
    };

    const lists = [
        {
            name: 'Dashboard',
            icon: Home,
            href: '/manager'
        },
        {
            name: 'Add Stock',
            icon: PlusIcon,
            href: '/manager/stock-entry'
        },
        {
            name: 'Stock Level',
            icon: Sticker,
            href: '/manager/stock-level'
        },
        {
            name: 'Sales Report',
            icon: BadgeEuro,
            href: '/manager/sales-report'
        },
        {
            name: 'Credit Report',
            icon:CreditCard,
            href: '/manager/credit-report'
        },
        {
            name: 'Staff List',
            icon:PersonStanding,
            href: '/manager/staff'
        },
        {
            name: 'Expenses',
            icon: BanknoteArrowDownIcon,
            href: '/manager/expenses'
        }
    ]
    
    return (
        <div className='fixed left-0 top-16 h-full w-64 bg-slate-800 text-white'>
            <div className='p-4'>
                <h2 className="text-xl font-bold mb-6">Manager Panel</h2>
                <ul className='space-y-2'>
                    {lists.map((item) => (
                        <li key={item.name}>

                            <Link 
                                href={item.href}
                                className={`flex items-center p-3 rounded-md transition-colors ${
                                    isActive(item.href)
                                        ? 'bg-slate-700 text-white'
                                        : 'text-gray-300 hover:bg-slate-700'
                                }`}
                            >   
                                <item.icon className="mr-2 h-4 w-4"/>
                                <span className='ml-2'> {item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Managersidebar