import { Request, Response } from "express";
import { GraduationService } from "../services/GraduationService.js";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { statusHTTP } from "../utils/ErrorCodes.js";
import { AuthenticatedRequest } from "../utils/types.js";

export class GraduationController {

    static graduateStudent = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }
            if(user.role !== "ADMIN"){

                console.error({message: "Acesso negado: Apenas ADMINISTRADORES podem acessar.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Acesso negado: Apenas ADMINISTRADORES podem acessar.", status: 401, code: "UNNAUTHORIZED"})
            }
            
            const {id} = req.params
            
            const message = await GraduationService.graduateStudent(id)

            console.log({message, status: 200, code:"OK"})
            return res.status(200).json({message, status: 200, code:"OK"})

        }catch(error:any){
            
            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static fitsGraduate= async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }
            if(user.role !== "ADMIN"){

                console.error({message: "Acesso negado: Apenas ADMINISTRADORES podem acessar.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Acesso negado: Apenas ADMINISTRADORES podem acessar.", status: 401, code: "UNNAUTHORIZED"})
            }
            
            const students = await GraduationService.fitGraduate()

            console.log({students, status: 200, code:"OK"})
            return res.status(200).json({students, status: 200, code:"OK"})

        }catch(error:any){
            
            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }
}