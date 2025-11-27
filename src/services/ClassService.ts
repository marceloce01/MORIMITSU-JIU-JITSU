import { ClassRepository } from "../repositories/ClassRepository.js";
import { UserRepository } from "../repositories/UserRepository.js";
import { ErrorCode } from "../utils/ErrorCodes.js";

export class ClassService{

    //Criar uma turma
    static createClass = async (name: string, teacher_id: string, local: string) => {

        //Se faltar dados
        if(!name || !teacher_id){
            const error:any = new Error("Informe todos os dados obrigatórios!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        //Verifica se o professor selecionado está cadastrado!
        const existingTeacher = await UserRepository.findById(teacher_id)
        if(!existingTeacher){
            const error:any = new Error("Instrutor não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const nameTeacher = existingTeacher.username

        //Criando uma classe
        await ClassRepository.create({name: name, teacher_id: teacher_id, local: local})
        return {class: {name, nameTeacher, local}}
        
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

