//Serviços de Usuário: local onde basicamente se trata de regras de negócios dos usuários, ou melhor, verificações de cadastro do usuário, como falta de campos obrigatórios, verificar a existência de um usuário, etc

import bcrypt from "bcryptjs";
import { allowedDomain } from "../schemas/Email.js";
import { UserFilter, UserRepository } from "../repositories/UserRepository.js";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { Role } from "@prisma/client";
import z from "zod";
import { prisma } from "../repositories/prismaClient.js";

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

        const user = await UserRepository.create({username: parsed.username, email: parsed.email, password: hashedPassword, role: parsed.role})
    
        return {id: user.id, username: user.username, email: user.email, role: user.role}
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
}












