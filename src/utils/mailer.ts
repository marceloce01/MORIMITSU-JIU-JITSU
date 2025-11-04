import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS

        },
    })

//Função enviar email ao usuário que solicita criação de conta
export async function sendMail(to: string, subject: string, html: string){
    try{
        await transporter.sendMail({
            from:`"Suporte:" <${process.env.EMAIL_USER}>`,
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