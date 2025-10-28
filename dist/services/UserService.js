//Serviços de Usuário: local onde basicamente se trata de regras de negócios dos usuários, ou melhor, verificações de cadastro do usuário, como falta de campos obrigatórios, verificar a existência de um usuário, etc
import bcrypt from "bcryptjs";
import { registerSchema } from "../schemas/RegisterSchema.js";
import { UserRepository } from "../repositories/UserRepository.js";
import { ErrorCode } from "../utils/ErrorCodes.js";
//Classe de serviços de Users
export class UserService {
    //Cadastro de Usuários Administradores
    static registerUser = async (data) => {
        //Caso falte algum dado
        if (!data.email || !data.password) {
            const error = new Error("Email e Senha obrigatórios!");
            error.code = ErrorCode.BAD_REQUEST;
            throw error;
        }
        const parsedData = registerSchema.parse(data);
        //Caso o usuário já esteja cadastrado
        const existingUser = await UserRepository.findByEmail(parsedData.email);
        if (existingUser) {
            const error = new Error("Usuário já cadastrado!");
            error.code = ErrorCode.CONFLICT;
            throw error;
        }
        //Sendo feita essa verificação, usuário administrador criado:
        const hashedPassword = await bcrypt.hash(parsedData.password, 10);
        const user = await UserRepository.create({ username: parsedData.username, email: parsedData.email, password: hashedPassword, role: parsedData.role });
        return user;
    };
    static getUserById = async (userId) => {
        const user = await UserRepository.findById(userId);
        if (!user) {
            const error = new Error("Usuário não encontrado!");
            error.code = ErrorCode.NOT_FOUND;
            throw error;
        }
        //Se houver:
        return user;
    };
}
