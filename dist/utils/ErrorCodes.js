//Criei esse arquivo para facilitar a compreensão de validação de erros, contendo os tipos de erros. Também para facilitar o uso no controller
//Tipos de erros
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode["BAD_REQUEST"] = "BAD_REQUEST";
    ErrorCode["CONFLICT"] = "CONFLICT";
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ErrorCode["INTERNAL"] = "INTERNAL";
    ErrorCode["FORBIDDEN"] = "FORBIDDEN";
    ErrorCode["UNPROCESSABLE_ENTITY"] = "UNPROCESSABLE_ENTITY";
})(ErrorCode || (ErrorCode = {}));
//Função para saber o status HTTP através do ErrorCode
export function statusHTTP(code) {
    switch (code) {
        case ErrorCode.BAD_REQUEST:
            return 400;
        case ErrorCode.CONFLICT:
            return 409;
        case ErrorCode.UNAUTHORIZED:
            return 401;
        case ErrorCode.NOT_FOUND:
            return 404;
        case ErrorCode.FORBIDDEN:
            return 403;
        case ErrorCode.UNPROCESSABLE_ENTITY:
            return 422;
        default:
            return 500;
    }
}
