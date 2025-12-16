import { Gender, Belt, Role, Prisma} from "@prisma/client";
import {prisma} from "./prismaClient.js"

export type StudentFilter = {
    id?: string,
    name?: string,
    social_name?: string,
    phone?: string,
    email?: string,
    cpf?: string,
    gender?: Gender,
    birth_date?: Date,
    enrollment?: number,
    belt?: Belt,
    grade?: number,
    class_id?: string
}

export class StudentRepository{

    static create = async(
        data: {
            name: string,
            social_name?: string
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
            social_name: data.social_name, 
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
       if(enrollment === null) return null
       return prisma.student.findUnique({where: {enrollment}})
    }

    static filterStudents = async(filters: StudentFilter) =>{
        const where: any = {}
        if(filters.id != undefined) where.id = filters.id
        if(filters.name != undefined) where.name = {contains: filters.name, mode: "insensitive"}
        if(filters.social_name != undefined) where.social_name = {contains: filters.social_name, mode: "insensitive"}
        if(filters.phone != undefined) where.phone = filters.phone
        if(filters.email != undefined) where.email = filters.email
        if(filters.cpf != undefined) where.cpf = filters.cpf
        if(filters.gender != undefined) where.gender = filters.gender
        if(filters.birth_date != undefined) {
            where.birth_date = new Date(filters.birth_date)
        }
        if(filters.enrollment != undefined){
            where.enrollment = Number(filters.enrollment)
        }
        if(filters.belt != undefined) where.belt = filters.belt
        if(filters.grade != undefined){
            where.grade = Number(filters.grade)
        }
        if(filters.class_id != undefined) {
            where.classes = {some: {class_id: filters.class_id}}
        }

        return prisma.student.findMany({where, include: {classes: {include: {class: {include: {teacher: true}}}}}})
    }

    static findAll = async()=>{
        return prisma.student.findMany({include: {classes: {include: {class: {include: {teacher: true}}}}}})
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
            role?: Role,
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
        if(data.role != undefined) dataUpdated.role = data.role
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

    static quant = async(where?: Prisma.StudentWhereInput)=>{
        return prisma.student.count({where})
    }
}
