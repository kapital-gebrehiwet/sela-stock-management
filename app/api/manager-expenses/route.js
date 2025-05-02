import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/auth';
import  prisma  from '../../../lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    // Only show expenses for the logged-in manager
    const expenses = await prisma.managerExpense.findMany({
      where: { managerId: session.user.id },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(expenses);
  } catch (error) {
    console.error('Error fetching manager expenses:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const formData = await request.formData();
    const amount = parseFloat(formData.get('amount'));
    const description = formData.get('description');
    const receipt = formData.get('receipt');
    if (!amount || !description) {
      return NextResponse.json({ error: 'Amount and description are required' }, { status: 400 });
    }
    let receiptUrl = null;
    if (receipt && receipt.name) {
      const uploadsDir = path.join(process.cwd(), 'uploads');
      await mkdir(uploadsDir, { recursive: true });
      const bytes = await receipt.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${receipt.name}`;
      const filePath = path.join(uploadsDir, fileName);
      await writeFile(filePath, buffer);
      receiptUrl = `/api/uploads/${fileName}`;
    }
    const expense = await prisma.managerExpense.create({
      data: {
        amount,
        description,
        receipt: receiptUrl,
        managerId: session.user.id,
      },
    });
    return NextResponse.json(expense);
  } catch (error) {
    console.error('Error creating manager expense:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 