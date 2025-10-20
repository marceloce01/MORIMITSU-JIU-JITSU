//Serviços de Usuário: local onde basicamente se trata de regras de negócios dos usuários, ou melhor, verificações de cadastro do usuário, como falta de campos obrigatórios, verificar a existência de um usuário, etc

import bcrypt, { compare } from "bcryptjs";
import { registerSchema, RegisterInput } from "../schemas/RegisterSchema";
import { UserRepository } from "../repositories/UserRepository";
import { ErrorCode } from "../utils/ErrorCodes";
import { Role} from "@prisma/client";

//Classe de serviços de Users
export class UserService{

    //Cadastro de Usuários Instrutores
    static registerUserTeacher = async(data: RegisterInput) =>{

        const parsedData: RegisterInput = registerSchema.parse(data)

        //Caso o usuário já esteja cadastrado
        const existingUser = await UserRepository.findByEmail(parsedData.email)
        if(existingUser){
            const error:any = new Error("Usuário já cadastrado!")
            error.code = ErrorCode.CONFLICT
            throw error
        }

        //Sendo feita essa verificação, usuário instrutor criado:

        const hashedPassword = await bcrypt.hash(parsedData.password, 10)
        
        const user = await UserRepository.create({username: parsedData.username, email: parsedData.email, password: hashedPassword})
    
        return user
    }

    //Cadastro de Usuários Administradores
    static registerUserAdmin = async(data: RegisterInput) =>{

        const parsedData: RegisterInput = registerSchema.parse(data)

        //Caso o usuário já esteja cadastrado
        const existingUser = await UserRepository.findByEmail(parsedData.email)
        if(existingUser){
            const error:any = new Error("Usuário já cadastrado!")
            error.code = ErrorCode.CONFLICT
            throw error
        }

        //Sendo feita essa verificação, usuário administrador criado:

        const hashedPassword = await bcrypt.hash(parsedData.password, 10)

        const user = await UserRepository.create({username: parsedData.username, email: parsedData.email, password: hashedPassword, role: Role.ADMIN})
    
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












