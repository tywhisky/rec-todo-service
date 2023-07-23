/*
  Warnings:

  - A unique constraint covering the columns `[previousId]` on the table `tasks` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "previousId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "tasks_previousId_key" ON "tasks"("previousId");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_previousId_fkey" FOREIGN KEY ("previousId") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
