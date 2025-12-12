import { ClassroomRepository } from "../repositories/ClassroomRepository.js"
import { UserRepository } from "../repositories/UserRepository.js"
import { ClassRepository } from "../repositories/ClassRepository.js"
import { ErrorCode } from "../utils/ErrorCodes.js"

type ClassroomInput = {
    teacher_id: string
    class_id: string
    classroom_date: Date
}

export class ClassroomService {
    //Criar uma turma
    static createClassroom = async (data: ClassroomInput) => {

        if(!data.class_id || !data.classroom_date){
            const error:any = new Error("Informe todos os dados obrigatórios!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        const class_ = await ClassRepository.findById(data.class_id)
        if(!class_){
            const error:any = new Error("Turma não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        if(!data.teacher_id){
             data.teacher_id = class_.teacher_id
        }

        const teacher = await UserRepository.findById(data.teacher_id)
        if(!teacher){
            const error:any = new Error("Instrutor não encontrada!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        //Criando uma classe
        const classroom = await ClassroomRepository.create({teacher_id: data.teacher_id, class_id: data.class_id, classroom_date: data.classroom_date})
        return {id: classroom.id, teacher_id: classroom.teacher_id, class_id: classroom.class_id, classroom_date: classroom.classroom_date}
        
    }
}