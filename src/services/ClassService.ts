import { ClassRepository } from "../repositories/ClassRepository.js";
import { UserRepository } from "../repositories/UserRepository.js";
import { ErrorCode } from "../utils/ErrorCodes.js";

type ClassInput = {
    name: string,
    image_class_url?: string,
    teacher_id: string,
    local?: string
}


export class ClassService{

    //Criar uma turma
    static createClass = async (data: ClassInput) => {

        //Se faltar dados
        if(!data.name || !data.teacher_id){
            const error:any = new Error("Informe todos os dados obrigatórios!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        //Verifica se o professor selecionado está cadastrado!
        const existingTeacher = await UserRepository.findById(data.teacher_id)
        if(!existingTeacher){
            const error:any = new Error("Instrutor não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const teacher = existingTeacher.username

        //Criando uma classe
        const class_ = await ClassRepository.create({name: data.name, image_class_url: data.image_class_url || undefined, teacher_id: data.teacher_id, local: data.local || undefined})
        return {id: class_.id, name: class_.name, teacher, image_class_url: class_.image_class_url, local: class_.local}
        
    }

    //Deletar uma turma
    static deleteClass = async(id: string)=>{
        const classDelete = await ClassRepository.findById(id)
        if(!classDelete){
            const error:any = new Error("Turma não encontrada!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }
        await ClassRepository.delete(id)
        return "Turma deletada!"
    }
}

