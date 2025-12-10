import { Router } from "express";
import { UserController } from "../controllers/UserController.js";

export const userRouter = Router()

//Rota que cadastra usuário 
userRouter.post("/register", UserController.registerUser)

userRouter.get("/filter", UserController.filterUsers)

userRouter.get("/", UserController.getAllUsers)
