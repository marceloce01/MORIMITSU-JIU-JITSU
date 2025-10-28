import { z } from "zod";
import { allowedDomain } from "./Email.js";
export const loginSchema = z.object({
    email: z.string().email().refine((val) => {
        const domain = val.split("@")[1];
        return allowedDomain.includes(domain);
    }),
    password: z.string(),
    role: z.enum(["ADMIN", "TEACHER"])
});
