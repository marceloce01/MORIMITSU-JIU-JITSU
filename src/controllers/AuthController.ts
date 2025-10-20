import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes"

export class AuthController{

    static loginUser = async(req: Request, res: Response) =>{

        try{
            const {email, password} = req.body
            const token = await AuthService.loginUser(email, password)
            return res.status(200).json({token})

        }catch(error:any){
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }
        
    }
}