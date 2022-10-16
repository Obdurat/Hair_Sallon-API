/*
  Warnings:

  - You are about to drop the column `price` on the `Services` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Schedules" ADD COLUMN "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "price";
