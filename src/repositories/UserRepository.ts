//Repositório de Usuários: local onde vou fazer ligações diretas com o banco de dados, como criar, ler, atualizar e deletar o usuário  diretamente, depois utilizá-lo em services e controllers

import { PrismaClient, Role } from "@prisma/client";
const prisma = new PrismaClient()

//Classe onde irei ter basicamente o CRUD de Users
export class UserRepository{

    //Cria um usuário na tabela User
    static create = async( data: {username: string, email: string, password: string, role?: Role}) => {
       return prisma.user.create({data: {username: data.username, email: data.email, password: data.password, role: data.role}})
    } 

    //Consulta um usuário pelo ID
    static findById = async(id: string) =>{
       return prisma.user.findUnique({
         where: {id: id},
         select: {
            id: true,
            username: true,
            email: true,
            password: true,
            role: true,
            createdAt: true,
            updatedAt: true
         }
      
      })
    }

    //Consulta um usuário pelo Email
    static findByEmail = async(email: string) =>{
       return prisma.user.findUnique({
         where: {email:email},
         select: {
            id: true,
            username: true,
            email: true,
            password: true,
            role: true,
            createdAt: true,
            updatedAt: true
         }
      })
    }
}
