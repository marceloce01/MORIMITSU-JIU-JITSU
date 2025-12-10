import {prisma} from "./prismaClient.js"

export class ClassroomRepository{
    //Criar uma aula na tabela Class
    static create = async( data: {teacher_id: string, class_id: string, classroom_data: string}) => {
       return prisma.classroom.create({data:{teacher_id: data.teacher_id, class_id: data.class_id, classroom_date: data.classroom_data }})
    }
}