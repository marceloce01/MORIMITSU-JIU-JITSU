import {prisma} from "./prisma.js"

export class ClassRepository{
    static create = async( data: {code: string, userId: string, expiresAt: Date}) => {
       const expirationTime = new Date()
       return prisma.resetPasswordCode.create({data: {code: data.code, userId: data.userId, expiresAt: data.expiresAt}})
    }
}