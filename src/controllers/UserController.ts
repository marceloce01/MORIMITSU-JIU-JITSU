//Controle de Usuário:
import { Request, Response } from "express"
import { UserService } from "../services/UserService"
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes"

export class UserController{

    static registerUserTeacher = async(req: Request, res: Response) => {
        try{
            const {username, email, password} = req.body
            const user = await UserService.registerUserTeacher(username, email, password)
            res.status(201).json(user)

        }catch(error:any){ 
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        
        }
    }

    static registerUserAdmin = async(req: Request, res: Response) => {
        try{
            const {username, email, password} = req.body
            const user = await UserService.registerUserAdmin(username, email, password)
            res.status(201).json(user)

        }catch(error:any){ 
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        
        }
    }
}
