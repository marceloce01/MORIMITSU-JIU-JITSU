import { Request, Response } from "express";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { BeltService } from "../services/BeltService.js";
import { statusHTTP } from "../utils/ErrorCodes.js";
import { AuthenticatedRequest } from "../utils/types.js";
import { Belt } from "@prisma/client";

export class BeltController{

    //Criar uma configuração de faixa
    static createBeltConfig = async(req: AuthenticatedRequest, res: Response) =>{
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

            const {min_age, max_age, belt, grade, max_frequency} = req.body
            
            const beltConfig = await BeltService.createBeltConfig(min_age, max_age, belt, grade, max_frequency)

            console.error({message: "Faixa configurada!", beltConfig: beltConfig, status: 201, code:"CREATED"})
            return res.status(201).json({message: "Faixa configurada!", beltConfig: beltConfig, status: 201, code:"CREATED"})

        }catch(error:any){
            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static updateBeltConfig = async(req: AuthenticatedRequest, res: Response) =>{
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

            const belt = req.params.belt as Belt
            const data = req.body 
            
            const beltConfig = await BeltService.update(belt, data)

            console.log({message: "As alterações foram salvas.", belt_config: beltConfig, status: 200, code:"OK"})
            return res.status(201).json({message: "As alterações foram salvas.", belt_config: beltConfig, status: 200, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static filterBelt = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }
            if(user.role !== "ADMIN"){

                console.log({message: "Acesso negado: Apenas ADMINISTRADORES podem acessar.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Acesso negado: Apenas ADMINISTRADORES podem acessar.", status: 401, code: "UNNAUTHORIZED"})
            }

            const {belt} = req.query as any
           
            const beltConfig = await BeltService.filterBelt(belt)

            console.log({belt: beltConfig, status: 200, code:"OK"})
            return res.status(200).json({belt: beltConfig, status: 200, code:"OK"})

        }catch(error:any){
            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }

    static getAll = async(req: AuthenticatedRequest, res: Response) =>{
        try{
            const user = req.user
            if(!user){

                console.error({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Usuário não autenticado.", status: 401, code: "UNNAUTHORIZED"})
            }

            if(user.role !== "ADMIN"){

                console.log({message: "Acesso negado: Apenas ADMINISTRADORES podem acessar.", status: 401, code: "UNNAUTHORIZED"})
                return res.status(401).json({message: "Acesso negado: Apenas ADMINISTRADORES podem acessar.", status: 401, code: "UNNAUTHORIZED"})
            }

            const belts = await BeltService.getAll()

            console.log({belts, status: 200, code:"OK"})
            return res.status(200).json({belts, status: 200, code:"OK"})

        }catch(error:any){

            const status = statusHTTP(error.code)

            console.error({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
        }
    }
}