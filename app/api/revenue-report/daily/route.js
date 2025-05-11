import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { error: 'Date is required' },
        { status: 400 }
      );
    }

    // Get the start and end of the day
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // 1. Sales (from SalesReport)
    const sales = await prisma.salesReport.findMany({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay
        }
      }
    });
    const totalSales = sales.reduce((sum, sale) => sum + (sale.totalPrice || 0), 0);

    // 2. Expenses (from ManagerExpense)
    const expenses = await prisma.managerExpense.findMany({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay
        }
      }
    });
    const totalExpenses = expenses.reduce((sum, exp) => sum + (exp.amount || 0), 0);

    // 3. Staff Fees (all active staff, monthlyFee / daysInMonth)
    const staff = await prisma.staff.findMany({
      where: { status: 'Active' }
    });
    const daysInMonth = new Date(startOfDay.getFullYear(), startOfDay.getMonth() + 1, 0).getDate();
    const totalStaffMonthly = staff.reduce((sum, s) => sum + (s.monthlyFee || 0), 0);
    const dailyStaffFee = totalStaffMonthly / daysInMonth;

    // 4. Stock Value (from StockEntry, sum value of all items)
    const stockEntries = await prisma.stockEntry.findMany({
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay
        }
      }
    });
    let stockValue = 0;
    for (const entry of stockEntries) {
      let itemsArr = [];
      if (Array.isArray(entry.items)) {
        itemsArr = entry.items;
      } else if (entry.items) {
        try {
          itemsArr = typeof entry.items === 'string' ? JSON.parse(entry.items) : entry.items;
        } catch (e) {}
      }
      stockValue += itemsArr.reduce(
        (sum, item) => sum + ((item.amount || 0) * (item.estimatedPrice || 0)),
        0
      );
    }

    // 5. Credits (from Credit model)
    const credits = await prisma.credit.findMany({
      where: {
        dueDate: {
          gte: startOfDay,
          lte: endOfDay
        }
      },
      include: {
        payments: true
      }
    });

    // Calculate remaining for each credit
    let totalOwedRemaining = 0;
    let totalToReceiveRemaining = 0;

    credits.forEach(c => {
      const paid = c.payments?.reduce((sum, p) => sum + (p.amount || 0), 0) || 0;
      const remaining = (c.amount || 0) - paid;
      if (c.type === 'OWED') totalOwedRemaining += remaining > 0 ? remaining : 0;
      if (c.type === 'TO_RECEIVE') totalToReceiveRemaining += remaining > 0 ? remaining : 0;
    });

    const totalOwed = credits
      .filter(c => c.type === 'OWED')
      .reduce((sum, c) => sum + (c.amount || 0), 0);

    const totalToReceive = credits
      .filter(c => c.type === 'TO_RECEIVE')
      .reduce((sum, c) => sum + (c.amount || 0), 0);

    return NextResponse.json({
      date,
      totalSales,
      totalExpenses,
      totalTransactions: sales.length,
      expenseCount: expenses.length,
      staffFees: dailyStaffFee,
      stockValue,
      totalOwed,
      totalToReceive,
      totalOwedRemaining,
      totalToReceiveRemaining,
      sales,
      expenses,
      stockEntries,
      credits
    });
  } catch (error) {
    console.error('Error calculating daily revenue:', error);
    return NextResponse.json(
      { error: 'Failed to calculate daily revenue' },
      { status: 500 }
    );
  }
}
