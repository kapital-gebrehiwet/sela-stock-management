import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../app/api/auth/[...nextauth]/auth';
import prisma from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// GET: List all menu items
export async function GET() {
  try {
    const menuItems = await prisma.menuItem.findMany({
      orderBy: {
        category: 'asc',
      },
    });
    return NextResponse.json(Array.isArray(menuItems) ? menuItems : []);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return NextResponse.json([], { status: 500 });
  }
}

// POST: Add a new menu item
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'owner') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const name = formData.get('name');
    const category = formData.get('category');
    const price = formData.get('price');
    const image = formData.get('image');

    if (!name || !category || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    let imagePath = null;
    if (image && image.name) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await mkdir(uploadDir, { recursive: true });
      const filename = `${Date.now()}-${image.name}`;
      const filePath = path.join(uploadDir, filename);
      await writeFile(filePath, buffer);
      imagePath = `/uploads/${filename}`;
    }

    const menuItem = await prisma.menuItem.create({
      data: {
        name,
        category,
        price: parseFloat(price),
        image: imagePath,
      },
    });

    return NextResponse.json(menuItem);
  } catch (error) {
    console.error('Error creating menu item:', error);
    return NextResponse.json(
      { error: 'Failed to create menu item' },
      { status: 500 }
    );
  }
}

// PUT: Edit a menu item
export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'owner') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const id = formData.get('id');
    const name = formData.get('name');
    const category = formData.get('category');
    const price = formData.get('price');
    const image = formData.get('image');

    if (!id || !name || !category || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    let imagePath = undefined;
    if (image && image.name) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await mkdir(uploadDir, { recursive: true });
      const filename = `${Date.now()}-${image.name}`;
      const filePath = path.join(uploadDir, filename);
      await writeFile(filePath, buffer);
      imagePath = `/uploads/${filename}`;
    }

    const menuItem = await prisma.menuItem.update({
      where: { id },
      data: {
        name,
        category,
        price: parseFloat(price),
        ...(imagePath ? { image: imagePath } : {}),
      },
    });

    return NextResponse.json(menuItem);
  } catch (error) {
    console.error('Error updating menu item:', error);
    return NextResponse.json(
      { error: 'Failed to update menu item' },
      { status: 500 }
    );
  }
}

// DELETE: Remove a menu item
export async function DELETE(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'owner') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Menu item ID is required' },
        { status: 400 }
      );
    }

    await prisma.menuItem.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    console.error('Error deleting menu item:', error);
    return NextResponse.json(
      { error: 'Failed to delete menu item' },
      { status: 500 }
    );
  }
} 