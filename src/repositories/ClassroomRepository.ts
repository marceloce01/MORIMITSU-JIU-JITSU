import {prisma} from "./prismaClient.js"

export class ClassroomRepository{
    //Criar uma aula na tabela Class
    static create = async( data: {name: string, image_class_url?: string, teacher_id: string, local?: string}) => {
       return prisma.class.create({data:{name: data.name, teacher_id: data.teacher_id, local: data.local}})
    }

    //Atualizar dados de uma aula
    static update = async(id: string, data: {name?: string, teacher_id?: string, local?: string}) => {
          return prisma.class.update({where: {id}, data})
    }

    //Procurar uma aula pelo id
    static findById = async(id: string) => {
       return prisma.class.findUnique({where: {id}})
    }

    //Deletar uma aula
    static delete = async(id: string)=>{
        return prisma.class.delete({where: {id}})
    }
}