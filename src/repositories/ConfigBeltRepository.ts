import {prisma} from "./prismaClient.js"
import { Belt } from "@prisma/client"

export class ConfigBeltRepository {

    //Criar uma configuração de faixa na tabela Config
    static create = async( data: {min_age: number, max_age: number, belt: Belt, max_frequency: number }) => {
       return prisma.configBelt.create({data:{min_age: data.min_age, max_age: data.max_age, belt: data.belt, max_frequency: data.max_frequency}})
    }

    //Atualizar dados da configuração de faixa
    static update = async(id: string, data: {min_age?: number, max_age?: number, min_belt?: Belt, max_belt?: Belt, max_frequency?:         number }) => {
       return prisma.configBelt.update({where: {id}, data})
    }

    //Vai buscar a faixa de configuração
    static findByBelt = async(belt: Belt)=>{
        return prisma.configBelt.findUnique({where: {belt}})
    }

    //Mostra todas as configurações
    static findAll = async()=>{
        return prisma.configBelt.findMany()
    }

    //Deletar uma configuração dee faixa
    static delete = async(id: string)=>{
        return prisma.configBelt.delete({where: {id}})
    }
}