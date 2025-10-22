import {z} from "zod"
import { allowedDomain } from "./RegisterSchema.js"
import { Role } from "@prisma/client"

export const loginSchema = z.object({
    email: z.string().email("Email inválido!").refine((val) => {
        const domain = val.split("@")[1]
        return allowedDomain.includes(domain)
    
    }, {
        message: "Email inválido!"
    }),
    password: z.string(),
    role: z.enum(["ADMIN", "TEACHER"])

})

export type LoginInput = z.infer<typeof loginSchema>