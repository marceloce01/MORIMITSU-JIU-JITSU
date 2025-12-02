import { Belt } from "@prisma/client";
import { ConfigBeltRepository } from "../../repositories/ConfigBeltRepository.ts";
import { ErrorCode } from "../ErrorCodes.ts";

export async function beltValidation(birth_date: Date, belt: Belt, frequency: number): Promise <true | string>{
    const colorBelt = await ConfigBeltRepository.findByBelt(belt)

    if(!colorBelt){
        const error:any = new Error(`Configuração da faixa ${belt} não encontrada!`)
        error.code = ErrorCode.NOT_FOUND
        throw error
    }

    let age
    const today = new Date()
    age = today.getFullYear() - birth_date.getFullYear()
    const month = today.getMonth() - birth_date.getMonth()

    if(month < 0 || (month === 0 && today.getDate() < birth_date.getDate())){
        age--
    }

    if(age < colorBelt.min_age || (colorBelt.max_age != null && age > colorBelt.max_age)){
        return `Faixa não permitida para a idade do aluno: Faixa: ${belt}, Idade: ${age}`
    }

    if(age < 12 && frequency > 15){
        return `Frequência máxima para o aluno atingida: Faixa: ${belt}, Idade: ${age}, Frequência máxima: 15`
    }

    if(frequency > colorBelt.max_frequency){
       return `Frequência máxima para o aluno atingida: Faixa: ${belt}, Idade: ${age}, Frequência Máxima: ${colorBelt.max_frequency}`
    }

    return true
}
 
