//Controle de Usuário:
import { Request, Response } from "express"
import { RegisterInput } from "../schemas/RegisterSchema"
import { UserService } from "../services/UserService"
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes"
import { ZodError } from "zod"

export class UserController{

    static registerUserTeacher = async(req: Request, res: Response) => {
        try{
            const data: RegisterInput = req.body
            const user = await UserService.registerUserTeacher(data)
            res.status(201).json(user)

        }catch(error:any){ 
             if(error instanceof ZodError){
                const messages = error.issues.map(e => e.message)
                return res.status(400).json({message: messages})
            }
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        
        }
    }

    static registerUserAdmin = async(req: Request, res: Response) => {
        try{
            const data: RegisterInput = req.body
            const user = await UserService.registerUserAdmin(data)
            res.status(201).json(user)

        }catch(error:any){ 
            if(error instanceof ZodError){
                const messages = error.issues.map(e => e.message)
                return res.status(400).json({message: messages})
            }
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        
        }
    }

    static getUserById = async(req: Request, res: Response) =>{
        try{
        const userId = req.params.id
        const user = await UserService.getUserById(userId)
        return res.status(200).json(user)

        }catch(error:any){
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }  
    }
}
