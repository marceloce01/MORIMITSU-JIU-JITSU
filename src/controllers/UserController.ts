//Controle de Usuário:
import { Request, Response } from "express"
import { UserService } from "../services/UserService.js"
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes.js"
import { ZodError } from "zod"
import { zodMessage } from "../utils/ZodErrorFormat.js"

export class UserController{

    static registerUser = async(req: Request, res: Response) => {
        try{
            const data = req.body
            const user = await UserService.registerUser(data)
            res.status(201).json({message: "Cadastro realizado.", user})
            

        }catch(error:any){ 
             if(error instanceof ZodError){
                return res.status(422).json({message: zodMessage(error), status: 422, code: ErrorCode.UNPROCESSABLE_ENTITY})
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

    static getAllUsers = async(req: Request, res: Response) =>{

            try{
                const users = await UserService.getAllUsers()
                return res.status(200).json({users, status: 200, code:"OK"})
    
            }catch(error:any){
                const status = statusHTTP(error.code)
                return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            }
        }
}
