import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../app/api/auth/[...nextauth]/auth';
import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'owner') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  let where = {};
  if (date) {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return NextResponse.json({ error: 'Invalid date parameter' }, { status: 400 });
    }
    d.setHours(0, 0, 0, 0);
    const end = new Date(d);
    end.setHours(23, 59, 59, 999);
    where.createdAt = { gte: d, lte: end };
  }

  const expenses = await prisma.managerExpense.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(expenses);
}
