import {z} from "zod"
import { allowedDomain } from "./RegisterSchema"

export const loginSchema = z.object({
    email: z.string().email("Email inválido!").refine((val) => {
        const domain = val.split("@")[1]
        return allowedDomain.includes(domain)
    
    }, {
        message: "Email inválido!"
    }),
    password: z.string()
})

export type LoginInput = z.infer<typeof loginSchema>