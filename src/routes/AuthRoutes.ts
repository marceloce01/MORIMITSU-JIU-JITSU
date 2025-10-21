import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { AuthMiddleware } from "../middlewares/authMiddlewares";
import { AuthenticatedRequest } from "../utils/types";

export const authRouter = Router()

authRouter.post("/loginUser", AuthController.loginUser)

authRouter.get("/check-token", AuthMiddleware.authenticate, async (req: AuthenticatedRequest, res)=>{
    return res.status(200).json({message: "Token Válido", userId: req.user?.id})
})
