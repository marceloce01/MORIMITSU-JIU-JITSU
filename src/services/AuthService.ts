import { UserRepository } from "../repositories/UserRepository.js"
import z from "zod";
import { randomInt } from "crypto";
import { allowedDomain } from "../schemas/Email.js";
import { ErrorCode } from "../utils/ErrorCodes.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import { ResetPasswordCodeRepository } from "../repositories/ResetPassCodeRepository.js";
import { sendMail } from "../utils/mailer.js";
import { Role } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET

export class AuthService{

    //Função de login do usuário
    static loginUser = async(email: string, password: string, role: Role) =>{

        //Caso falte dados obrigatórios
        if(!email || !password){
            const error:any = new Error("Email e Senha obrigatórios!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const loginSchema = z.object({
            email: z.string().email().refine((val) => {
                const domain = val.split("@")[1]
                return allowedDomain.includes(domain)
            
            }),
            password: z.string(),
            role: z.enum(["ADMIN", "TEACHER"])
                    
        })

        loginSchema.parse({email, password, role})

        //Caso o usuário não esteja cadastrado
        const user = await UserRepository.findByEmail(email)
        if(!user){
            const error:any = new Error("Email ou Senha incorretos!")
            error.code = ErrorCode.UNAUTHORIZED
            throw error
        }

        //Caso a senha do usuário esteja errada
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            const error:any = new Error("Email ou Senha incorretos!")
            error.code = ErrorCode.UNAUTHORIZED
            throw error
        }

        //Caso o usuário tente logar no campo errado
        if(user.role != role){
            const error:any = new Error(`Usuário não está cadastrado como ${role}!`)
            error.code = ErrorCode.FORBIDDEN
            throw error
        }

        const token = jwt.sign({userId: user.id, username: user.username, role: user.role}, JWT_SECRET!, {expiresIn: "1h"})
        return {token, user:{id: user.id, username: user.username, email: user.email, role: user.role}}
    } 

    //Função que vai enviar email ao usuário para redefinir senha
    static requestPasswordReset = async(email: string)=>{

        //Se o usuário não digitar o email
        if(!email){
            const error:any = new Error("Email obrigatório!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const emailSchema = z.object({
                email: z.string().email()
        })

        emailSchema.parse({email})

        const user = await UserRepository.findByEmail(email)

        if(!user){
            const error:any = new Error("E-mail incorreto!")
            error.code = ErrorCode.UNAUTHORIZED
            throw error
        }

        const resetCode = randomInt(100000, 999999).toString()
        const expiresAt = new Date(Date.now() + 1000 * 60 * 15)

        await ResetPasswordCodeRepository.create({code: resetCode, userId: user.id, expiresAt})

        await sendMail(
            user.email,
            "Redefinição de senha",
            `
            <h2> Olá, ${user.username} </h2>
            <p> Você solicitou redefinição de senha. Código de Redefinição
            : </p>
            <h1> ${resetCode} </h1>
            <p> Esse código expira em 15 minutos. </p>
            `
        )
    }

    //Função que verifica o código
    static verifyCode = async(code: string)=>{
        if(!code){
            const error:any = new Error("Código obrigatório!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const codeSchema = z.object({
                code: z.string().min(6)
        })

        codeSchema.parse({code})

        const resetCode = await ResetPasswordCodeRepository.findByCode(code)
        if(!resetCode || resetCode.expiresAt <= new Date()){
            const error:any = new Error("Código Inválido ou Expirado!")
            error.code = ErrorCode.UNAUTHORIZED
            throw error
        }

        const user = await UserRepository.findById(resetCode.userId)
        if(!user){
            const error:any = new Error("Usuário não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const token = jwt.sign({userId: user.id, username: user.username, role: user.role}, JWT_SECRET!, {expiresIn: "15m"})
        return {token, user:{id: user.id, name: user.username, email: user.email, role: user.role}}

    }

    //Essa é a função que vai redefinir a senha
    static resetPassword = async(userId: string, newPassword: string)=>{

        //Caso falte algum dado 
        if(!newPassword){
            const error:any = new Error("Nova Senha obrigatória!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const passwordSchema = z.object({
                newPassword: z.string().min(6)
            })

        passwordSchema.parse({newPassword})

        const user = await UserRepository.findById(userId)
        if(!user){
            const error:any = new Error("Usuário não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }
        
        const hashedPassword = await bcrypt.hash(newPassword, 10)
        await UserRepository.update(user.id, {password: hashedPassword})
        await ResetPasswordCodeRepository.delete(userId)

    }

    //Função para enviar e-mail ao ADMIN para cadastro
    static requestRegistration = async(email: string)=>{

        //Se o usuário não digitar o email
        if(!email){
            const error:any = new Error("Email obrigatório!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const emailSchema = z.object({
                email: z.string().email()
        })

        emailSchema.parse({email})

        const user = await UserRepository.findByEmail(email)
        if(user){
            const error:any = new Error("Email já cadastrado!")
            error.code = ErrorCode.CONFLICT
            throw error
        }

        const adminEmail = process.env.ADMIN_EMAIL as string

        await sendMail(
            adminEmail,
            "Solicitação de Cadastro",
            `
            <h2> Olá, Saulo Bezerra </h2>
            <p> Um usuário solicitou uma criação de conta com esse e-mail: </p>
            <p> ${email} </p>
            `
        )  
    }
}