import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { AuthMiddleware } from "../middlewares/authMiddlewares";
import { UserController } from "../controllers/UserController";

export const authRouter = Router()

authRouter.post("/loginUser", AuthController.loginUser)

authRouter.get("/:id", AuthMiddleware.authenticate, UserController.getUserById )
