import { UserRepository } from "../repositories/UserRepository.js"
import { loginSchema, LoginInput } from "../schemas/LoginSchema.js";
import { ErrorCode } from "../utils/ErrorCodes.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

export class AuthService{

    //Função de login do usuário
    static loginUser = async(data: LoginInput) =>{

        //Caso falte dados obrigatórios
        if(!data.email || !data.password){
            const error:any = new Error("Email e Senha obrigatórios!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const parsedData = loginSchema.parse(data)
       
        //Caso o usuário não esteja cadastrado
        const user = await UserRepository.findByEmail(parsedData.email)
        if(!user){
            const error:any = new Error("Usuário não cadastrado")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        //Caso o usuário tente logar no campo errado
        if(user.role != parsedData.role){
            const error:any = new Error(`Usuário não está cadastrado como ${user.role}`)
            error.code = ErrorCode.FORBIDDEN
            throw error
        }

        //Caso a senha do usuário esteja errada
        const isMatch = await bcrypt.compare(parsedData.password, user.password)
        if(!isMatch){
            const error:any = new Error("Senha incorreta!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const token = jwt.sign({userId: user.id, username: user.username}, JWT_SECRET!, {expiresIn: "1h"})
        return token
    } 

    
}
