import { Request, Response } from "express";
import { StudentService } from "../services/StudentService.js";
import { ZodError } from "zod";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { statusHTTP } from "../utils/ErrorCodes.js";
import { zodMessage } from "../utils/ZodErrorFormat.js";
import { uploadInCloud } from "../config/cloudinary.js";

export class StudentController {

    static registerStudent = async(req: Request, res: Response) =>{
        try{

            let url : string | undefined = undefined

            if(req.file){
                url = await uploadInCloud(req.file.path) ?? undefined
            }

            const data = {
                ...req.body,
                image_student_url: url
            } 
            
            const {student, age} = await StudentService.registerStudent(data)
            return res.status(201).json({message: "Aluno cadastrado.", student, age,  status: 201, code:"CREATED"})

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

    static updateStudent = async(req: Request, res: Response) =>{
        try{
            const {id} = req.params
            const data = req.body

            let url : string | undefined = undefined
            if(req.file){
                url = await uploadInCloud(req.file.path) ?? undefined
                data.image_student_url = url
            }

            const {student, age} = await StudentService.updateStudent(id, data)

            return res.status(200).json({message: "As alterações foram salvas.", student, age, status: 200, code:"OK"})

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

    static getStudent = async(req: Request, res: Response) =>{
        try{
            const {id} = req.params
            
            const student = await StudentService.getById(id)

            return res.status(200).json({student, status: 200, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static filterStudents= async(req: Request, res: Response) => {
        try{
            const filters = req.query
            const students = await StudentService.filterStudents(filters)
            return res.status(200).json({students, status: 200, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static getAllStudents = async(req: Request, res: Response) => {
        try{
            const students = await StudentService.getAllStudents()
            return res.status(200).json({students, status: 200, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static deleteStudent = async(req: Request, res: Response) =>{
        try{
            const {id} = req.params
            
            const result = await StudentService.deleteStudent(id)

            return res.status(200).json({result, status: 200, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static getCelebrantsBirth = async(req: Request, res: Response) => {
        try{
            const {celebrants} = await StudentService.getCelebrantsBirth()
            return res.status(200).json({celebrants, status: 200, code: "OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }
}