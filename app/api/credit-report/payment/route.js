import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../app/api/auth/[...nextauth]/auth';
import prisma from '../../../../lib/prisma';

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { creditId, amount, method, notes, paymentDate } = await request.json();

    if (!creditId || !amount || !method) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (method !== 'Cash' && method !== 'Transfer') {
      return NextResponse.json(
        { error: 'Invalid payment method' },
        { status: 400 }
      );
    }

    // Use a transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx) => {
      // Get the credit and verify it belongs to the user
      const credit = await tx.credit.findFirst({
        where: {
          id: creditId,
          createdById: session.user.id
        },
        include: {
          payments: true
        }
      });

      if (!credit) {
        throw new Error('Credit not found');
      }

      // Calculate total paid amount including the new payment
      const totalPaid = credit.payments.reduce((sum, payment) => sum + payment.amount, 0) + parseFloat(amount);

      // Verify the payment doesn't exceed the credit amount
      if (totalPaid > credit.amount) {
        throw new Error('Payment amount exceeds credit amount');
      }

      // Create the payment record
      const payment = await tx.payment.create({
        data: {
          amount: parseFloat(amount),
          method,
          notes,
          paymentDate: paymentDate ? new Date(paymentDate) : new Date(),
          creditId,
          createdById: session.user.id
        }
      });

      console.log('Created payment with date:', payment.paymentDate);

      // Update credit status if fully paid
      if (totalPaid >= credit.amount) {
        await tx.credit.update({
          where: { id: creditId },
          data: { status: 'Paid' }
        });
      }

      return payment;
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to record payment' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const creditId = searchParams.get('creditId');

    if (!creditId) {
      return NextResponse.json(
        { error: 'Credit ID is required' },
        { status: 400 }
      );
    }

    console.log('Fetching payments for credit:', creditId);

    // Get the credit and verify it belongs to the user
    const credit = await prisma.credit.findFirst({
      where: {
        id: creditId,
        createdById: session.user.id
      },
      include: {
        payments: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    if (!credit) {
      console.log('Credit not found:', creditId);
      return NextResponse.json(
        { error: 'Credit not found' },
        { status: 404 }
      );
    }

    console.log('Found payments:', credit.payments.length);
    return NextResponse.json({ payments: credit.payments });
  } catch (error) {
    console.error('Error in GET /api/credit-report/payment:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch payment history' },
      { status: 500 }
    );
  }
} 