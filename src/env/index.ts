import "dotenv/config" 
import z from "zod"

const envSchema = z.object({
    API_KEY: z.string(),
    EMAIL_USER: z.string().email(),
    EMAIL_PASS: z.string().min(1)
})

const test = envSchema.safeParse(process.env)

if (!test.success) {
  console.error("Erro ao validar variáveis de ambiente:", test.error.format());
  throw new Error("Variáveis de ambiente inválidas ou ausentes");
}

export const env = test.data