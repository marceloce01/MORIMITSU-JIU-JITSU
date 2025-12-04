import { Belt } from "@prisma/client"
import { ErrorCode } from "../utils/ErrorCodes.js"
import { ConfigBeltRepository } from "../repositories/ConfigBeltRepository.js"

type BelConfigInput = {
    
}

export class BeltService {

    static createBeltConfig = async(min_age: number, max_age: number, belt: Belt, max_frequency: number) =>{

        //Caso falte dados obrigatórios
        if((min_age === undefined || min_age === null) || !belt || !max_frequency){
            const error:any = new Error("Digite todos os dados obrigatórios!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        //Se as idades forem digitadas incorretamente
        if(min_age > max_age){
            const error:any = new Error("Idade mínima digitada incorretamente!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        //Verifica de a faixa já está configurada
        const existingConfig = await ConfigBeltRepository.findByBelt(belt)
        if(existingConfig){
            const error:any = new Error(`Faixa ${belt} já configurada!`)
            error.code = ErrorCode.CONFLICT
            throw error
        }

        return await ConfigBeltRepository.create({min_age, max_age, belt, max_frequency})
    }
 }