import { Gender, Belt} from "@prisma/client";
import {prisma} from "./prismaClient.js"

export class StudentRepository{

    static create = async(
        data: {

            name: string,
            image_student_url?: string,
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
            number: string,
            complement?: string,
            guardian_phone?: string,
            total_frequency: number
        }


    )=>{
        
        return prisma.student.create({data: {
            
            name: data.name!, 
            image_student_url: data.image_student_url,
            phone: data.phone!,
            email: data.email!,
            cpf: data.cpf!,
            gender: data.gender,
            birth_date: data.birth_date,
            enrollment: data.enrollment ?? null,
            current_frequency: data.current_frequency,
            belt: data.belt,
            grade: data.grade,
            city: data.city!,
            street: data.street!,
            district: data.district!,
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
            image_student_url?: string,
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
            number?: string,
            complement?: string,
            guardian_phone?: string,
            total_frequency?: number
        }

    )=>{
        const dataUpdated: any = {}
        if(data.name != undefined) dataUpdated.name = data.name
        if(data.image_student_url != undefined) dataUpdated.image_student_url = data.image_student_url
        if(data.phone != undefined) dataUpdated.phone = data.phone
        if(data.email != undefined) dataUpdated.email = data.email
        if(data.cpf != undefined) dataUpdated.cpf = data.cpf
        if(data.gender != undefined) dataUpdated.gender = data.gender
        if(data.birth_date != undefined) dataUpdated.birth_date = data.birth_date
        if(data.enrollment!= undefined) dataUpdated.enrollment = data.enrollment
        if(data.current_frequency != undefined) dataUpdated.current_frequency = data.current_frequency
        if(data.belt != undefined) dataUpdated.belt = data.belt
        if(data.grade!= undefined) dataUpdated.grade = data.grade
        if(data.city != undefined) dataUpdated.city = data.city
        if(data.street != undefined) dataUpdated.street = data.street
        if(data.district != undefined) dataUpdated.district = data.district
        if(data.number != undefined) dataUpdated.number = data.number
        if(data.complement != undefined) dataUpdated.complement = data.complement
        if(data.guardian_phone != undefined) dataUpdated.guardian_phone= data.guardian_phone ?? undefined
        if(data.total_frequency != undefined) dataUpdated.total_frequency = data.total_frequency

        return prisma.student.update({where: {id}, data: dataUpdated})
    }
    
    static delete = async(id: string)=>{
        return prisma.student.delete({where: {id}})
    }
}
