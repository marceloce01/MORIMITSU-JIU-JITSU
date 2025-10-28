import { UserRepository } from "../repositories/UserRepository.js";
import z from "zod";
import { allowedDomain } from "../schemas/Email.js";
import { ErrorCode } from "../utils/ErrorCodes.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { ResetPasswordTokenRepository } from "../repositories/ResetPasswordTokenRepository.js";
import { sendMail } from "../utils/mailer.js";
const JWT_SECRET = process.env.JWT_SECRET;
export class AuthService {
    //Função de login do usuário
    static loginUser = async (email, password, role) => {
        //Caso falte dados obrigatórios
        if (!email || !password) {
            const error = new Error("Email e Senha obrigatórios!");
            error.code = ErrorCode.BAD_REQUEST;
            throw error;
        }
        const loginSchema = z.object({
            email: z.string().email().refine((val) => {
                const domain = val.split("@")[1];
                return allowedDomain.includes(domain);
            }),
            password: z.string(),
            role: z.enum(["ADMIN", "TEACHER"])
        });
        loginSchema.parse({ email, password, role });
        //Caso o usuário não esteja cadastrado
        const user = await UserRepository.findByEmail(email);
        if (!user) {
            const error = new Error("Email ou Senha incorretos!");
            error.code = ErrorCode.UNAUTHORIZED;
            throw error;
        }
        //Caso a senha do usuário esteja errada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            const error = new Error("Email ou Senha incorretos!");
            error.code = ErrorCode.UNAUTHORIZED;
            throw error;
        }
        //Caso o usuário tente logar no campo errado
        if (user.role != role) {
            const error = new Error(`Usuário não está cadastrado como ${role}!`);
            error.code = ErrorCode.FORBIDDEN;
            throw error;
        }
        const token = jwt.sign({ userId: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
        return { token, user: { id: user.id, name: user.username, email: user.email, role: user.role } };
    };
    //Função que vai enviar email ao usuário para redefinir senha
    static requestPasswordReset = async (email) => {
        //Se o usuário não digitar o email
        if (!email) {
            const error = new Error("Email obrigatório!");
            error.code = ErrorCode.BAD_REQUEST;
            throw error;
        }
        const emailSchema = z.object({
            email: z.string().email()
        });
        emailSchema.parse({ email });
        const user = await UserRepository.findByEmail(email);
        if (!user) {
            const error = new Error("E-mail incorreto!");
            error.code = ErrorCode.UNAUTHORIZED;
            throw error;
        }
        const resetToken = crypto.randomUUID();
        const expiresAt = new Date(Date.now() + 1000 * 60 * 15);
        await ResetPasswordTokenRepository.create({ token: resetToken, userId: user.id, expiresAt });
        const resetLink = `http://localhost:3000/auth/reset-password/${resetToken}`;
        await sendMail(user.email, "Redefinição de senha", `
            <h2> Olá, ${user.username} </h2>
            <p> Você solicitou redefinição de senha. Clique no link abaixo para redefinir: </p>
            <a href="${resetLink}"> Redefinir minha senha </a>
            <p> Esse link expira em 15 minutos. </p>
            `);
    };
    //Essa é a função que vai redefinir a senha
    static resetPassword = async (token, newPassword) => {
        //Caso falte algum dado 
        if (!token || !newPassword) {
            const error = new Error("Token e Nova Senha obrigatórios!");
            error.code = ErrorCode.BAD_REQUEST;
            throw error;
        }
        //Vai verificar se o token fornecido existe ou já expirou
        const resetToken = await ResetPasswordTokenRepository.findByToken(token);
        if (!resetToken || resetToken.expiresAt <= new Date()) {
            const error = new Error("Token Inválido ou Expirado!");
            error.code = ErrorCode.UNAUTHORIZED;
            throw error;
        }
        //Acredito que desnecessário
        const user = await UserRepository.findById(resetToken.userId);
        if (!user) {
            const error = new Error("Usuário não encontrado!");
            error.code = ErrorCode.NOT_FOUND;
            throw error;
        }
        //Cria o hash da nova senha, redefine a senha e deleta o token de recuperação por segurança
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await UserRepository.update(user.id, { password: hashedPassword });
        await ResetPasswordTokenRepository.delete(resetToken.id);
        return { message: "Senha redefinida com sucesso!" };
    };
}
