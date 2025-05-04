import { PrismaClient } from '../lib/generated/prisma';

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['query', 'error', 'warn'],
  });
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Add error handling middleware
prisma.$use(async (params, next) => {
  try {
    return await next(params);
  } catch (error) {
    console.error('Prisma error:', {
      model: params.model,
      action: params.action,
      args: params.args,
      error: error.message,
      stack: error.stack
    });
    throw error;
  }
});

export default prisma; 