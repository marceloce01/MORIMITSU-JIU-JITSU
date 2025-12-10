import { StudentRepository } from "../repositories/StudentRepository.js"
import { ClassroomRepository } from "../repositories/ClassroomRepository.js"
import { ErrorCode } from "../utils/ErrorCodes.js"
import { PresenceRepository } from "../repositories/PresenceRepository.js"

type PresenceInput = {
    student_id: string,
    classroom_id: string,
    presence: boolean
}

export class PresenceService {
    static create = async(data: PresenceInput)=>{
        if(!data.student_id || !data.classroom_id || data.presence === undefined){
            return "123"
        }
        const student = await StudentRepository.findById(data.student_id)
        if(!student){
            const error:any = new Error("Classe não encontrada.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const classroom = await ClassroomRepository.findById(data.classroom_id)
        if(!classroom){
            const error:any = new Error("Instrutor não encontrado.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const student_in_class = await PresenceRepository.studentInClass(data.student_id, classroom.class_id)
        if(!student_in_class){
            const error:any = new Error("Aluno não está cadastrado na turma.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        if(data.presence === true){
            const current_frequency = student.current_frequency + 1
            student.current_frequency = current_frequency

            await StudentRepository.update(student.id, {current_frequency: student.current_frequency})
            return "Presença registrada: +1"

        }else{
            return "Presença registrada: 0"
        }
    }
}