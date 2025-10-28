import z from "zod"
import { allowedDomain } from "./Email.js"

export const studentSchema = z.object({
    name: z.string(),
    email: z.string().email("Email inválido!").refine((val) => {
        const domain = val.split("@")[1]
        return allowedDomain.includes(domain)
    
    }, {
        message: "Email inválido!"
    }),
    cpf: z.string(),
    role: z.enum(["STUDENT", "TEACHER"])

})

export type studentInput = z.infer<typeof studentSchema>