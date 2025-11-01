import { StudentRepository } from "../repositories/StudentRepository.js";
import z from "zod"
import { allowedDomain } from "../schemas/Email.js";

export class StudentService{

    static registerStudent = async()=>{

        const studentSchema = z.object({
            name: z.string(),
            email: z.string().email("Email inválido!").refine((val) => {
                const domain = val.split("@")[1]
                return allowedDomain.includes(domain)
            
            }, {
                message: "Email inválido!"
            }),
            cpf: z.string().length(11, "O CPF deve conter 11 dígitos"),
            role: z.enum(["STUDENT", "TEACHER"]),
            gender: z.enum(["MALE", "FEMALE"]),
            birth_date: z.date(),
            enrollment: z.int().optional(),
            current_frequency: z.int(),
            belt: z.enum(["WHITE", "GRAY_WHITE", "GRAY", "GRAY_BLACK", "YELLOW_WHITE", "YELLOW", "YELLOW_BLACK", "ORANGE_WHITE",  "ORANGE", "ORANGE_BLACK", "GREEN_WHITE", "GREEN", "GREEN_BLACK", "BLUE", "PURPLE", "BROWN", "BLACK", "RED"]),
            grade: z.enum(["1", "2", "3", "4"], "Grau inexistente!")
        })
    }
}