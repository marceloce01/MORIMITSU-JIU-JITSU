import { Request, Response } from "express";
import { ClassService } from "../services/ClassService.js";
import { ZodError } from "zod";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { statusHTTP } from "../utils/ErrorCodes.js";
import { zodMessage } from "../utils/ZodErrorFormat.js";

export class ClassController{

    static createClass = async(req: Request, res: Response) =>{
            
            try{
                const {name, teacher_id, local} = req.body
                
                const newClass = await ClassService.createClass(name, teacher_id, local)
    
                return res.status(201).json({message: "Turma cadastrada!", class: newClass, status: 201, code:"CREATED"})
    
            }catch(error:any){
                if(error instanceof ZodError){
                    return res.status(422).json({message: zodMessage(error), status: 422, code: ErrorCode.UNPROCESSABLE_ENTITY})
                }
                const status = statusHTTP(error.code)
                return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            }
        }
}