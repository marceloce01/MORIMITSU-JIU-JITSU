import nodemailer from "nodemailer"
import { EMAIL_USER, EMAIL_PASS } from "./env.ts"

//Função enviar email ao usuário que solicita criação de conta
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
})

export async function sendMail(to: string, subject: string, html: string){
    try{

       await transporter.sendMail({
            from:` "Suporte"  ${EMAIL_USER}`,
            to,
            subject,
            html
        })

        console.log("Email enviado com sucesso!")

    }catch(error){
        console.error("Erro ao enviar e-mail", error)
        throw error
    }
}
