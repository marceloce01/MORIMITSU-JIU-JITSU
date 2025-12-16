import { StudentRepository } from "../repositories/StudentRepository.js";
import { ConfigBeltRepository } from "../repositories/ConfigBeltRepository.js";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { Belt } from "@prisma/client";


export class GraduationService {

    static graduateStudent = async(id: string) => {
       
        const student = await StudentRepository.findById(id)
        if(!student){
            const error:any = new Error('Aluno não encontrado ou não selecionado.')
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        let age
        const today = new Date()
        age = today.getFullYear() - student.birth_date.getFullYear()
        const month = today.getMonth() - student.birth_date.getMonth()

        if(month < 0 || (month === 0 && today.getDate() < student.birth_date.getDate())){
            age--
        }
        
        const grade = student.grade
        const belt = student.belt
        const config_belt = await ConfigBeltRepository.findByBelt(belt)
        if(!config_belt){
            const error:any = new Error('Configuração de faixa não encontrada.')
            error.code = ErrorCode.NOT_FOUND
            throw error
        }
        const current_frequency = student.current_frequency

        if((grade >= 0 && grade < config_belt.grade) && ((current_frequency === config_belt.max_frequency) || (age < 12 && current_frequency === 15))){
            student.grade = grade + 1
            student.current_frequency = 0

            await StudentRepository.update(student.id, {grade: student.grade, current_frequency: student.current_frequency})
            return `Aluno(a) ${student.name} promovido(a) para o ${student.grade}º grau da faixa ${student.belt}.`

        }else if((grade === config_belt.grade) && ((current_frequency === config_belt.max_frequency) || (age < 12 && current_frequency === 15))){

            const belts = []

            for(const belt of [Belt.WHITE, Belt.GRAY_WHITE, Belt.GRAY, Belt.GRAY_BLACK, Belt.YELLOW_WHITE, Belt.YELLOW, Belt.YELLOW_BLACK, Belt.ORANGE_WHITE, Belt.ORANGE, Belt.ORANGE_BLACK, Belt.GREEN_WHITE, Belt.GREEN, Belt.GREEN_BLACK, Belt.BLUE, Belt.PURPLE, Belt.BROWN, Belt.BLACK, Belt.RED_BLACK, Belt.RED_WHITE,Belt.RED]){
            
                const belt_config = await ConfigBeltRepository.findByBelt(belt)
                if(!belt_config){
                    const error:any = new Error('Configuração de faixa não encontrada.')
                    error.code = ErrorCode.NOT_FOUND
                    throw error
                }

                belts.push(belt_config)
            }

            const belt_student_index = belts.findIndex(x => x.belt === student.belt)
            if(belt_student_index === -1 ){
                const error:any = new Error('Faixa atual do aluno não encontrada na lista de configurações.')
                error.code = ErrorCode.NOT_FOUND
                throw error
            }

            for (let i = belt_student_index + 1; i < belts.length; i++){
                const next_belt = belts[i]

                if(next_belt && next_belt.min_age && age < next_belt.min_age){
                    const error:any = new Error(`Aluno(a) ${student.name} não está apto(a) para graduar.`)
                    error.code = ErrorCode.METHOD_NOT_ALLOWED
                    throw error
                }

                if(next_belt.max_age != null){
                    if(age >= next_belt.min_age && age <= next_belt.max_age){
                        student.belt = next_belt.belt
                        student.grade = 0
                        student.current_frequency = 0

                        await StudentRepository.update(student.id, {belt: student.belt, grade: student.grade, current_frequency: student.current_frequency})
                        
                        return `Aluno(a) ${student.name} promovido(a) para a faixa ${student.belt}.`
                    }

                }else if(age >= next_belt.min_age && next_belt.max_age == null){
                        student.belt = next_belt.belt
                        student.grade = 0
                        student.current_frequency = 0

                        await StudentRepository.update(student.id, {belt: student.belt, grade: student.grade, current_frequency: student.current_frequency})

                        return `Aluno(a) ${student.name} promovido(a) para a faixa ${student.belt}.`
                }
            }

        }else{
            const error:any = new Error(`Aluno(a) ${student.name} não está apto(a) para graduar.`)
            error.code = ErrorCode.METHOD_NOT_ALLOWED
            throw error
        }
    }

    static fitGraduate = async()=>{
        const students = await StudentRepository.findAll()

        const fits = []

        for(let i=0; i < students.length; i++){
            const student = students[i]
            const belt = await ConfigBeltRepository.findByBelt(student.belt)
            const max_frequency = belt?.max_frequency
            const grade =  belt?.grade

            if(grade != null && ((student.grade < grade && student.current_frequency === max_frequency) || (student.grade === grade && student.current_frequency === max_frequency))){
                fits.push(student)
            }
        }

        return fits
    }
}