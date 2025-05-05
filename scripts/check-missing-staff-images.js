// scripts/check-missing-staff-images.js
// Usage: node scripts/check-missing-staff-images.js

const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const uploadsDir = path.join(__dirname, '../public/uploads');

async function main() {
  const staff = await prisma.staff.findMany();
  let missing = 0;
  let checked = 0;
  for (const member of staff) {
    if (!member.image || member.image === '' || member.image === 'null') continue;
    // Remove leading slash if present
    let imgPath = member.image.startsWith('/') ? member.image.slice(1) : member.image;
    const fullPath = path.join(__dirname, '../', imgPath);
    checked++;
    if (!fs.existsSync(fullPath)) {
      console.log(`Missing file for staff: ${member.name}, expected: ${fullPath}`);
      missing++;
    }
  }
  console.log(`\nChecked ${checked} staff images. Missing: ${missing}`);
  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
}); 