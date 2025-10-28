import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class ResetPasswordTokenRepository {
    static create = async (data) => {
        const expirationTime = new Date();
        return prisma.resetPasswordToken.create({ data: { token: data.token, userId: data.userId, expiresAt: data.expiresAt } });
    };
    static findByToken = async (token) => {
        return prisma.resetPasswordToken.findUnique({ where: { token } });
    };
    static delete = async (id) => {
        return prisma.resetPasswordToken.delete({ where: { id } });
    };
}
