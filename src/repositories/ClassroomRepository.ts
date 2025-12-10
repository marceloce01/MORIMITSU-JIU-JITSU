import { string } from "zod"
import {prisma} from "./prismaClient.js"

export class ClassroomRepository{
    //Criar uma aula na tabela Class
    static create = async( data: {teacher_id: string, class_id: string, classroom_date: Date}) => {
       return prisma.classroom.create({data:{teacher_id: data.teacher_id, class_id: data.class_id, classroom_date: new Date(data.classroom_date)}})
    }

    static findById = async(id: string) =>{
        return prisma.classroom.findUnique({where: {id}})
    }

    static findAll = async()=>{
       return prisma.class.findMany({include: {students: true}})
    }
}