//Criei esse arquivo para facilitar a compreensão de validação de erros, contendo os tipos de erros. Também para facilitar o uso no controller

//Tipos de erros
export enum ErrorCode {

    BAD_REQUEST = "BAD_REQUEST", //Dados faltando ou inválidos
    CONFLICT = "CONFLICT", //Dados duplicados
    UNAUTHORIZED = "UNAUTHORIZED", // Credenciais inválidas
    NOT_FOUND = "NOT_FOUND", //Recurso não encontrado
    INTERNAL = "INTERNAL" //Erro interno no servidor
}

//Função para saber o status HTTP através do ErrorCode
export function statusHTTP(code: string | undefined): number {

    switch(code){

        case ErrorCode.BAD_REQUEST:
            return 400

        case ErrorCode.CONFLICT:
            return 409
       
        case ErrorCode.UNAUTHORIZED:
            return 401

        case ErrorCode.NOT_FOUND:
            return 400

        default:
            return 500
    }
}