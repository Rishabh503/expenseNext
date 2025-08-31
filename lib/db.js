
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from "@/app/generated/prisma";
const globalForPrisma = globalThis;

const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}

export default db;
