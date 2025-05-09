/*
  Warnings:

  - Added the required column `purpose` to the `Credit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Credit" ADD COLUMN     "purpose" TEXT NOT NULL,
ALTER COLUMN "items" DROP NOT NULL;
