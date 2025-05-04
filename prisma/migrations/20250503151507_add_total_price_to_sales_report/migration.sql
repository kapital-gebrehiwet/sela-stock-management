/*
  Warnings:

  - Added the required column `totalPrice` to the `SalesReport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SalesReport" ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL;
