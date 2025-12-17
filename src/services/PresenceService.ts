import { StudentRepository } from "../repositories/StudentRepository.js"
import { ClassroomRepository } from "../repositories/ClassroomRepository.js"
import { ErrorCode } from "../utils/ErrorCodes.js"
import { PresenceRepository } from "../repositories/PresenceRepository.js"
import { ConfigBeltRepository } from "../repositories/ConfigBeltRepository.js"

type PresenceInput = {
    student_id: string,
    classroom_id: string,
    presence: boolean
}

export class PresenceService {
    static create = async(data: PresenceInput)=>{
        if(!data.student_id || !data.classroom_id || data.presence === undefined){
            const error:any = new Error("Selecione todos os dados.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }
        const student = await StudentRepository.findById(data.student_id)
        if(!student){
            const error:any = new Error("Aluno não encontrada.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const classroom = await ClassroomRepository.findById(data.classroom_id)
        if(!classroom || !classroom.class_id){
            const error:any = new Error("Classe não encontrada.")
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
            const alreadyPresence = await PresenceRepository.findPresence(data.student_id, data.classroom_id)
            if(alreadyPresence){
                const error:any = new Error("Presença já registrada.")
                error.code = ErrorCode.CONFLICT
                throw error
            }

            const belt = await ConfigBeltRepository.findByBelt(student.belt)
            if(belt?.max_frequency !== undefined && student.current_frequency < belt?.max_frequency){
                const current_frequency = student.current_frequency + 1
                student.current_frequency = current_frequency
                const total_frequency = student.total_frequency + 1
                student.total_frequency = total_frequency
            }

            await StudentRepository.update(student.id, {current_frequency: student.current_frequency, total_frequency: student.total_frequency})
            await PresenceRepository.create({student_id: data.student_id, classroom_id: data.classroom_id, presence: data.presence})
            return `Presença registrada: ${data.presence}.`

        }else{
            const alreadyPresence = await PresenceRepository.findPresence(data.student_id, data.classroom_id)
            if(alreadyPresence){
                const error:any = new Error("Presença já registrada.")
                error.code = ErrorCode.CONFLICT
                throw error
            }
            await PresenceRepository.create({student_id: data.student_id, classroom_id: data.classroom_id, presence: data.presence})
            return `Presença registrada: ${data.presence}`
        }
    }

    static update = async(data: PresenceInput)=>{
        if(!data.student_id || !data.classroom_id || data.presence === undefined){
            const error:any = new Error("Selecione todos os dados.")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }
        const student = await StudentRepository.findById(data.student_id)
        if(!student){
            const error:any = new Error("Aluno não encontrada.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const classroom = await ClassroomRepository.findById(data.classroom_id)
        if(!classroom || !classroom.class_id){
            const error:any = new Error("Classe não encontrado.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const existingPresence = await PresenceRepository.findPresence(data.student_id, data.classroom_id)

        if(!existingPresence){
            if(data.presence === true){
                await StudentRepository.update(student.id, {current_frequency: student.current_frequency + 1})
                await PresenceRepository.create({student_id: data.student_id, classroom_id: data.classroom_id, presence: data.presence})
                return "Presença atualizada."
            }
        }

        if(existingPresence?.presence === false && data.presence === true){

            const belt = await ConfigBeltRepository.findByBelt(student.belt)

            if(belt?.max_frequency !== undefined && student.current_frequency < belt?.max_frequency){
                const current_frequency = student.current_frequency + 1
                student.current_frequency = current_frequency
                const total_frequency = student.total_frequency + 1
                student.total_frequency = total_frequency
            }
            await StudentRepository.update(student.id, {current_frequency: student.current_frequency, total_frequency: student.total_frequency})
        }

        if(existingPresence?.presence === true && data.presence === false){

            if(student.current_frequency > 0){
                const current_frequency = student.current_frequency - 1
                student.current_frequency = current_frequency
            }

            if(student.total_frequency > 0){
                const total_frequency = student.total_frequency - 1
                student.total_frequency = total_frequency
            }
                
            await StudentRepository.update(student.id, {current_frequency: student.current_frequency, total_frequency: student.total_frequency})
        }

        await PresenceRepository.update(existingPresence?.id!, {presence: data.presence})

        return "Presença atualizada."
    }

    static getPresences = async(classroom_id: string)=>{
        const classroom = await ClassroomRepository.findById(classroom_id)
        if(!classroom){
            const error:any = new Error("Aula não encontrada.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        if(classroom.classroom_date > new Date()){
            return []
        }

        const presences = await PresenceRepository.findByClassroom(classroom_id)
        return presences
    }
}