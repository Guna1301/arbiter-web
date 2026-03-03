/*
  Warnings:

  - You are about to drop the column `config` on the `Rule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "abuse" JSONB,
ADD COLUMN     "blacklist" JSONB,
ADD COLUMN     "defaultAlgorithm" TEXT,
ADD COLUMN     "whitelist" JSONB;

-- AlterTable
ALTER TABLE "Rule" DROP COLUMN "config",
ADD COLUMN     "abuse" JSONB,
ADD COLUMN     "policy" JSONB;
