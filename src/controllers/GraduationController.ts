import { Request, Response } from "express";
import { GraduationService } from "../services/GraduationService.js";
import { ZodError } from "zod";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { statusHTTP } from "../utils/ErrorCodes.js";

export class GraduationController {

    static graduateStudent = async(req: Request, res: Response) =>{
        try{
            const {id} = req.params
            
            const message = await GraduationService.graduateStudent(id)

            return res.status(200).json({message, status: 200, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }
}