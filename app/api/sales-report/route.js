import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../app/api/auth/[...nextauth]/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'manager') {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json({ error: 'Date parameter is required' }, { status: 400 });
    }

    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return NextResponse.json({ error: 'Invalid date format. Use YYYY-MM-DD' }, { status: 400 });
    }

    // Create date range for the entire day
    const startDate = new Date(date);
    startDate.setUTCHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setUTCHours(23, 59, 59, 999);

    const sales = await prisma.SalesReport.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
        managerId: session.user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!sales || sales.length === 0) {
      return NextResponse.json({ sales: [], message: 'No sales found for this date' });
    }

    return NextResponse.json({ sales });
  } catch (error) {
    console.error('Error fetching sales:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch sales',
      details: error.message 
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'manager') {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    const formData = await request.formData();
    const itemName = formData.get('itemName');
    const amount = formData.get('amount');
    const unitPrice = formData.get('unitPrice');
    const totalPrice = formData.get('totalPrice');
    const date = formData.get('date');
    const cashAmount = formData.get('cashAmount');
    const transferAmount = formData.get('transferAmount');

    // Validate required fields
    if (!itemName || !amount || !unitPrice || !totalPrice || !date) {
      return NextResponse.json({ 
        error: 'Missing required fields',
        missingFields: {
          itemName: !itemName,
          amount: !amount,
          unitPrice: !unitPrice,
          totalPrice: !totalPrice,
          date: !date
        }
      }, { status: 400 });
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return NextResponse.json({ error: 'Invalid date format. Use YYYY-MM-DD' }, { status: 400 });
    }

    // Create a Date object from the provided date string and set to UTC midnight
    const saleDate = new Date(date);
    saleDate.setUTCHours(0, 0, 0, 0);

    const sale = await prisma.SalesReport.create({
      data: {
        itemName,
        amount: parseInt(amount),
        unitPrice: parseFloat(unitPrice),
        totalPrice: parseFloat(totalPrice),
        cashAmount: parseFloat(cashAmount) || 0,
        transferAmount: parseFloat(transferAmount) || 0,
        managerId: session.user.id,
        createdAt: saleDate,
      },
    });

    return NextResponse.json(sale);
  } catch (error) {
    console.error('Error creating sale report:', error);
    return NextResponse.json({ 
      error: 'Failed to create sale report',
      details: error.message 
    }, { status: 500 });
  }
} 