import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sela Stock',
  description: 'A simple stock management application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen flex items-center justify-center bg-gray-50">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
} 