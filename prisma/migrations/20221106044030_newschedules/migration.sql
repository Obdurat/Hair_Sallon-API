/*
  Warnings:

  - Added the required column `date` to the `Schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedules" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "finished" BOOLEAN NOT NULL DEFAULT false;
