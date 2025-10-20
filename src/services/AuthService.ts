import { UserRepository } from "../repositories/UserRepository"
import { ErrorCode } from "../utils/ErrorCodes"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

export class AuthService{

    //Função de login do usuário
    static loginUser = async(email: string, password: string) =>{

        //Caso falte dados obrigatórios
        if(!email || !password){
            const error:any = new Error("Email e Senha obrigatórios!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }
       
        //Caso o usuário não esteja cadastrado
        const user = await UserRepository.findByEmail(email)
        if(!user){
            const error:any = new Error("Usuário não cadastrado")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        //Caso a senha do usuário esteja errada
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            const error:any = new Error("Senha incorreta!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const token = jwt.sign({userId: user.id, username: user.username}, JWT_SECRET!, {expiresIn: "1h"})
        return token
    } 

    
}
