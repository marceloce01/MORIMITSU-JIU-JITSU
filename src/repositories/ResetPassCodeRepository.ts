import { PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()

export class ResetPasswordCodeRepository{

    static create = async( data: {code: string, userId: string, expiresAt: Date}) => {
       const expirationTime = new Date()
       return prisma.resetPasswordCode.create({data: {code: data.code, userId: data.userId, expiresAt: data.expiresAt}})
    } 

    static findByCode = async(code: string) =>{
       return prisma.resetPasswordCode.findUnique({where: {code}})
    }

    static delete = async(id: string) =>{
        return prisma.resetPasswordCode.delete({where : {id}})
    }
}
