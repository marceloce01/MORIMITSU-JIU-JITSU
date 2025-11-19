
export function phoneValidation(phone: string): boolean {

    phone = phone.replace(/\D/g, "")

    //Verifica quantidade de dígitos
    if(phone.length < 10 || phone.length > 11){
        return false
    }

    //Verifica se o terceiro número é 9
    if(phone.length === 11 && parseInt(phone.substring(2,3)) !== 9){
        return false
    }

    //Verifica se os números não são repetidos
    for (let n = 0; n <= 9; n++){
        if(phone === new Array(11).join(n.toString()) || phone === new Array(12).join(n.toString())){
            return false
        }
    }

    //DDDs 
    const DDD = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99]

    //Verifica o DDD digitado
    const ddd = parseInt(phone.substring(0,2))
    if(!DDD.includes(ddd)){
        return false
    }

    //Para telefones fixos, os primeiros dígitos não podem ser 2, 3, 4, 5
    const firtsDigit = parseInt(phone.substring(2,3))
    if(phone.length === 10 && ![2,3,4,5].includes(firtsDigit)){
        return false
    }
    
    return true
}