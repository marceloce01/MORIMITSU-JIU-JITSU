-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ATIVO', 'DESATIVO');

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "image_class_url" TEXT;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "image_student_url" TEXT,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ATIVO';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image_user_url" TEXT;
