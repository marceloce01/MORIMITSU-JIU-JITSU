//Repositório de Usuários: local onde vou fazer ligações diretas com o banco de dados, como criar, ler, atualizar e deletar o usuário  diretamente, depois utilizá-lo em services e controllers

import { Role } from "@prisma/client";
import {prisma} from "./prismaClient.ts"

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
       const user = prisma.user.findMany()
       
    }
}
