import {z} from "zod"
import { allowedDomain } from "./Email.js"


export const registerSchema = z.object({
    username: z.string().min(3, "O nome de usuário precisa conter no mínimo 3 caracteres").max(20).refine((val) => /^[a-zA-Z0-9_ ]+$/.test(val), {
      message: "O nome de usuário só pode conter letras, números e underline",
    }),
    email: z.string().email().refine((val) => {
        const domain = val.split("@")[1]
        return allowedDomain.includes(domain)
    
    }, {
        message: "Email inválido!"
    }),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    role: z.preprocess((val) => val === "" || val === null ? undefined: val, z.enum(["ADMIN", "TEACHER"]).optional())
})

export type RegisterInput = z.infer<typeof registerSchema>