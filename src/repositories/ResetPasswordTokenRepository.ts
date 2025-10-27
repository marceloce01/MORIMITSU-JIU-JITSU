import { PrismaClient, Role } from "@prisma/client";
import { id } from "zod/locales";
const prisma = new PrismaClient()

export class ResetPasswordTokenRepository{

    static create = async( data: {token: string, userId: string, expiresAt: Date}) => {
       const expirationTime = new Date()
       return prisma.resetPasswordToken.create({data: {token: data.token, userId: data.userId, expiresAt: data.expiresAt}})
    } 

    static findByToken = async(token: string) =>{
       return prisma.resetPasswordToken.findUnique({where: {token}})
    }

    static delete = async(id: string) =>{
        return prisma.resetPasswordToken.delete({where : {id}})
    }
}
