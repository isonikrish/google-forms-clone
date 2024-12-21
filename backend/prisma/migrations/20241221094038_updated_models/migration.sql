/*
  Warnings:

  - The `questions` column on the `Form` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `answers` column on the `Response` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "questions",
ADD COLUMN     "questions" JSONB[];

-- AlterTable
ALTER TABLE "Response" DROP COLUMN "answers",
ADD COLUMN     "answers" JSONB[];
