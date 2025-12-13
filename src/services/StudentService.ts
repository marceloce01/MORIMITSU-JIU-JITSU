import { StudentFilter, StudentRepository } from "../repositories/StudentRepository.js";
import z from "zod"
import { allowedDomain } from "../schemas/Email.js";
import { Role, Belt, Gender} from "@prisma/client";
import { phoneValidation } from "../utils/validations/phone.js";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { beltValidation } from "../utils/validations/belt.js";
import { cpfValidation } from "../utils/validations/cpf.js";
import { prisma } from "../repositories/prismaClient.js";
import { ConfigBeltRepository } from "../repositories/ConfigBeltRepository.js";

//Dados de entrada
export type StudentInput = {
        name: string,
        social_name: string,
        image_student_url?: string,
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

        //Para reduzir a quantidade de itens da verificação, só listei eles
        const requiredFields = ["name", "phone", "email", "cpf", "gender", "birth_date", "belt", "grade", "city", "street", "district", "number"]
        
        const missingFields = requiredFields.some(field => !data[field as keyof StudentInput])
        if(missingFields){
            const error:any = new Error("Preencha todos os campos obrigatórios.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }
   
        const studentSchema = z.object({
            name: z.string().min(3, "O nome deve conter ao menos 3 caracteres."),
            social_name: z.string().optional(),
            phone: z.string().refine((val) => phoneValidation(val), "Informe um número de telefone válido."),
            image_student_url: z.string().optional(),
            email: z.string().email("Digite um e-mail válido.").refine((val) => {
                const domain = val.split("@")[1]
                return allowedDomain.includes(domain)
            }, "Domínio de e-mail não autorizado."),
            cpf: z.string().refine((val) => cpfValidation(val), "Informe um CPF válido."),
            gender: z.nativeEnum(Gender, "Selecione um gênero válido."),
            birth_date: z.coerce.date("Digite uma data válida."),
            enrollment: z.coerce.number("A matrícula deve ser um número válido.").optional(),
            current_frequency: z.coerce.number("A frequência do aluno deve ser um número válido.").int("A frequência deve ser um número inteiro.").min(0, "A frequência não pode ser negativa.").default(0),
            belt: z.nativeEnum(Belt, "Selecione uma faixa válida."),
            grade: z.coerce.number("Selecione um grau válido.").int("O grau deve ser um número inteiro de 1 a 4.").min(0, "O grau deve ser um número inteiro positivo."),
            city: z.string().min(3, "A cidade deve conter ao menos 3 caracteres."),
            street: z.string().min(2, "A rua deve conter ao menos 2 caracteres."),
            district: z.string().min(1, "O bairro deve conter ao menos 1 caractere."),
            number: z.string().regex(/^(S\/N|s\/n|\d+[A-Za-z]?(-[A-Za-z0-9]+)?)$/, "Digite um número de residência válido."),
            complement: z.string().optional(),
            guardian_phone: z.string().refine(val => val === null || val === "" || phoneValidation(val), "Telefone do Responsável: Informe um número de telefone válido.").optional(),
        })

        const parsed = studentSchema.parse(data)
        
        //Verifica se os dados únicos do usuário já são cadastrados
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

        if(age < 4){
            const error:any = new Error("A idade mínima do aluno deve ser 4 anos.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const belt = await ConfigBeltRepository.findByBelt(parsed.belt)
        if(belt != undefined && (parsed.grade > belt.grade)){
            const error:any = new Error("Digite um número de grau coerente à faixa.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const validation = await beltValidation(parsed.birth_date, parsed.belt, parsed.current_frequency)
        if(validation != true){
            const error:any = new Error(validation)
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        if(age < 18 && !parsed.guardian_phone){
            const error:any = new Error("O telefone do responsável é obrigatório para menores de 18 anos.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        if(age >= 18 && parsed.guardian_phone){
            const error:any = new Error("O telefone do responsável é obrigatório apenas para menores de 18 anos.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const student = await StudentRepository.create({
                name: parsed.name,
                social_name: parsed.social_name,
                image_student_url: parsed.image_student_url,
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
                guardian_phone: parsed.guardian_phone || undefined,
                total_frequency: parsed.current_frequency
            })

        console.log(`Aluno cadastrado com sucesso: ${student.name}`)

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
        name: z.string().min(3, "O nome deve conter ao menos 3 caracteres.").optional(),
        image_student_url: z.string().optional(),
        phone: z.string().refine((val) => phoneValidation(val), "Informe um número de telefone válido.").optional(),
        email: z.string().email("Digite um e-mail válido.").refine((val) => {
            const domain = val.split("@")[1]
            return allowedDomain.includes(domain)
        }, "Domínio de e-mail não autorizado.").optional(),
        cpf: z.string().refine((val) => cpfValidation(val), "Informe um CPF válido.").optional(),
        role: z.nativeEnum(Role).optional(),
        gender: z.nativeEnum(Gender, "Selecione um gênero válido.").optional(),
        birth_date: z.coerce.date("Digite uma data válida.").optional(),
        enrollment: z.coerce.number("A matrícula deve ser um número válido.").optional(),
        current_frequency: z.coerce.number("A frequência do aluno deve ser um número válido.").int("A frequência deve ser um número inteiro.").min(0, "A frequência não pode ser negativa.").optional(),
        belt: z.nativeEnum(Belt, "Selecione uma faixa válida.").optional(),
        grade: z.coerce.number("Selecione um grau válido.").int("O grau deve ser um número inteiro de 1 a 4.").min(0, "O grau deve ser um número inteiro positivo.").optional(),
        city: z.string().min(3, "A cidade deve conter ao menos 3 caracteres.").optional(),
        street: z.string().min(2, "A rua deve conter ao menos 2 caracteres.").optional(),
        district: z.string().min(2).optional(),
        number: z.string().regex(/^(S\/N|s\/n|\d+[A-Za-z]?(-[A-Za-z0-9]+)?)$/, "Digite um número de residência válido.").optional(),
        complement: z.string().optional(),
        guardian_phone: z.string().refine(val => val === null || val === "" || phoneValidation(val), "Telefone do Responsável: Informe um número de telefone válido.").optional(),
        })

        const parsed = updateSchema.parse(data)

        //Variáveis que serão utilizadas para a verificações
        const birthDate = parsed.birth_date ?? existingStudent.birth_date
        const belt = parsed.belt ?? existingStudent.belt
        const currentFrequency = parsed.current_frequency ?? existingStudent.current_frequency
        const guardianPhone = parsed.guardian_phone ?? existingStudent.guardian_phone
        
        const validation = await beltValidation(birthDate, belt, currentFrequency)
        if(validation != true){
            const error:any = new Error(validation)
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }
        
        let age: number | undefined = undefined
        if(birthDate){
            const today = new Date()
            age = today.getFullYear() - birthDate.getFullYear()
            const month = today.getMonth() - birthDate.getMonth()

            if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
                age--
            }

            if(age < 4){
                const error:any = new Error("A idade mínima do aluno deve ser 4 anos.")
                error.code = ErrorCode.BAD_REQUEST
                throw error
            }

            if(age!=undefined){

                if(age < 18 && (!guardianPhone || guardianPhone === "")){
                    const error:any = new Error("O telefone do responsável é obrigatório para menores de 18 anos.")
                    error.code = ErrorCode.BAD_REQUEST
                    throw error

                }

                if(age >= 18 && guardianPhone){
                    parsed.guardian_phone = undefined
                }
            }

            const student = await StudentRepository.update(id, {...parsed, guardian_phone: parsed.guardian_phone})
            return {student, age}    
        }

            console.log(`As alterações de dados do(a) aluno(a) foram salvas.`)
            const student = await StudentRepository.update(id, parsed)
            return {student, age}
    }

    static filterStudents = async(filters: StudentFilter) =>{
        const students = await StudentRepository.filterStudents(filters)
        if(!students){
            const error:any = new Error("Nenhum aluno encontrado.")
            error.code = ErrorCode.NOT_FOUND
            throw error

        }else{
            return students
        }
    }
            
    static getById = async(id: string)=>{
        const student = await StudentRepository.findById(id)
        if(!student){
            const error:any = new Error("Aluno(a) não encontrado(a).")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }
        console.log(`Aluno(a) buscada.`)
        return student
    }

    static getAllStudents = async()=>{
        return await StudentRepository.findAll()
    }

    static deleteStudent = async(id: string)=>{
        const student = await StudentRepository.findById(id)
        if(!student){
            const error:any = new Error("Aluno(a) não encontrado(a).")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        await prisma.studentClass.deleteMany({where: {student_id: id}})
        await prisma.studentPresence.deleteMany({where: {student_id: id}})
        await StudentRepository.delete(id)
        
        console.log(`Aluno(a) ${student.name} deletado(a).`)
        return `Aluno(a) ${student.name} deletado(a).`
    }

    static getCelebrantsBirth = async()=>{

        const today = new Date()
        const month = new Date().getMonth()+1

        const students = await StudentRepository.findAll()

        if(!students || students.length === 0){
            const error:any = new Error("Nenhum aluno aniversariantes neste mês.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const celebrants = students.filter(student => new Date(student.birth_date).getMonth() + 1 === month).sort(
            (x,y) => new Date(x.birth_date).getDate() - new Date(y.birth_date).getDate()).map(student => {

                const birth_day = new Date(student.birth_date).getDate()

                let age
                age = today.getFullYear() - student.birth_date.getFullYear()
                const _month = today.getMonth() - student.birth_date.getMonth()

                if(_month < 0 || (_month === 0 && today.getDate() < student.birth_date.getDate())){
                    age--
                }

                const thisYearBirth = new Date(today.getFullYear(), student.birth_date.getMonth(), birth_day)

                let quant_days = Math.ceil((thisYearBirth.getTime() - today.getTime())/(1000*60*60*24))

                let message : string
                if(quant_days === 0){
                    message = `Faz ${age} anos hoje!`

                } else if(quant_days === 1){
                    message = `Fará ${age + 1} anos amanhã!`

                } else if(quant_days > 1){
                    message = `Fará ${age + 1} anos em ${quant_days} dias.`
                }else{
                    quant_days = Math.abs(quant_days)
                    message = `Fez ${age} anos há ${quant_days} dias atrás.`
                }

                return {
                    id: student.id,
                    name: student.name,
                    image_student_url: student.image_student_url,
                    birth_date: `${student.birth_date.getDate()}/${student.birth_date.getMonth()+1}/${student.birth_date.getFullYear()}`,
                    description: message
                }
            })

            return {celebrants}
    }
}