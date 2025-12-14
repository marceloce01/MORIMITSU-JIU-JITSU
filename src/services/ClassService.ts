import { ClassFilter, ClassRepository } from "../repositories/ClassRepository.js";
import { prisma } from "../repositories/prismaClient.js";
import { UserRepository } from "../repositories/UserRepository.js";
import { StudentRepository } from "../repositories/StudentRepository.js";
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
        const teacher = await UserRepository.findById(data.teacher_id)
        if(!teacher){
            const error:any = new Error("Instrutor não encontrado!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        //Criando uma classe
        const class_ = await ClassRepository.create({name: data.name, image_class_url: data.image_class_url || undefined, teacher_id: data.teacher_id, local: data.local || undefined})
        return {id: class_.id, name: class_.name, teacher: teacher.username, image_class_url: class_.image_class_url, local: class_.local}
        
    }

    static updateClass = async(id: string, data: {name?: string, image_class_url?: string, teacher_id?: string, local?: string}) =>{
       const existingClass_ = await ClassRepository.findById(id)
       if(!existingClass_){
            const error:any = new Error("Turma não encontrada.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }
       if(data.teacher_id !== undefined){
         const teacher = await UserRepository.findById(data.teacher_id)
         if(!teacher){
            const error:any = new Error("Instrutor não encontrado.")
            error.code = ErrorCode.NOT_FOUND
            throw error
         }
       }

       const class_ = await ClassRepository.update(id, data)
       return class_
    }

    //Enturmar aluno
    static addStudentInClass = async(class_id: string, student_id: string) =>{

        const class_ = await ClassRepository.findById(class_id)
        if(!class_){
            const error:any = new Error("Turma não encontrada.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const student = await StudentRepository.findById(student_id)
        if(!student){
            const error:any = new Error("Aluno não encontrado.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }

        const student_class = await prisma.studentClass.findFirst({where: {student_id, class_id}})
        if(student_class){
            const error:any = new Error("Aluno já está nessa turma.")
            error.code = ErrorCode.CONFLICT
            throw error
        }

        await prisma.studentClass.create({data: {student_id, class_id}})
        return `Aluno(a) ${student.name} agora está na turma ${class_.name}`
    }

    static filterClasses = async(filters: ClassFilter) => {
        const classes = await ClassRepository.filterClass(filters)
        if(!classes || classes.length === 0){
            const error:any = new Error("Nenhuma turma encontrada.")
            error.code = ErrorCode.NOT_FOUND
            throw error

        }else{
            return classes
        }
    }

    static findAll = async()=> {
       const classes = await ClassRepository.findAll()
        if(!classes || classes.length === 0){
            const error:any = new Error("Nenhuma turma encontrada.")
            error.code = ErrorCode.NOT_FOUND
            throw error

        }else{
            return classes
        }
    }

    //Deletar uma turma
    static deleteClass = async(id: string)=>{
        const classDelete = await ClassRepository.findById(id)
        if(!classDelete){
            const error:any = new Error("Turma não encontrada!")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }
        await prisma.studentClass.deleteMany({where: {class_id: id}})
        await prisma.classroom.deleteMany({where: {class_id: id}})
        await ClassRepository.delete(id)
        return "Turma deletada!"
    }
}

