import { Request, Response } from "express";
import { PresenceService } from "../services/PresenceService.js";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { statusHTTP } from "../utils/ErrorCodes.js";
import { AuthenticatedRequest } from "../utils/types.js";

export class PresenceController {

    static presence = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }
            const {classroom_id} = req.params
            const {student_id, presence} = req.body
            
            const add_presence = await PresenceService.create({classroom_id, student_id, presence})

            return res.status(201).json({presence: add_presence, status: 201, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }
}