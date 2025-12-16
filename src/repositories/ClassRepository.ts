import { Prisma } from "@prisma/client"
import {prisma} from "./prismaClient.js"

export type ClassFilter = {
    id?: string,
    name?: string,
    teacher_id?: string,
    teacher_name?: string,
    local?: string

}
export class ClassRepository{
    //Criar uma turma na tabela Class
    static create = async( data: {name: string, image_class_url?: string, teacher_id: string, local?: string}) => {
       return prisma.class.create({data:{name: data.name, image_class_url: data.image_class_url, teacher_id: data.teacher_id, local: data.local}})
    }

    //Atualizar dados de uma turma
    static update = async(id: string, data: {name?: string, image_class_url?: string, teacher_id?: string, local?: string}) => {
          return prisma.class.update({where: {id}, data})
    }

    //Procurar uma turma pelo id
    static findById = async(id: string) => {
       return prisma.class.findUnique({where: {id}})
    }

    static filterClass = async(filters: ClassFilter) => {
        const where: any = {}
        if(filters.id != undefined) where.id = filters.id
        if(filters.name != undefined) where.name = {contains: filters.name, mode: "insensitive"}
        if(filters.teacher_id != undefined) where.teacher_id = filters.teacher_id
        if(filters.teacher_name != undefined) {
            where.teacher = {username: {contains: filters.teacher_name, mode: "insensitive"}}
            return prisma.class.findMany({where, include: {teacher: true}})
        }
        if(filters.local != undefined) where.local = {contains: filters.local, mode: "insensitive"}

        return prisma.class.findMany({where, include: {teacher: true, students: {include: {student: true}}, _count: {select: {students: true}}}})
    }

    static findByTeacherID = async(teacher_id: string)=>{
        return prisma.class.findMany({where: {teacher_id}})
    }

    static findByStudentID = async(student_id: string)=>{
        return prisma.class.findMany({where: {students: {some: {student_id}}}})
    }

    static findAll = async() =>{
        return prisma.class.findMany({include: {teacher: true, students: {include: {student: true}},  _count: {select: {students: true}}}})
    }

    //Deletar uma turma
    static delete = async(id: string)=>{
        return prisma.class.delete({where: {id}})
    }

    static quant = async(where?: Prisma.ClassWhereInput)=>{
        return prisma.class.count({where})
    }

    static quant_students = async(class_id: string)=>{
        return prisma.studentClass.count({where: {class_id}})
    }
}


    