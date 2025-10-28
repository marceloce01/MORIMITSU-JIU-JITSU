import z from "zod";
export const allowedDomain = ["gmail.com", "ifce.edu.br", "hotmail.com", "yahoo.com", "outlook.com"];
export const emailSchema = z.object({
    email: z.string().email().refine((val) => {
        const domain = val.split("@")[1];
        return allowedDomain.includes(domain);
    }, {
        message: "Erro ao validar dados!"
    }),
});
