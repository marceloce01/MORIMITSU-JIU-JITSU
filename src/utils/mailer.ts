import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config({override: true})

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
        
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,

    },
})

//Função enviar email ao usuário que solicita criação de conta
export async function sendMail(to: string, subject: string, html: string){
    try{
        await transporter.sendMail({
            from: `"Suporte" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        })
        console.log("Email enviado com sucesso!")

    }catch(error){
        console.error("Erro ao validar e-mail", error)
        throw error
    }
}