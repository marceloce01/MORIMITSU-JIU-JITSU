import {z} from "zod"
import { allowedDomain } from "./RegisterSchema.js"

export const loginSchema = z.object({
    email: z.string().email().refine((val) => {
        const domain = val.split("@")[1]
        return allowedDomain.includes(domain)
    
    }, {
        message: "Erro ao validar dados!"
    }),
    password: z.string(),
    role: z.enum(["ADMIN", "TEACHER"])

})

export type LoginInput = z.infer<typeof loginSchema>