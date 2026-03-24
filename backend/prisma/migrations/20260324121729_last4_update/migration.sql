/*
  Warnings:

  - Made the column `last4` on table `ApiKey` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ApiKey" ALTER COLUMN "last4" SET NOT NULL;
