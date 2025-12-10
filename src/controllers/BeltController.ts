import { Request, Response } from "express";
import { ErrorCode } from "../utils/ErrorCodes.js";
import { BeltService } from "../services/BeltService.js";
import { statusHTTP } from "../utils/ErrorCodes.js";

export class BeltController{

    //Criar uma configuração de faixa
    static createBeltConfig = async(req: Request, res: Response) =>{
            try{
                const {min_age, max_age, belt, grade, max_frequency} = req.body
                
                const beltConfig = await BeltService.createBeltConfig(min_age, max_age, belt, grade, max_frequency)
                return res.status(201).json({message: "Faixa configurada!", beltConfig: beltConfig, status: 201, code:"CREATED"})
    
            }catch(error:any){
                const status = statusHTTP(error.code)
                return res.status(status).json({message: error.message || "Internal server error", status: status, code: error.code || ErrorCode.INTERNAL})
            }
    }
}