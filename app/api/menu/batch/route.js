import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../app/api/auth/[...nextauth]/auth';
import prisma from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

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
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });
    const createdItems = [];
    for (const item of items) {
      let imagePath = null;
      if (item.image && item.imageDataUrl) {
        // imageDataUrl is a base64 data URL
        const matches = item.imageDataUrl.match(/^data:(.+);base64,(.+)$/);
        if (matches) {
          const ext = item.image.name.split('.').pop();
          const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
          const filePath = path.join(uploadDir, filename);
          await writeFile(filePath, Buffer.from(matches[2], 'base64'));
          imagePath = `/uploads/${filename}`;
        }
      }
      const created = await prisma.menuItem.create({
        data: {
          name: item.name,
          category: item.category,
          price: parseFloat(item.price),
          image: imagePath,
        },
      });
      createdItems.push(created);
    }
    return NextResponse.json(createdItems);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to batch create menu items' }, { status: 500 });
  }
} 