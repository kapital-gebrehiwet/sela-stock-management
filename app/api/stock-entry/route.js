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

    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json({ error: 'Date is required' }, { status: 400 });
    }

    // Find stock entry for the given date
    const stockEntry = await prisma.stockEntry.findFirst({
      where: {
        date: new Date(date),
      },
      include: {
        createdBy: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });

    if (!stockEntry) {
      return NextResponse.json({ items: [] });
    }

    return NextResponse.json({
      items: stockEntry.items,
      createdBy: stockEntry.createdBy
    });
  } catch (error) {
    console.error('Error fetching stock entry:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stock entry' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { date, items } = await request.json();

    // Create stock entry record
    const stockEntry = await prisma.stockEntry.create({
      data: {
        date: new Date(date),
        items: items,
        createdBy: {
          connect: {
            id: session.user.id
          }
        }
      }
    });

    return NextResponse.json({ success: true, stockEntry });
  } catch (error) {
    console.error('Error creating stock entry:', error);
    return NextResponse.json(
      { error: 'Failed to create stock entry' },
      { status: 500 }
    );
  }
} 