/*
  Warnings:

  - You are about to drop the column `withinTheDiet` on the `meal` table. All the data in the column will be lost.
  - Added the required column `isInDiet` to the `meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meal" DROP COLUMN "withinTheDiet",
ADD COLUMN     "isInDiet" BOOLEAN NOT NULL;
