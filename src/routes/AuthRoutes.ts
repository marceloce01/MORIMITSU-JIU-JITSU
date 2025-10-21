import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";
import { AuthMiddleware } from "../middlewares/authMiddlewares.js";
import { AuthenticatedRequest } from "../utils/types.js";

export const authRouter = Router()

authRouter.post("/loginUser", AuthController.loginUser)

authRouter.get("/check-token", AuthMiddleware.authenticate, async (req: AuthenticatedRequest, res)=>{
    return res.status(200).json({message: "Token Válido", userId: req.user?.id})
})
