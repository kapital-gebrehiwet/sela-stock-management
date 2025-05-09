import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../app/api/auth/[...nextauth]/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Optionally filter by date if provided
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get('date');
    let dateFilter = {};
    if (dateParam) {
      // Filter credits up to the selected date
      dateFilter = {
        dueDate: {
          lte: new Date(dateParam)
        }
      };
    }

    // Fetch credits owed by the user (money owed to others)
    const moneyOwed = await prisma.credit.findMany({
      where: {
        createdById: session.user.id,
        type: 'OWED',
        ...dateFilter
      },
      include: {
        payments: true
      },
      orderBy: {
        dueDate: 'asc'
      }
    });

    // Fetch credits to be received by the user (money others owe to user)
    const moneyToReceive = await prisma.credit.findMany({
      where: {
        createdById: session.user.id,
        type: 'TO_RECEIVE',
        ...dateFilter
      },
      include: {
        payments: true
      },
      orderBy: {
        dueDate: 'asc'
      }
    });

    return NextResponse.json({ moneyOwed, moneyToReceive });
  } catch (error) {
    console.error('Error fetching credits:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch credits' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { personName, amount, purpose, type, status, dueDate } = data;

    // Validate required fields
    if (!personName || !amount || !purpose || !type || !status || !dueDate) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate type values
    if (!['OWED', 'TO_RECEIVE'].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid type value. Must be either OWED or TO_RECEIVE' },
        { status: 400 }
      );
    }

    // Validate status values
    if (!['Pending', 'Paid', 'Overdue'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value. Must be either Pending, Paid, or Overdue' },
        { status: 400 }
      );
    }

    // Create new credit entry
    const credit = await prisma.credit.create({
      data: {
        personName,
        amount: parseFloat(amount),
        purpose,
        type,
        status,
        dueDate: new Date(dueDate),
        createdBy: {
          connect: {
            id: session.user.id
          }
        }
      },
      select: {
        id: true,
        personName: true,
        amount: true,
        purpose: true,
        type: true,
        status: true,
        dueDate: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return NextResponse.json(credit);
  } catch (error) {
    console.error('Error creating credit entry:', error);
    return NextResponse.json(
      { error: 'Failed to create credit entry' },
      { status: 500 }
    );
  }
} 