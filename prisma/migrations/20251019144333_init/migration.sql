-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'TEACHER');

-- CreateEnum
CREATE TYPE "RoleStudent" AS ENUM ('TEACHER', 'STUDENT');

-- CreateEnum
CREATE TYPE "Belt" AS ENUM ('WHITE', 'GRAY_WHITE', 'GRAY', 'GRAY_BLACK', 'YELLOW_WHITE', 'YELLOW', 'YELLOW_BLACK', 'ORANGE_WHITE', 'ORANGE', 'ORANGE_BLACK', 'GREEN_WHITE', 'GREEN', 'GREEN_BLACK', 'BLUE', 'PURPLE', 'BROWN', 'BLACK', 'RED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'TEACHER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "enrollment" INTEGER,
    "currentFrequency" INTEGER NOT NULL,
    "belt" "Belt" NOT NULL,
    "grade" INTEGER NOT NULL,
    "role" "RoleStudent" NOT NULL DEFAULT 'STUDENT',
    "guardianPhone" TEXT NOT NULL,
    "totalFrequency" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentClass" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL,

    CONSTRAINT "StudentClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classroom" (
    "id" SERIAL NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentPresence" (
    "id" SERIAL NOT NULL,
    "classroom_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "presence" BOOLEAN NOT NULL,

    CONSTRAINT "StudentPresence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_cpf_key" ON "Student"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Student_enrollment_key" ON "Student"("enrollment");

-- AddForeignKey
ALTER TABLE "StudentClass" ADD CONSTRAINT "StudentClass_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentClass" ADD CONSTRAINT "StudentClass_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
