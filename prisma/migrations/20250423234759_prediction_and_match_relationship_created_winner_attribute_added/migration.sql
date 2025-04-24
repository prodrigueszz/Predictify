/*
  Warnings:

  - Added the required column `winner` to the `matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winner` to the `predictions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "winner" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "predictions" ADD COLUMN     "winner" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "predictions" ADD CONSTRAINT "predictions_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
