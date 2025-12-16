import { Request, Response } from "express"
import { ClassroomService } from "../services/ClassroomService.js"
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes.js"
import { AuthenticatedRequest } from "../utils/types.js"

export class ClassroomController {
    static createClassroom = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }
            
            const {class_id} = req.params
            const {teacher_id, classroom_date} = req.body
            
            const clasroom = await ClassroomService.createClassroom({class_id, teacher_id, classroom_date})

            return res.status(201).json({clasroom, status: 201, code:"CREATED"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static findClassroom = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }
            
            const {class_id} = req.params
           
            const clasrooms = await ClassroomService.findByClassID(class_id)

            return res.status(200).json({clasrooms, status: 200, code:"OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }
}