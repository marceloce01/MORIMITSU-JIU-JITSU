import {prisma} from "./prismaClient.ts"

export class ResetPasswordCodeRepository{

    static create = async( data: {code: string, userId: string, expiresAt: Date}) => {
       const expirationTime = new Date()
       return prisma.resetPasswordCode.create({data: {code: data.code, userId: data.userId, expiresAt: data.expiresAt}})
    } 

    static findByCode = async(code: string) =>{
       return prisma.resetPasswordCode.findUnique({where: {code}})
    }

    static delete = async(userId: string) =>{
        return prisma.resetPasswordCode.deleteMany({where : {userId}})
    }
}
