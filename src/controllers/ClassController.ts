import { Request, Response } from "express";
import { ClassService } from "../services/ClassService.js";
import { ZodError } from "zod";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { statusHTTP } from "../utils/ErrorCodes.js";
import { zodMessage } from "../utils/ZodErrorFormat.js";
import { uploadInCloud } from "../config/cloudinary.js";
import { AuthenticatedRequest } from "../utils/types.js";

export class ClassController{

    //Criar uma turma
    static createClass = async(req: AuthenticatedRequest, res: Response) =>{
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

            const data = req.body
            const newClass = await ClassService.createClass(data)

            console.log({message: "Turma cadastrada!", class: newClass, status: 201, code:"CREATED"})
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

    static updateClass = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }

            const {id} = req.params
            const data = req.body

            let url : string | undefined = undefined
            if(req.file){
                url = await uploadInCloud(req.file.path) ?? undefined
                data.image_class_url = url
            }

            const class_ = await ClassService.updateClass(id, data)
           
            console.log({message: "As alterações de turma foram salvas.", class: class_, status: 200, code:"OK"})
            return res.status(200).json({message: "As alterações de turma foram salvas.", class: class_, status: 200, code:"OK"})


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

    static addStudentInClass = async(req: AuthenticatedRequest, res: Response) =>{
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

            const {class_id} = req.params
            const {student_id} = req.body
            
            const message = await ClassService.addStudentInClass(class_id, student_id)

            console.log({message, status: 200, code:"OK"})
            return res.status(200).json({message, status: 200, code:"OK"})
    
        }catch(error:any){
            const status = statusHTTP(error.code)
            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})

            }
    }

    static filterClasses = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})

            }

            const filters = req.query
            
            const classes = await ClassService.filterClasses(filters)

            console.log({classes, status: 200, code:"OK"})
            return res.status(200).json({classes, status: 200, code:"OK"})
    
        }catch(error:any){
            const status = statusHTTP(error.code)
            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})

            }
    }

    static findAll = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }

            const classes = await ClassService.findAll()

            console.log({classes, status: 200, code:"OK"})
            return res.status(200).json({classes, status: 200, code:"OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    //Deletar uma turma
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
            
            const result = await ClassService.deleteClass(id)

            console.log({result, status: 200, code:"OK"})
            return res.status(200).json({result, status: 200, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }
}