import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../app/api/auth/[...nextauth]/auth';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'owner') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const items = await request.json();
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 });
    }
    const createdItems = [];
    for (const item of items) {
      const created = await prisma.menuItem.create({
        data: {
          name: item.name,
          category: item.category,
          price: parseFloat(item.price),
        },
      });
      createdItems.push(created);
    }
    return NextResponse.json(createdItems);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to batch create menu items' }, { status: 500 });
  }
} 