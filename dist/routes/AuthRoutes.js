import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";
import { AuthMiddleware } from "../middlewares/authMiddlewares.js";
export const authRouter = Router();
authRouter.post("/login", AuthController.loginUser);
authRouter.get("/profile", AuthMiddleware.authenticate, async (req, res) => {
    return res.status(200).json({ message: "Token Válido", userId: req.user?.id });
});
authRouter.post("/request-reset", AuthController.requestPasswordReset);
authRouter.post("/reset-password/:token", AuthController.resetPassword);
