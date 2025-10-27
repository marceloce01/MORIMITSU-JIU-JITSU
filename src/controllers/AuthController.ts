import { Request, Response } from "express";
import { LoginInput } from "../schemas/LoginSchema.js";
import z from "zod";
import { AuthService } from "../services/AuthService.js";
import { ZodError } from "zod";
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes.js"

export class AuthController{

    //Função de Login do Usuário
    static loginUser = async(req: Request, res: Response) =>{
        try{
            const data: LoginInput = req.body
            const {token, user} = await AuthService.loginUser(data)
            return res.status(200).json({token, user})

        }catch(error:any){
            if(error instanceof ZodError){
                return res.status(422).json({message: "Email ou Senha inválidos!"})
            }
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }
        
    }

    //Função que enviará um email ao usuário
    static requestPasswordReset = async(req: Request, res: Response) =>{
        try{
             const {email} = req.body

            await AuthService.requestPasswordReset(email)
            return res.status(200).json({message: "Email de redefinição enviado!"})

        }catch(error: any){
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }
    }

    static resetPassword = async(req: Request, res: Response) =>{
        try{
            const token = req.params.token

            const passwordSchema = z.object({
                newPassword: z.string().min(6, "Senha muita curta!")
            })

            const parsedbody = passwordSchema.parse(req.body)
            return res.status(200).json({message: "Senha redefinida!"})

        }catch(error: any){
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }
    }
}