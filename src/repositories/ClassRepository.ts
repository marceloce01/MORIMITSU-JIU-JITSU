import {prisma} from "./prismaClient.js"

export type ClassFilter = {
    id?: string,
    name?: string,
    teacher_name?: string,
    local?: string

}
export class ClassRepository{
    //Criar uma turma na tabela Class
    static create = async( data: {name: string, image_class_url?: string, teacher_id: string, local?: string}) => {
       return prisma.class.create({data:{name: data.name, teacher_id: data.teacher_id, local: data.local}})
    }

    //Atualizar dados de uma turma
    static update = async(id: string, data: {name?: string, teacher_id?: string, local?: string}) => {
          return prisma.class.update({where: {id}, data})
    }

    //Procurar uma turma pelo id
    static findById = async(id: string) => {
       return prisma.class.findUnique({where: {id}})
    }

    static filterClass = async(filters: ClassFilter) => {
        const where: any = {}
        if(filters.id != undefined) where.id = filters.id
        if(filters.name != undefined) where.name = {contains: filters.name, mode: "insensitive"}
        if(filters.teacher_name != undefined) {
            where.teacher_name = {some: {}}
        }
    }

    //Deletar uma turma
    static delete = async(id: string)=>{
        return prisma.class.delete({where: {id}})
    }
}


    