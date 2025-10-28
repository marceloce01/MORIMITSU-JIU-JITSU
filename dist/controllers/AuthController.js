import z from "zod";
import { AuthService } from "../services/AuthService.js";
import { ZodError } from "zod";
import { ErrorCode, statusHTTP } from "../utils/ErrorCodes.js";
export class AuthController {
    //Função de Login do Usuário
    static loginUser = async (req, res) => {
        try {
            const { email, password, role } = req.body;
            const { token, user } = await AuthService.loginUser(email, password, role);
            return res.status(200).json({ token, user, code: "OK" });
        }
        catch (error) {
            if (error instanceof ZodError) {
                return res.status(422).json({ message: "Formato de e-mail inválido!", code: ErrorCode.UNPROCESSABLE_ENTITY });
            }
            const status = statusHTTP(error.code);
            return res.status(status).json({ message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL });
        }
    };
    //Função que enviará um email ao usuário para redefinir senha
    static requestPasswordReset = async (req, res) => {
        try {
            const { email } = req.body;
            await AuthService.requestPasswordReset(email);
            return res.status(200).json({ message: "Se o e-mail estiver cadastrado, você receberá um link de redefinição.", code: "OK" });
        }
        catch (error) {
            if (error instanceof ZodError) {
                return res.status(422).json({ message: "Formato de e-mail inválido!", code: ErrorCode.UNPROCESSABLE_ENTITY });
            }
            const status = statusHTTP(error.code);
            return res.status(status).json({ message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL });
        }
    };
    //Função que redefine a senha do usuário
    static resetPassword = async (req, res) => {
        try {
            const token = req.params.token;
            const passwordSchema = z.object({
                newPassword: z.string().min(6)
            });
            const { newPassword } = passwordSchema.parse(req.body);
            const result = await AuthService.resetPassword(token, newPassword);
            return res.status(200).json({ result, code: "OK" });
        }
        catch (error) {
            if (error instanceof ZodError) {
                return res.status(422).json({ message: "Senha muito curta! (Minímo: 6 caracteres)", code: ErrorCode.UNPROCESSABLE_ENTITY });
            }
            const status = statusHTTP(error.code);
            return res.status(status).json({ message: error.message || "Internal server error", code: error.code || ErrorCode.INTERNAL });
        }
    };
}
