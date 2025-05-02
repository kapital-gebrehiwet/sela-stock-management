import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../app/api/auth/[...nextauth]/auth';
import path from 'path';
import { readFile } from 'fs/promises';

export async function GET(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { filename } = params;
    const filePath = path.join(process.cwd(), 'uploads', filename);
    
    try {
      const file = await readFile(filePath);
      const contentType = getContentType(filename);
      
      return new NextResponse(file, {
        headers: {
          'Content-Type': contentType,
          'Content-Disposition': `inline; filename="${filename}"`,
        },
      });
    } catch (error) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error serving file:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function getContentType(filename) {
  const extension = filename.split('.').pop().toLowerCase();
  const types = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    pdf: 'application/pdf',
  };
  return types[extension] || 'application/octet-stream';
} 