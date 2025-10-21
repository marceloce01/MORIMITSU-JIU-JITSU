import {z} from "zod"

export const allowedDomain = ["gmail.com", "ifce.edu.br", "hotmail.com", "yahoo.com", "outlook.com"]

export const registerSchema = z.object({
    username: z.string().min(3).max(10).refine((val) => /^[a-zA-Z0-9_]+$/.test(val), {
      message: "O nome de usuário só pode conter letras, números e underline",
    }),
    email: z.string().email("Email inválido!").refine((val) => {
        const domain = val.split("@")[1]
        return allowedDomain.includes(domain)
    
    }, {
        message: "Email inválido!"
    }),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres")
})

export type RegisterInput = z.infer<typeof registerSchema>