
# Sela Stock Management System

A role-based stock management system built with Next.js, NextAuth.js, and PostgreSQL.

## Features

- Google Authentication
- Role-based access control (Owner and Manager)
- PostgreSQL database for data persistence
- Responsive UI with Tailwind CSS

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Google OAuth credentials

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sela-stock
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   
   # PostgreSQL
   DATABASE_URL="postgresql://username:password@localhost:5432/sela_stock?schema=public"
   
   # Owner Email (for role-based access)
   OWNER_EMAIL=owner@example.com
   ```

4. Set up the database:
   ```bash
   npm run setup-db
   ```

5. Run the development server:
```bash
npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Role-Based Access

- **Owner**: Has access to all features including user management and advanced reports.
- **Manager**: Has access to inventory management, orders, and basic reports.

## Database Schema

The application uses Prisma with the following models:
- User: Stores user information and role
- Account: Stores OAuth account information
- Session: Stores user sessions
- VerificationToken: Stores email verification tokens

## License

MIT


