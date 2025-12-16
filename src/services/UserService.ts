//Serviços de Usuário: local onde basicamente se trata de regras de negócios dos usuários, ou melhor, verificações de cadastro do usuário, como falta de campos obrigatórios, verificar a existência de um usuário, etc

import bcrypt from "bcryptjs";
import { allowedDomain } from "../schemas/Email.js";
import { UserFilter, UserRepository } from "../repositories/UserRepository.js";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { Role } from "@prisma/client";
import z, { email } from "zod";
import { prisma } from "../repositories/prismaClient.js";
import { StudentRepository } from "../repositories/StudentRepository.js";
import { ClassRepository } from "../repositories/ClassRepository.js";

type UserInput = {
    username: string,
    image_user_url?: string,
    email: string,
    password: string,
    role: Role

}

//Classe de serviços de Users
export class UserService{

    //Cadastro de Usuários Administradores
    static registerUser = async(data: UserInput) =>{

        //Caso falte algum dado
        if(!data.email || !data.password){
            const error:any = new Error("Email e Senha obrigatórios.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const userSchema = z.object({
            username: z.string().min(3, "O apelido deve conter ao menos 3 caracteres."),
            image_user_url: z.string().url("Selecione uma URL válida.").regex(/\.(png|jpg|jpeg|gif|webp|svg)$/i).optional(),
            email: z.string().email("Digite um e-mail válido.").refine((val) => {
                const domain = val.split("@")[1]
                return allowedDomain.includes(domain)
            }, "Domínio de e-mail não autorizado."),
            password: z.string().min(8, "A senha deve conter no minímo 8 caracteres."),
            role: z.nativeEnum(Role, "Informe um cargo válido.").default("TEACHER")
        })

        const parsed = userSchema.parse(data)

        //Caso o usuário já esteja cadastrado
        const existingUser = await UserRepository.findByEmail(parsed.email)
        if(existingUser){
            const error:any = new Error("Usuário já cadastrado!")
            error.code = ErrorCode.CONFLICT
            throw error
        }

        const hashedPassword = await bcrypt.hash(parsed.password, 10)

        const user = await UserRepository.create({username: parsed.username, image_user_url: parsed.image_user_url, email: parsed.email, password: hashedPassword, role: parsed.role})
    
        return {id: user.id, username: user.username, email: user.email, role: user.role}
    }

    static updateUser = async(id: string, data: {username?: string, image_user_url?: string | undefined})=>{
        if(!id){
            const error:any = new Error("ID não fornecido.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const user = await UserRepository.findById(id)
        if(!user){
            const error:any = new Error("Usuário não encontrado.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        await UserRepository.update(id, data)
        return user
    }

    static filterUsers = async(filters: UserFilter) =>{
        const users = await UserRepository.filter(filters)
        if(!users){
            const error:any = new Error("Nenhum aluno encontrado.")
            error.code = ErrorCode.NOT_FOUND
            throw error

        }else{
            return users
        }
    }

    static getUserById = async(userId: string) =>{

        const user = await UserRepository.findById(userId)
        if(!user){
            const error:any = new Error("Usuário não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        //Se houver:
        return user
    }

    static getAllUsers = async()=>{
        const users=  await UserRepository.findAll()
        return users
    }

    static teacherClasses = async(id: string)=>{
        const user = await UserRepository.findById(id)
        if(!user){
            const error:any = new Error("Usuário não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const classes = await prisma.class.findMany({where: {teacher_id: id}, include: {students: {include: {student: true}}, _count: {select: {students: true}}}})

        if(!classes || classes.length === 0){
            const error:any = new Error("Nenhuma turma.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        return classes

    }

    static teacherStudents = async(id: string)=>{
        const user = await UserRepository.findById(id)
        if(!user){
            const error:any = new Error("Usuário não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const classes = await prisma.class.findMany({where: {teacher_id: id}, include: {students: {include: {student: true}}}})

        if(!classes || classes.length === 0){
            const error:any = new Error("Nenhuma turma, ou seja, nenhum aluno.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const students: any[] = []

        for(const class_ of classes){
            for(const student of class_.students)
                students.push(student.student)
        }

        if(!students || students.length === 0){
            const error:any = new Error("Nenhum aluno.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        return students
    }

    static teacherProfile = async(email: string)=>{
        
        if(!email){
            const error:any = new Error("Email obrigatório.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const emailSchema = z.object({
                email: z.string().email("Digite um e-mail válido.").refine((val) => {
                const domain = val.split("@")[1]
                return allowedDomain.includes(domain)
            
            }, "Domínio de e-mail não autorizado."),
        })

        emailSchema.parse({email})

        const user = await UserRepository.findByEmail(email)
        if(!user){
            const error:any = new Error("Usuário não possui cadastro.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        let class_teacher: any = []
        class_teacher = await ClassRepository.findByTeacherID(user.id)
        
        if(user.role !== Role.ADMIN){
            const student = await StudentRepository.findByEmail(email)
            if(!student){
                const error:any = new Error("Usuário não possui cadastro de aluno.")
                error.code = ErrorCode.NOT_FOUND
                throw error
            }

            let class_student = []
            class_student = await ClassRepository.findByStudentID(student.id)

            const today = new Date()
            const birthDate = student.birth_date
            let age = today.getFullYear() - birthDate.getFullYear()
            const month = today.getMonth() - birthDate.getMonth()

            if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
                    age--
            }

            return {
                user: {
                    name: student.name,
                    image_user_url: user.image_user_url,
                    age: age,
                    belt: student.belt,
                    phone: student.phone,
                    enrollment: student.enrollment,
                    role: student.role,
                    birth_date: student.birth_date,
                    email: student.email,
                    social_name: student.social_name,
                    gender: student.gender,
                    current_frequency: student.current_frequency
                },
                class_teacher,
                class_student,
            }

        }else if(user.role === Role.ADMIN){
            return {
                user: {
                    name: user.username,
                    image_user_url: user.image_user_url,
                    email: user.email
                },
                class_teacher
            }
        }
    }
}













