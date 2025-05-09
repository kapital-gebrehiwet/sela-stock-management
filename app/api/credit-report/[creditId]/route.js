import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../app/api/auth/[...nextauth]/auth';
import prisma from '../../../../lib/prisma';

export async function PATCH(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { creditId } = params;
    const { status } = await request.json();

    // Validate status
    if (!['Pending', 'Paid', 'Overdue'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be Pending, Paid, or Overdue' },
        { status: 400 }
      );
    }

    // Update the credit status
    const updatedCredit = await prisma.credit.update({
      where: {
        id: creditId,
        createdById: session.user.id, // Ensure the credit belongs to the current user
      },
      data: {
        status,
      },
    });

    return NextResponse.json(updatedCredit);
  } catch (error) {
    console.error('Error updating credit status:', error);
    return NextResponse.json(
      { error: 'Failed to update credit status' },
      { status: 500 }
    );
  }
} 