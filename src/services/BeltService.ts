import { Belt } from "@prisma/client"
import { ErrorCode } from "../utils/ErrorCodes.js"
import { ConfigBeltRepository } from "../repositories/ConfigBeltRepository.js"

export class BeltService {

    static createBeltConfig = async(min_age: number, max_age: number, belt: Belt, grade: number, max_frequency: number) =>{

        //Caso falte dados obrigatórios
        if((min_age === undefined || min_age === null) || !belt || !max_frequency || !grade){
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

        return await ConfigBeltRepository.create({min_age, max_age, belt, grade, max_frequency})
    }

    static update = async(belt: Belt, data: {min_age?: number, max_age?: number, min_belt?: Belt, grade?: number, max_frequency?: number}) => {

        const belt_ = await ConfigBeltRepository.findByBelt(belt)
        if(!belt_){
            const error:any = new Error("Faixa não configurada.")
            error.code = ErrorCode.NOT_FOUND
            throw error
        }
     
        if((data.min_age && data.max_age) && (data.min_age > data.max_age)){
            const error:any = new Error("Idade mínima digitada incorretamente!")
            error.code = ErrorCode.BAD_REQUEST
            throw error
        }

        if(data.grade && data.grade < 0){
            const error:any = new Error("A quantidade de graus da faixa deve ser um número inteiro positivo.")
            error.code = ErrorCode.BAD_REQUEST
            throw error

        }

        if(data.max_frequency && data.max_frequency < 0){
            const error:any = new Error("A quantidade de frequências da faixa deve ser um número inteiro positivo.")
            error.code = ErrorCode.BAD_REQUEST
            throw error

        }

        return await ConfigBeltRepository.update(belt, data)

    }

    static filterBelt = async (belt: Belt) => {
        const filter = await ConfigBeltRepository.findByBelt(belt)
        if(!filter){
            return "Faixa não encontrada."

        }else{
            return filter
        }
    }
 }