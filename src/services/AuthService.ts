import { UserRepository } from "../repositories/UserRepository.js"
import { loginSchema, LoginInput } from "../schemas/LoginSchema.js";
import { ResetPassInput, resetPassSchema } from "../schemas/ResetPassSchema.js";
import { ErrorCode } from "../utils/ErrorCodes.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import { ResetPasswordTokenRepository } from "../repositories/ResetPasswordTokenRepository.js";
import { sendMail } from "../utils/mailer.js";
import { id } from "zod/locales";

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
            const error:any = new Error("Usuário não cadastrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        //Caso o usuário tente logar no campo errado
        if(user.role != parsedData.role){
            const error:any = new Error(`Usuário não está cadastrado como ${parsedData.role}!`)
            error.code = ErrorCode.FORBIDDEN
            throw error
        }

        //Caso a senha do usuário esteja errada
        const isMatch = await bcrypt.compare(parsedData.password, user.password)
        if(!isMatch){
            const error:any = new Error("Email ou Senha incorretos!")
            error.code = ErrorCode.UNAUTHORIZED
            throw error
        }

        const token = jwt.sign({userId: user.id, username: user.username}, JWT_SECRET!, {expiresIn: "1h"})
        return {token, user:{id: user.id, name: user.username, email: user.email, role: user.role}}
    } 

    //Função que vai enviar email ao usuário para redefinir senha
    static requestPasswordReset = async(email: string)=>{
        const user = await UserRepository.findByEmail(email)

        if(!user){
            const error:any = new Error("Usuário não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const resetToken = crypto.randomUUID()
        const expiresAt = new Date(Date.now() + 1000 * 60 * 15)

        await ResetPasswordTokenRepository.create({token: resetToken, userId: user.id, expiresAt})
        const resetLink = `http://localhost:3000/auth/reset-password/${resetToken}`

        await sendMail(
            user.email,
            "Redefinição de senha",
            `
            <h2> Olá, ${user.username} </h2>
            <p> Você solicitou redefinição de senha. Clique no link abaixo para redefinir: </p>
            <a href="${resetLink}"> Redefinir minha senha </a>
            <p> Esse link expira em 15 minutos. </p>
            `
        )
    }

    //Essa é a função que vai redefinir a senha
    static resetPassword = async(data: ResetPassInput)=>{

        const parsedData = resetPassSchema.parse(data)

        const resetToken = await ResetPasswordTokenRepository.findByToken(parsedData.token)
        if(!resetToken || resetToken.expiresAt < new Date()){
            const error:any = new Error("Token Inválido ou Expirado!")
            error.code = ErrorCode.UNAUTHORIZED
            throw error
        }

        //Acredito que desnecessário
        const user = await UserRepository.findById(resetToken.userId)
        if(!user){
            const error:any = new Error("Usuário não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const hashedPassword = await bcrypt.hash(parsedData.newPassword, 10)
        await UserRepository.update(user.id, {password: hashedPassword})
        await ResetPasswordTokenRepository.delete(resetToken.id)

        return {message: "Senha redefinida com sucesso!"}
    }
}
