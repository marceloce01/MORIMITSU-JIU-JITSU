import { Request, Response } from "express";
import z from "zod";
import { AuthService } from "../services/AuthService.js";
import { ZodError } from "zod";
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes.js"

export class AuthController{

    //Função de Login do Usuário
    static loginUser = async(req: Request, res: Response) =>{
        try{
            
            const {email, password, role} = req.body
            
            const {token, user} = await AuthService.loginUser(email, password, role)
            return res.status(200).json({token, user, code:"OK"})

        }catch(error:any){
            if(error instanceof ZodError){
                return res.status(422).json({message: "Formato de e-mail inválido!", code: ErrorCode.UNPROCESSABLE_ENTITY})
            }
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }
        
    }

    //Função que enviará um email ao usuário para redefinir senha
    static requestPasswordReset = async(req: Request, res: Response) =>{
        try{

            const {email} = req.body
    
            await AuthService.requestPasswordReset(email)
            return res.status(200).json({message: "Se o e-mail estiver cadastrado, você receberá um código de redefinição.", code: "OK"})

        }catch(error: any){
            if(error instanceof ZodError){
                return res.status(422).json({message: "Formato de e-mail inválido!", code: ErrorCode.UNPROCESSABLE_ENTITY})
            }
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }
    }

    //Função que verifica codigo
    static verifyCode = async(req: Request, res: Response) => {
        try{
            const {code} = req.body
            const message = await AuthService.verifyCode(code)
            return res.status(200).json({message, code: "OK"})

        }catch(error: any){
            if(error instanceof ZodError){
                return res.status(422).json({message: "Digite o código completo!", code: ErrorCode.UNPROCESSABLE_ENTITY})
            }
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }
        
    }

    //Função que redefine a senha do usuário
    static resetPassword = async(req: Request, res: Response) =>{
        try{

            const {userId, codeId, newPassword} = req.body

            await AuthService.resetPassword(userId, codeId, newPassword)
            return res.status(200).json({message: "Senha redefinida com sucesso!", code: "OK"})

        }catch(error: any){
            if(error instanceof ZodError){
                return res.status(422).json({message: "Senha muito curta! (Minímo: 6 caracteres)", code: ErrorCode.UNPROCESSABLE_ENTITY})
            }
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }
    }

    static requestRegistration = async(req: Request, res: Response) =>{
        try{

            const {email} = req.body
    
            await AuthService.requestRegistration(email)
            return res.status(200).json({message: "Seu e-mail foi solicitado ao ADMIN!", code: "OK"})

        }catch(error: any){
            if(error instanceof ZodError){
                return res.status(422).json({message: "Formato de e-mail inválido!", code: ErrorCode.UNPROCESSABLE_ENTITY})
            }
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }
    }
}