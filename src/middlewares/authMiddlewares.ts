import { Response, Request, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { AuthenticatedRequest } from "../utils/types";

export class AuthMiddleware{
    static authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction)=>{
        const token = req.header("Authorization")?.replace("Bearer ","")
        if(!token){
            return res.status(401).json({message: "no token provided"})
        }
        try{
            const decoded =  verifyToken(token)
            req.user = decoded
            next()
        }catch(error:any){
            console.error("Erro ao verificar token:", error.message)
            res.status(401).json({message: "invalid token"})
        }
    }
}