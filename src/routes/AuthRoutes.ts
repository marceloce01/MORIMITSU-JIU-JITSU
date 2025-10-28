import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";
import { AuthMiddleware } from "../middlewares/authMiddlewares.js";
import { AuthenticatedRequest } from "../utils/types.js";

export const authRouter = Router()

authRouter.post("/login", AuthController.loginUser)

authRouter.get("/profile", AuthMiddleware.authenticate, async (req: AuthenticatedRequest, res)=>{
    return res.status(200).json({message: "Token Válido", userId: req.user?.id})
})

authRouter.post("/request-reset", AuthController.requestPasswordReset)

authRouter.post("/verify-code", AuthController.verifyCode)

authRouter.post("/reset-password", AuthController.resetPassword)

authRouter.post("/request-registration", AuthController.requestRegistration)