// This script sets up the database with Prisma
const { execSync } = require('child_process');

console.log('Setting up the database...');

try {
  // Generate Prisma client
  console.log('Generating Prisma client...');
  execSync('npx prisma generate', { stdio: 'inherit' });

  // Run migrations
  console.log('Running migrations...');
  execSync('npx prisma migrate dev --name init', { stdio: 'inherit' });

  // Seed the database if needed
  console.log('Seeding the database...');
  execSync('npx prisma db seed', { stdio: 'inherit' });

  console.log('Database setup completed successfully!');
} catch (error) {
  console.error('Error setting up the database:', error);
  process.exit(1);
} 