// app/api/credit-report/route.js
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Get credits for the specified date
    const credits = await prisma.credit.findMany({
      where: {
        dueDate: {
          equals: new Date(date)
        }
      },
      include: {
        payments: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Separate money owed and money to receive
    const moneyOwed = credits.filter(credit => credit.type === 'OWED');
    const moneyToReceive = credits.filter(credit => credit.type === 'TO_RECEIVE');

    return NextResponse.json({
      moneyOwed,
      moneyToReceive
    });
  } catch (error) {
    console.error('Error fetching credits:', error);
    return NextResponse.json(
      { error: 'Failed to fetch credits' },
      { status: 500 }
    );
  }
}