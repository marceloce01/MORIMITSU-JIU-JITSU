//Controle de Usuário:
import { Request, Response } from "express"
import { RegisterInput } from "../schemas/RegisterSchema.js"
import { UserService } from "../services/UserService.js"
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes.js"
import { ZodError } from "zod"

export class UserController{

    static registerUser = async(req: Request, res: Response) => {
        try{
            const data: RegisterInput = req.body
            const user = await UserService.registerUser(data)
            res.status(201).json(user)

        }catch(error:any){ 
             if(error instanceof ZodError){
                return res.status(422).json({message: "Dados Inválidos!"})
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
