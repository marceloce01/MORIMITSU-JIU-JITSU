import { Request, Response } from "express";
import { ClassService } from "../services/ClassService.js";
import { ZodError } from "zod";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { statusHTTP } from "../utils/ErrorCodes.js";
import { zodMessage } from "../utils/ZodErrorFormat.js";
import { uploadInCloud } from "../config/cloudinary.js";

export class ClassController{

    //Criar uma turma
    static createClass = async(req: Request, res: Response) =>{
        try{

            let url : string | undefined = undefined
            
            if(req.file){
                url = await uploadInCloud(req.file.path) ?? undefined
            }

            const data = {
                ...req.body,
                image_class_url: url
            } 
            const newClass = await ClassService.createClass(data)

            return res.status(201).json({message: "Turma cadastrada!", class: newClass, status: 201, code:"CREATED"})

        }catch(error:any){
            if(error instanceof ZodError){
                console.error({message: zodMessage(error), status: 422, code: ErrorCode.UNPROCESSABLE_ENTITY})
                return res.status(422).json({message: zodMessage(error), status: 422, code: ErrorCode.UNPROCESSABLE_ENTITY})
            }
            const status = statusHTTP(error.code)
            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static addStudentInClass = async(req: Request, res: Response) =>{
        try{
                const {class_id} = req.params
                const {student_id} = req.body
                
                const message = await ClassService.addStudentInClass(class_id, student_id)
    
                return res.status(200).json({message, status: 200, code:"OK"})
    
        }catch(error:any){
            const status = statusHTTP(error.code)
            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})

            }
    }

    //Deletar uma turma
    static deleteStudent = async(req: Request, res: Response) =>{
            try{
                const {id} = req.params
                
                const result = await ClassService.deleteClass(id)
    
                return res.status(200).json({result, status: 200, code:"OK"})
    
            }catch(error:any){
                const status = statusHTTP(error.code)
                return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            }
        }
}