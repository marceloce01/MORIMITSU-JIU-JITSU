//Repositório de Usuários: local onde vou fazer ligações diretas com o banco de dados, como criar, ler, atualizar e deletar o usuário  diretamente, depois utilizá-lo em services e controllers

import { Role } from "@prisma/client";
import {prisma} from "./prismaClient.js"
import { includes } from "zod";

export type UserFilter = {
   id?: string,
   username?: string,
   email?: string,
   role?: string,
   class_id?: string

}
//Classe onde irei ter basicamente o CRUD de Users
export class UserRepository{

    //Cria um usuário na tabela User
    static create = async( data: {username: string, email: string, password: string, role?: Role}) => {
       return prisma.user.create({data: {username: data.username, email: data.email, password: data.password, role: data.role}})
    } 

    //Atualiza dados do usuário
    static update = async(userId: string, data: {username?: string, email?: string, password?: string, role?: Role}) => {
      return prisma.user.update({where: {id: userId}, data})
    }

    static filter = async(filters: UserFilter) =>{
        const where: any = {}
        if(filters.id != undefined) where.id = filters.id
        if(filters.username != undefined) where.username = {contains: filters.username, mode: "insensitive"}
        if(filters.email != undefined) where.email = filters.email
        if(filters.role != undefined) where.role = filters.role
        if(filters.class_id != undefined) {
            where.classes = {some: {id: filters.class_id}}
        }

        return prisma.user.findMany({where, include: {classes: true}})
    }

    //Consulta um usuário pelo ID
    static findById = async(id: string) =>{
       return prisma.user.findUnique({where: {id}})
    }

    //Consulta um usuário pelo Email
    static findByEmail = async(email: string) =>{
       return prisma.user.findUnique({where: {email}})
    }

    //Puxa todos os usuários cadastrados
    static findAll = async()=>{
       return prisma.user.findMany({include: {classes: true}})
       
    }
}
