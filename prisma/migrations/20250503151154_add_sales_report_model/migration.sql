/*
  Warnings:

  - You are about to drop the `DailySale` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DailySaleItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DailySaleItem" DROP CONSTRAINT "DailySaleItem_saleId_fkey";

-- DropTable
DROP TABLE "DailySale";

-- DropTable
DROP TABLE "DailySaleItem";

-- CreateTable
CREATE TABLE "SalesReport" (
    "id" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "managerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesReport_pkey" PRIMARY KEY ("id")
);
