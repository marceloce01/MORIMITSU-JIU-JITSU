import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function sendMail(to: string, subject: string, html: string){
    try{

       await resend.emails.send({
            from:"Suporte <onboarding@resend.dev>",
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