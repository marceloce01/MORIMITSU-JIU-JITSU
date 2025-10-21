import { Request, Response } from "express";
import { LoginInput } from "../schemas/LoginSchema";
import { AuthService } from "../services/AuthService";
import { ZodError } from "zod";
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes"

export class AuthController{

    static loginUser = async(req: Request, res: Response) =>{

        try{
            const data: LoginInput = req.body
            const token = await AuthService.loginUser(data)
            return res.status(200).json({token})

        }catch(error:any){
            if(error instanceof ZodError){
                const messages = error.issues.map(e => e.message)
                return res.status(400).json({message: messages})
            }
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }
        
    }
}