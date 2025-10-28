import { verifyToken } from "../utils/jwt.js";
export class AuthMiddleware {
    static authenticate = (req, res, next) => {
        try {
            const token = req.header("Authorization")?.replace("Bearer ", "");
            if (!token) {
                return res.status(401).json({ message: "Token não forecido!" });
            }
            const decoded = verifyToken(token);
            req.user = decoded;
            next();
        }
        catch (error) {
            console.error("Erro ao verificar token:", error.message);
            res.status(401).json({ message: "Token Inválido!" });
        }
    };
}
