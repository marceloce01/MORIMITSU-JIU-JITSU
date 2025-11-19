import { ZodError } from "zod"

export function zodMessage(error: ZodError): string {
    return error.issues.map((issue) => {
        const path = issue.path?.join(".") || "root"
        const message = issue.message || "Erro desconhecido"
        return `Campo: ${path}\nMensagem: ${message}`
    }).join("\n\n")
    
}