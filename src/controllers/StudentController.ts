import { Request, Response } from "express";
import { StudentService } from "../services/StudentService.js";
import { ZodError } from "zod";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { statusHTTP } from "../utils/ErrorCodes.js";
import { zodMessage } from "../utils/ZodErrorFormat.js";
import { uploadInCloud } from "../config/cloudinary.js";
import { AuthenticatedRequest } from "../utils/types.js";
import { StatisticsService } from "../services/StatisticsService.js";

export class StudentController {

    static registerStudent = async(req: AuthenticatedRequest, res: Response) =>{
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

            let url : string | undefined = undefined

            if(req.file){
                url = await uploadInCloud(req.file.path) ?? undefined
            }

            const data = {
                ...req.body,
                image_student_url: url
            } 
            
            const {student, age} = await StudentService.registerStudent(data)

            console.log({message: "Aluno cadastrado.", student, age,  status: 201, code:"CREATED"})
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

    static updateStudent = async(req: AuthenticatedRequest, res: Response) =>{
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
            const data = req.body

            let url : string | undefined = undefined
            if(req.file){
                url = await uploadInCloud(req.file.path) ?? undefined
                data.image_student_url = url
            }

            const {student, age} = await StudentService.updateStudent(id, data)

            console.log({message: "As alterações foram salvas.", student, age, status: 200, code:"OK"})
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

    static filterStudents= async(req: AuthenticatedRequest, res: Response) => {
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})

            }

            const filters = req.query
            const students = await StudentService.filterStudents(filters)

            console.log({students, status: 200, code:"OK"})
            return res.status(200).json({students, status: 200, code:"OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static getAllStudents = async(req: AuthenticatedRequest, res: Response) => {
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }

            const students = await StudentService.getAllStudents()

            console.log({students, status: 200, code:"OK"})
            return res.status(200).json({students, status: 200, code:"OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static deleteStudent = async(req: AuthenticatedRequest, res: Response) =>{
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
            
            const result = await StudentService.deleteStudent(id)

            console.log({result, status: 200, code:"OK"})
            return res.status(200).json({result, status: 200, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static promote = async(req: AuthenticatedRequest, res: Response)=>{
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
            
            const message = await StudentService.promote(id)

            console.log({message, status: 200, code:"OK"})
            return res.status(200).json({message, status: 200, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static getCelebrantsBirth = async(req: AuthenticatedRequest, res: Response) => {
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }

            const {celebrants} = await StudentService.getCelebrantsBirth()

            console.log({celebrants, status: 200, code: "OK"})
            return res.status(200).json({celebrants, status: 200, code: "OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

}