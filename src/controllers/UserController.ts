//Controle de Usuário:
import { Request, Response } from "express"
import { UserService } from "../services/UserService.js"
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes.js"
import { ZodError } from "zod"
import { zodMessage } from "../utils/ZodErrorFormat.js"
import { AuthenticatedRequest } from "../utils/types.js"

export class UserController{

    static registerUser = async(req: AuthenticatedRequest, res: Response) => {
        try{
            const user_ = req.user
            if(!user_){
                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }
            const data = req.body
            const user = await UserService.registerUser(data)
            res.status(201).json({message: "Cadastro realizado.", user})
            

        }catch(error:any){ 
             if(error instanceof ZodError){
                return res.status(422).json({message: zodMessage(error), status: 422, code: ErrorCode.UNPROCESSABLE_ENTITY})
            }
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        
        }
    }

    static filterUsers = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){
                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }
            const filters = req.query
            const users = await UserService.filterUsers(filters)
            return res.status(200).json({users, status: 200, code:"OK"})
        
        }catch(error:any){
            const status = statusHTTP(error.code)
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }       

    }

    static getUserById = async(req: Request, res: Response) =>{

        try{
        const userId = req.params.id
        const user = await UserService.getUserById(userId)
        return res.status(200).json(user)
        
        }catch(error:any){
            const status = statusHTTP(error.code)
            res.status(status).json({message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL})
        }  
    }

    static getAllUsers = async(req: AuthenticatedRequest, res: Response) =>{
            try{
                const user = req.user
                if(!user){
                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }
                const users = await UserService.getAllUsers()
                return res.status(200).json({users, status: 200, code:"OK"})
    
            }catch(error:any){
                const status = statusHTTP(error.code)
                return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            }
    }

    static teacherClasses = async(req: AuthenticatedRequest, res: Response)=>{
        try{
            const user = req.user
            if(!user){
                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }

            const {id} = req.params

            const classes = await UserService.teacherClasses(id)

            return res.status(200).json({classes, status: 200, code:"OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static teacherStudents = async(req: AuthenticatedRequest, res: Response)=>{
        try{
            const user = req.user
            if(!user){
                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }

            const {id} = req.params

            const students = await UserService.teacherStudents(id)

            return res.status(200).json({students, status: 200, code:"OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }
}
