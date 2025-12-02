import { ZodError } from "zod"

export function zodMessage(error: ZodError): string {
    return error.issues[0].message 
}