-- CreateTable
CREATE TABLE "ManagerExpense" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "receipt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "managerId" TEXT NOT NULL,

    CONSTRAINT "ManagerExpense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ManagerExpense_managerId_idx" ON "ManagerExpense"("managerId");

-- AddForeignKey
ALTER TABLE "ManagerExpense" ADD CONSTRAINT "ManagerExpense_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
