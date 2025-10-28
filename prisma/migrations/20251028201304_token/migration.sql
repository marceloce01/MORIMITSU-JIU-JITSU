/*
  Warnings:

  - You are about to drop the `ResetPasswordToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ResetPasswordToken" DROP CONSTRAINT "ResetPasswordToken_userId_fkey";

-- DropTable
DROP TABLE "public"."ResetPasswordToken";

-- CreateTable
CREATE TABLE "ResetPasswordCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ResetPasswordCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ResetPasswordCode_code_key" ON "ResetPasswordCode"("code");

-- AddForeignKey
ALTER TABLE "ResetPasswordCode" ADD CONSTRAINT "ResetPasswordCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
