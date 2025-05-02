import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/auth';

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'owner') {
      return NextResponse.json({ error: 'Only owner can set month and year' }, { status: 403 });
    }

    const { month, year } = await req.json();

    if (!month || !year) {
      return NextResponse.json({ error: 'Month and year are required' }, { status: 400 });
    }

    // Find the user first
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id
      }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const monthSelection = await prisma.monthSelection.create({
      data: {
        month,
        year,
        createdBy: {
          connect: {
            id: user.id
          }
        }
      }
    });

    return NextResponse.json(monthSelection);
  } catch (error) {
    console.error('Error in month selection:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(req.url);
    const all = url.searchParams.get('all');

    if (all === 'true') {
      // Fetch all month selections
      const monthSelections = await prisma.monthSelection.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          createdBy: {
            select: {
              name: true,
              email: true
            }
          }
        }
      });
      return NextResponse.json(monthSelections);
    } else {
      // Fetch only the latest month selection
      const monthSelection = await prisma.monthSelection.findFirst({
        orderBy: {
          createdAt: 'desc',
        }
      });
      return NextResponse.json(monthSelection);
    }
  } catch (error) {
    console.error('Error fetching month selection:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 