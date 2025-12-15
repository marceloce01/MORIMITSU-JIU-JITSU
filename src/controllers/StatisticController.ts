import { Request, Response } from "express";
import { StatisticsService } from "../services/StatisticsService.js"
import { ZodError } from "zod";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { statusHTTP } from "../utils/ErrorCodes.js";
import { AuthenticatedRequest } from "../utils/types.js";

export class StatisticController {
    static summary = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){
                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }

            const statistics = await StatisticsService.summary()

            return res.status(200).json({statistics, status: 200, code:"OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static weekGraphic = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){
                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }

            const graphic = await StatisticsService.graphic_presences()

            return res.status(200).json({graphic, status: 200, code:"OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static monthGraphic = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){
                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }

            const graphic = await StatisticsService.graphic_classrooms()

            return res.status(200).json({graphic, status: 200, code:"OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }
}