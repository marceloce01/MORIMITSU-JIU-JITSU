import {z} from "zod"

export const resetPassSchema = z.object({
    token: z.string(),
    newPassword: z.string().min(6, "Senha muito curta!"),
})

export type ResetPassInput = z.infer<typeof resetPassSchema>