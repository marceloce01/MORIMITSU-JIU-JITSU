import { UserRepository } from "../repositories/UserRepository.js"
import z from "zod";
import { randomInt } from "crypto";
import { allowedDomain } from "../schemas/Email.js";
import { ErrorCode } from "../utils/ErrorCodes.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import { ResetPasswordCodeRepository } from "../repositories/ResetPassCodeRepository.js";
import { Role } from "@prisma/client";
import { sendMail } from "../utils/mailer.js";

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

        //Valida formato de dados do login usando a biblioteca zod
        const loginSchema = z.object({
            email: z.string().email("Digite um e-mail válido.").refine((val) => {
                const domain = val.split("@")[1]
                return allowedDomain.includes(domain)
            
            }, "Domínio de e-mail não autorizado."),
            password: z.string(),
            role: z.enum(["ADMIN", "TEACHER"])
                    
        })

        //Faz essa verificação
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

        //Cria o token de acesso
        const token = jwt.sign({userId: user.id, username: user.username, role: user.role}, JWT_SECRET!, {expiresIn: "7d"})
        return {token, user:{id: user.id, username: user.username, email: user.email, role: user.role}}
    } 

    //Função que vai enviar email ao usuário para redefinir senha
    static requestPasswordReset = async(email: string)=>{

        //Se o usuário não digitar o e-mail
        if(!email){
            const error:any = new Error("Email obrigatório.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        //Valida o formato de e-mail usando a biblioteca zod
        const emailSchema = z.object({
                email: z.string().email("Digite um e-mail válido.").refine((val) => {
                const domain = val.split("@")[1]
                return allowedDomain.includes(domain)
            
            }, "Domínio de e-mail não autorizado."),
        })

        //Faz essa verificação
        emailSchema.parse({email})

        //Através do e-mail digitado ele busca o usuário, se não existir, por segurança, retornamos uma mensagem genérica
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
            "REDEFINIÇÃO DE SENHA",
            `
            <h2> Olá, ${user.username} </h2>
            <p> Você solicitou redefiniçaõ de senha. Código de redefinição:</p>
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
                code: z.string("Digite um código válido.").min(6, "Digite o código completo.")
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

        return {userId: resetCode.userId}

    }

    //Essa é a função que vai redefinir a senha
    static resetPassword = async(userId: string, newPassword: string)=>{

        if(!userId){
            const error:any = new Error("ID do usuário obrigatório.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const user = await UserRepository.findById(userId)
        if(!user){
            const error:any = new Error("Usuário não encontrado.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        //Caso falte algum dado 
        if(!newPassword){
            const error:any = new Error("Digite a nova senha.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const passwordSchema = z.object({
            newPassword: z.string().min(8, "A senha deve conter no minímo 8 caracteres.").regex(/[A-Z]/, "A senha deve conter no mínimo uma letra maiúscula.").regex(/[0-9]/, "A senha deve conter pelo menos um número.").regex(/[^A-Za-z0-9]/, "A senha deve conter no mínimo um caractere especial.")
        })

        passwordSchema.parse({newPassword})

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
    }
}