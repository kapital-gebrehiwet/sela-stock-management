import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../app/api/auth/[...nextauth]/auth';
import prisma from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import path from 'path';
import { mkdir } from 'fs/promises';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const staff = await prisma.staff.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(staff);
  } catch (error) {
    console.error('Error fetching staff:', error);
    return NextResponse.json(
      { error: 'Failed to fetch staff' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    console.log("Session in staff creation:", session);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!session.user?.id) {
      console.error("User ID not found in session:", session);
      return NextResponse.json(
        { error: 'User ID not found in session' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const country = formData.get('country');
    const monthlyFee = formData.get('monthlyFee');
    const role = formData.get('role');
    const status = formData.get('status');
    const image = formData.get('image');

    // Validate required fields
    if (!name || !email || !country || !monthlyFee) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingStaff = await prisma.staff.findUnique({
      where: { email },
    });

    if (existingStaff) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }

    let imagePath = null;
    if (image) {
      try {
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        // Get the original extension
        const originalName = image.name;
        const ext = originalName.substring(originalName.lastIndexOf('.'));
        // Create a unique filename with the correct extension
        const filename = `${Date.now()}-${originalName}`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        
        // Ensure the uploads directory exists
        try {
          await mkdir(uploadDir, { recursive: true });
        } catch (error) {
          console.error('Error creating uploads directory:', error);
        }
        
        // Save the file
        const filePath = path.join(uploadDir, filename);
        await writeFile(filePath, buffer);
        
        imagePath = `/uploads/${filename}`;
        console.log('Image saved successfully:', imagePath);
      } catch (error) {
        console.error('Error saving image:', error);
        return NextResponse.json(
          { error: 'Failed to save image' },
          { status: 500 }
        );
      }
    }

    console.log("Creating staff with user ID:", session.user.id);

    const staff = await prisma.staff.create({
      data: {
        name,
        email,
        country,
        monthlyFee: parseFloat(monthlyFee),
        role,
        status,
        image: imagePath,
        createdBy: {
          connect: {
            id: session.user.id
          }
        }
      },
    });

    return NextResponse.json(staff);
  } catch (error) {
    console.error('Error creating staff:', error);
    return NextResponse.json(
      { error: 'Failed to create staff' },
      { status: 500 }
    );
  }
} 