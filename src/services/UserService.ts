//Serviços de Usuário: local onde basicamente se trata de regras de negócios dos usuários, ou melhor, verificações de cadastro do usuário, como falta de campos obrigatórios, verificar a existência de um usuário, etc

import bcrypt from "bcryptjs";
import { allowedDomain } from "../schemas/Email.ts";
import { UserRepository } from "../repositories/UserRepository.js";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { Role } from "@prisma/client";
import z from "zod";

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
}












