/*
  Warnings:

  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_formId_fkey";

-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "questions" JSONB NOT NULL DEFAULT '{}';

-- DropTable
DROP TABLE "Question";
