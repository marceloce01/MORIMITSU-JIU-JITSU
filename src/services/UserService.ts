//Serviços de Usuário: local onde basicamente se trata de regras de negócios dos usuários, ou melhor, verificações de cadastro do usuário, como falta de campos obrigatórios, verificar a existência de um usuário, etc

import bcrypt, { compare } from "bcryptjs";
import { UserRepository } from "../repositories/UserRepository";
import { ErrorCode } from "../utils/ErrorCodes";
import { Role} from "@prisma/client";

//Classe de serviços de Users
export class UserService{

    //Cadastro de Usuários Instrutores
    static registerUserTeacher = async(username: string, email: string, password: string) =>{

        //Caso falte algum dado
        if(!username || !email || !password){
            const error:any = new Error("Estão faltando dados obrigatórios!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        //Caso o usuário já esteja cadastrado
        const existingUser = await UserRepository.findByEmail(email)
        if(existingUser){
            const error:any = new Error("Usuário já cadastrado!")
            error.code = ErrorCode.CONFLICT
            throw error
        }

        //Sendo feita essa verificação, usuário instrutor criado:

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await UserRepository.create({username, email, password: hashedPassword})
    
        return user
    }

    //Cadastro de Usuários Administradores
    static registerUserAdmin = async(username: string, email: string, password: string) =>{

        //Caso falte algum dado
        if(!username || !email || !password){
            const error:any = new Error("Estão faltando dados obrigatórios!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        //Caso o usuário já esteja cadastrado
        const existingUser = await UserRepository.findByEmail(email)
        if(existingUser){
            const error:any = new Error("Usuário já cadastrado!")
            error.code = ErrorCode.CONFLICT
            throw error
        }

        //Sendo feita essa verificação, usuário administrador criado:

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await UserRepository.create({username, email, password: hashedPassword, role: Role.ADMIN})
    
        return user
    }

    static getUserById = async(userId: number) =>{

        const user = await UserRepository.findById(userId)
        if(!user){
            const error:any = new Error("Usuário não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        //Se houver:
        return user
    }
}












