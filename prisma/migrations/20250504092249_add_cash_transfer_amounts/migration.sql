/*
  Warnings:

  - You are about to drop the column `paymentMethod` on the `SalesReport` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SalesReport" DROP COLUMN "paymentMethod",
ADD COLUMN     "cashAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "transferAmount" DOUBLE PRECISION NOT NULL DEFAULT 0;
