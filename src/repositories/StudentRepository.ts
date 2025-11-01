import { Role, Gender, PrismaClient, Belt} from "@prisma/client";
const prisma = new PrismaClient()

export class StudentRepository{

    static create = async(
        data: {
            name: string,
            email: string,
            cpf: string,
            role: Role,
            gender: Gender
            birth_date: Date
            enrollment?: number
            current_frequenyc: number
            belt: Belt
            grade: number
            city: string
            street: string
            district: string
            number: number
            complement: string
            guardian_phone: string
        }


    )=>{
        return prisma.student.create
    }
}