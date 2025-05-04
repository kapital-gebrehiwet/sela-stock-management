import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../app/api/auth/[...nextauth]/auth';
import prisma from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import path from 'path';
import { mkdir } from 'fs/promises';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const funds = await prisma.ownerFund.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });

    return NextResponse.json(funds);
  } catch (error) {
    console.error('Error fetching funds:', error);
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
    const purpose = formData.get('purpose');
    const receipt = formData.get('receipt');

    if (!amount || !purpose || !receipt) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'uploads');
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (error) {
      console.error('Error creating uploads directory:', error);
    }

    // Save the receipt file
    const bytes = await receipt.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${receipt.name}`;
    const filePath = path.join(uploadsDir, fileName);
    await writeFile(filePath, buffer);

    const fund = await prisma.ownerFund.create({
      data: {
        amount,
        purpose,
        receipt: `/api/uploads/${fileName}`,
        userId: session.user.id
      },
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });

    return NextResponse.json(fund);
  } catch (error) {
    console.error('Error creating fund:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 