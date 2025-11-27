import { Belt } from "@prisma/client";

export function beltAgeValidation(birth_date: Date, belt: Belt): boolean{

        //Calcula idade
        let age
        const today = new Date()
        age = today.getFullYear() - birth_date.getFullYear()
        const month = today.getMonth() - birth_date.getMonth()

        if(month < 0 || (month === 0 && today.getDate() < birth_date.getDate())){
            age--
        }

        //Verifica se o usuário tem uma idade >= 16 e lhe é selecionado uma faixa para <16
        if(age < 16 && belt === Belt.BLUE || Belt.PURPLE || Belt.BROWN || Belt.BLACK || Belt.RED){
                return false
        }

        //Verifica se o usuário tem uma idade >= 16 e lhe é selecionado uma faixa para <16
        if(age >= 16 && belt === Belt.GRAY_WHITE || Belt.GRAY || Belt.GRAY_BLACK || Belt.YELLOW_WHITE || Belt.YELLOW
            || Belt.YELLOW_BLACK || Belt.ORANGE_WHITE || Belt.ORANGE || Belt.ORANGE_BLACK || Belt.GREEN_WHITE || Belt.GREEN
            || Belt.GREEN_BLACK){
                return false
        }

        return true
}