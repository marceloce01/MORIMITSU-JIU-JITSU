import { Response, Request, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { AuthenticatedRequest } from "../utils/types";

export class AuthMiddleware{
    static authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction)=>{
        try{

            const token = req.header("Authorization")?.replace("Bearer ","")

            if(!token){
                return res.status(401).json({message: "Token não forecido!"})
            }

            const decoded =  verifyToken(token)
            req.user = decoded as any
            next()
        }catch(error:any){
            console.error("Erro ao verificar token:", error.message)
            res.status(401).json({message: "Token Inválido!"})
        }
    }
}