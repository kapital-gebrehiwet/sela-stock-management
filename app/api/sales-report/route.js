import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../app/api/auth/[...nextauth]/auth';
import prisma from '@/lib/prisma';

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      console.log('Unauthorized access attempt');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const date = searchParams.get('date');
    console.log('Received date parameter:', date);
    
    if (!date) {
      console.log('No date parameter provided');
      return NextResponse.json({ error: 'Date parameter is required' }, { status: 400 });
    }

    // Create date range for the entire day
    const startDate = new Date(date);
    startDate.setUTCHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setUTCHours(23, 59, 59, 999);

    console.log('Query date range:', {
      start: startDate.toISOString(),
      end: endDate.toISOString(),
      managerId: session.user.id
    });

    // Get sales for the specified date
    const sales = await prisma.salesReport.findMany({
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

    console.log('Found sales:', sales.length);
    if (sales.length > 0) {
      console.log('First sale:', {
        id: sales[0].id,
        itemName: sales[0].itemName,
        amount: sales[0].amount,
        createdAt: sales[0].createdAt,
        cashAmount: sales[0].cashAmount,
        transferAmount: sales[0].transferAmount
      });
    }

    return NextResponse.json({ sales });
  } catch (error) {
    console.error('Error in GET /api/sales-report:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sales reports', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      console.log('Unauthorized access attempt');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    console.log('Received form data:', Object.fromEntries(formData.entries()));

    const itemName = formData.get('itemName');
    const amount = parseInt(formData.get('amount'));
    const unitPrice = parseFloat(formData.get('unitPrice'));
    const totalPrice = parseFloat(formData.get('totalPrice'));
    const date = formData.get('date');
    const image = formData.get('image');
    const cashAmount = parseFloat(formData.get('cashAmount') || '0');
    const transferAmount = parseFloat(formData.get('transferAmount') || '0');

    // Create a Date object from the provided date string and set to UTC midnight
    const saleDate = new Date(date);
    saleDate.setUTCHours(0, 0, 0, 0);

    console.log('Creating sale with data:', {
      itemName,
      amount,
      unitPrice,
      totalPrice,
      date: saleDate.toISOString(),
      cashAmount,
      transferAmount,
      managerId: session.user.id
    });

    const sale = await prisma.salesReport.create({
      data: {
        itemName,
        amount,
        unitPrice,
        totalPrice,
        image: image ? image : null,
        managerId: session.user.id,
        cashAmount,
        transferAmount,
        createdAt: saleDate,
      },
    });

    console.log('Created sale:', sale);
    return NextResponse.json(sale);
  } catch (error) {
    console.error('Error in POST /api/sales-report:', error);
    return NextResponse.json(
      { error: 'Failed to create sales report', details: error.message },
      { status: 500 }
    );
  }
} 