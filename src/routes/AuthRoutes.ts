import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";
import { AuthMiddleware } from "../middlewares/authMiddlewares.js";
import { AuthenticatedRequest } from "../utils/types.js";

export const authRouter = Router()

//Rota de login do usuário
authRouter.post("/login", AuthController.loginUser)

authRouter.get("/profile", AuthMiddleware.authenticate, async (req: AuthenticatedRequest, res)=>{
    return res.status(200).json({message: "Token Válido", userId: req.user?.userId})
})

//Rota que envia o código de verificação da recuperação de senha via e-mail
authRouter.post("/request-reset", AuthController.requestPasswordReset)

//Rota que verifica esse código
authRouter.post("/verify-code", AuthController.verifyCode)

//Rota que redefine a senha do usuário
authRouter.post("/reset-password/:userId", AuthController.resetPassword)

//Rota que solicita ao ADM o cadastro
authRouter.post("/request-registration", AuthController.requestRegistration)