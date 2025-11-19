import { Gender, Belt} from "@prisma/client";
import {prisma} from "./prisma.js"

export class StudentRepository{

    static create = async(
        data: {

            name: string,
            phone: string,
            email: string,
            cpf: string,
            gender: Gender,
            birth_date: Date,
            enrollment?: number,
            current_frequency: number,
            belt: Belt,
            grade: number,
            city: string,
            street: string,
            district: string,
            number: number,
            complement?: string,
            guardian_phone?: string,
            total_frequency: number
        }


    )=>{
        
        return prisma.student.create({data: {
            
            name: data.name, 
            phone: data.phone,
            email: data.email,
            cpf: data.cpf,
            gender: data.gender,
            birth_date: data.birth_date,
            enrollment: data.enrollment,
            current_frequency: data.current_frequency,
            belt: data.belt,
            grade: data.grade,
            city: data.city,
            street: data.street,
            district: data.district,
            number: data.number,
            complement: data.complement,
            guardian_phone: data.guardian_phone,
            total_frequency: data.current_frequency

        }})
    }

    static findById = async(id: string)=>{
       return prisma.student.findUnique({where: {id}})
    }

    static findByEmail = async(email: string)=>{
       return prisma.student.findUnique({where: {email}})
    }

    static findByCPF = async(cpf: string)=>{
       return prisma.student.findUnique({where: {cpf}})
    }

    static findByEnrollment = async(enrollment?: number | null)=>{
       const where: any = {}
       if(enrollment != undefined){
         where.enrollment = enrollment
       }
       return prisma.student.findMany({where})
    }

    static findAll = async()=>{
        return prisma.student.findMany()
    }

    static update = async(
        id: string,
        data: {
            name?: string,
            phone?: string,
            email?: string,
            cpf?: string,
            gender?: Gender,
            birth_date?: Date,
            enrollment?: number,
            current_frequency?: number,
            belt?: Belt,
            grade?: number,
            city?: string,
            street?: string,
            district?: string,
            number?: number,
            complement?: string,
            guardian_phone?: string,
            total_frequency?: number
        }

    )=>{
        return prisma.student.update({where: {id}, data})
    }
    static delete = async(id: string)=>{
        return prisma.student.delete({where: {id}})
    }
}
