/*
  Warnings:

  - The `role` column on the `Student` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `city` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'STUDENT';

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "complement" TEXT,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'STUDENT';

-- DropEnum
DROP TYPE "public"."RoleStudent";
