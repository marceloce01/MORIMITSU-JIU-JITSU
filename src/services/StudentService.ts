import { StudentRepository } from "../repositories/StudentRepository.js";
import z, { string } from "zod"
import { allowedDomain } from "../schemas/Email.js";
import { Role, Belt, Gender} from "@prisma/client";
import { phoneValidation } from "../utils/validations/phone.js";
import { ErrorCode } from "../utils/ErrorCodes.js";

//Dados de entrada
type StudentInput = {
        name: string,
        phone: string,
        email: string,
        cpf: string,
        gender: Gender,
        birth_date: Date,
        current_frequency: number,
        belt: Belt,
        grade: number,
        city: string,
        street: string,
        district: string,
        number: number,
        complement?: string,
        guardian_phone?: string,
        enrollment?: number,
    }

export class StudentService{

    //Cadastrar Aluno
    static registerStudent = async(data: StudentInput)=>{

        const requiredFields = ["name", "phone", "email", "cpf", "gender", "birth_date", "current_frequency", "belt", "grade", "city", "street", "district", "number"]
        
        const missingFields = requiredFields.some(field => !data[field as keyof StudentInput])
        if(missingFields){
            const error:any = new Error("Preencha todos os campos obrigatórios!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }
   
        const studentSchema = z.object({
            name: z.string(),
            phone: z.string().refine((val) => phoneValidation(val), "Telefone Inválido!"),
            email: z.string().email("Email inválido!").refine((val) => {
                const domain = val.split("@")[1]
                return allowedDomain.includes(domain)
            }),
            cpf: z.string().length(11, "O CPF deve conter 11 dígitos"),
            gender: z.nativeEnum(Gender),
            birth_date: z.coerce.date(),
            enrollment: z.coerce.number().optional(),
            current_frequency: z.coerce.number().int().min(0).default(0),
            belt: z.nativeEnum(Belt),
            grade: z.coerce.number().int().min(1).max(4, "Grau Inexistente"),
            city: z.string().min(3),
            street: z.string().min(2),
            district: z.string().min(2),
            number: z.coerce.number().int().min(1),
            complement: z.string().optional(),
            guardian_phone: z.string().refine(val => val === null || val === "" || phoneValidation(val), "Telefone inválido!").optional(),
        })

        const parsed = studentSchema.parse(data)
        
        const existingEmail = await StudentRepository.findByEmail(parsed.email)
        const existingCPF = await StudentRepository.findByCPF(parsed.cpf)

        if(existingEmail || existingCPF){
            const error:any = new Error("Dados Únicos já cadastrados!")
            error.code = ErrorCode.CONFLICT
            throw error
        }

        if(parsed.enrollment !== undefined && parsed.enrollment !== null){
            const existingEnrollment = await StudentRepository.findByEnrollment(parsed.enrollment)
            if(existingEnrollment.length> 0){
                const error:any = new Error("Dados Únicos já cadastrados!")
                error.code = ErrorCode.CONFLICT
                throw error
            }
        }

        const today = new Date()
        const birthDate = parsed.birth_date
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
                age--
        }

        if(age < 18 && !parsed.guardian_phone){
            const error:any = new Error("O campo guardian_phone é obrigatório!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        if(age >= 18 && parsed.guardian_phone){
            const error:any = new Error("O campo guardian_phone é obrigatório apenas para menores de 18 anos!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const student = await StudentRepository.create({
                name: parsed.name, 
                phone: parsed.phone,
                email: parsed.email,
                cpf: parsed.cpf,
                gender: parsed.gender,
                birth_date: parsed.birth_date,
                enrollment: parsed.enrollment,
                current_frequency: parsed.current_frequency,
                belt: parsed.belt,
                grade: parsed.grade,
                city: parsed.city,
                street: parsed.street,
                district: parsed.district,
                number: parsed.number,
                complement: parsed.complement,
                guardian_phone: parsed.guardian_phone,
                total_frequency: parsed.current_frequency
            })

        return {student, age}
        }


        //Atualizar dados do aluno
        static updateStudent = async(id: string, data: Partial<StudentInput>)=>{
            if(!id){
                const error:any = new Error("ID não fornecido!")
                error.code = ErrorCode.NOT_FOUND
                throw error
            }
            
            const existingStudent = await StudentRepository.findById(id)
            if(!existingStudent){
                const error:any = new Error("Aluno não encontrado!")
                error.code = ErrorCode.NOT_FOUND
                throw error
            }

            const updateSchema = z.object({
            name: z.string().optional(),
            phone: z.string().refine((val) => phoneValidation(val), "Telefone Inválido!").optional(),
            email: z.string().email("Email inválido!").refine((val) => {
                const domain = val.split("@")[1]
                return allowedDomain.includes(domain)
            }).optional(),
            cpf: z.string().length(11, "O CPF deve conter 11 dígitos").optional(),
            role: z.nativeEnum(Role).optional(),
            gender: z.nativeEnum(Gender).optional(),
            birth_date: z.coerce.date().optional(),
            enrollment: z.coerce.number().optional(),
            current_frequency: z.coerce.number().int().min(0).default(0).optional(),
            belt: z.nativeEnum(Belt).optional(),
            grade: z.coerce.number().int().min(1).max(4, "Grau Inexistente").optional(),
            city: z.string().min(3).optional(),
            street: z.string().min(2).optional(),
            district: z.string().min(2).optional(),
            number: z.coerce.number().int().min(1).optional(),
            complement: z.string().optional(),
            guardian_phone: z.string().refine(val => val === null || val === "" || phoneValidation(val), "Telefone inválido!").optional(),
            })

            const parsed = updateSchema.parse(data)
            
            const student = await StudentRepository.update(id, parsed)

            let age: number | undefined = undefined
            if(student.birth_date){
                const today = new Date()
                age = today.getFullYear() - student.birth_date.getFullYear()
                const month = today.getMonth() - student.birth_date.getMonth()

                if(month < 0 || (month === 0 && today.getDate() < student.birth_date.getDate())){
                    age--
                }

                if(age < 18 && !parsed.guardian_phone && !existingStudent.guardian_phone){
                    const error:any = new Error("O campo guardian_phone é obrigatório para menores de 18 anos!")
                    error.code = ErrorCode.BAD_REQUEST
                    throw error
                }
            if((student.guardian_phone === undefined || student.guardian_phone === "") && age < 18){
                const error:any = new Error("O campo guardian_phone é obrigatório para menores de 18 anos!")
                error.code = ErrorCode.BAD_REQUEST
                throw error
            }

            if(student.birth_date && age >= 18 && existingStudent.guardian_phone){
                
                const updateStudent = await StudentRepository.update(id, {guardian_phone: ""})
                return {student: updateStudent, age}
            }
        }
            
            return {student, age}

        }

        static getById = async(id: string)=>{
            const student = await StudentRepository.findById(id)
            if(!student){
                const error:any = new Error("Aluno não encontrado!")
                error.code = ErrorCode.NOT_FOUND
                throw error
            }

            return student
        }

        static getAllStudents = async()=>{
            return await StudentRepository.findAll()
        }

        static deleteStudent = async(id: string)=>{
            const student = await StudentRepository.findById(id)
            if(!student){
                const error:any = new Error("Aluno não encontrado!")
                error.code = ErrorCode.NOT_FOUND
                throw error
            }
            await StudentRepository.delete(id)
            return "Aluno deletado!"
        }
}