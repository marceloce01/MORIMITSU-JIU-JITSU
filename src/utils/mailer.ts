import sgMail from "@sendgrid/mail"
import { env } from "../env/index.js"

sgMail.setApiKey(env.API_KEY)

/** 
 * @param to 
 * @param subject 
 * @param html 
 */

//Função enviar email ao usuário que solicita criação de conta
export async function sendMail(to: string, subject: string, html: string){
    try{
        const response = {
            from:`Suporte: ${env.EMAIL_USER}`,
            to,
            subject,
            html
        }

        console.log("Email enviado com sucesso!", response)
        return response

    }catch(error){
        console.error("Erro ao validar e-mail", error)
        throw error
    }
}