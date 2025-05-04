import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import PDFDocument from 'pdfkit';

export async function GET() {
  try {
    const menuItems = await prisma.menuItem.findMany({
      orderBy: [
        { category: 'asc' },
        { name: 'asc' },
      ],
    });

    // Group items by category
    const groupedItems = menuItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    // Create PDF document
    const doc = new PDFDocument({
      size: 'A4',
      margin: 50,
    });

    // Set up response headers
    const chunks = [];
    doc.on('data', (chunk) => chunks.push(chunk));

    // Add content to PDF
    doc.fontSize(24).text('Menu', { align: 'center' });
    doc.moveDown(2);

    // Add each category and its items
    Object.entries(groupedItems).forEach(([category, items]) => {
      doc.fontSize(18).text(category, { underline: true });
      doc.moveDown();

      items.forEach((item) => {
        doc.fontSize(12);
        doc.text(item.name, { continued: true });
        doc.text(`$${item.price.toFixed(2)}`, { align: 'right' });
        
        if (item.description) {
          doc.fontSize(10).text(item.description, { indent: 20 });
        }
        
        doc.moveDown();
      });

      doc.moveDown(2);
    });

    // Finalize PDF
    doc.end();

    // Wait for PDF to be generated
    const pdfBuffer = await new Promise((resolve) => {
      doc.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
    });

    // Return PDF as response
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="menu.pdf"',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate PDF menu' },
      { status: 500 }
    );
  }
} 