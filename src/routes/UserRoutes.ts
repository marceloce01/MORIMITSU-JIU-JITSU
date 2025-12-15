import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { AuthMiddleware } from "../middlewares/authMiddlewares.js";

export const userRouter = Router()

userRouter.use(AuthMiddleware.authenticate)

//Rota que cadastra usuário 
userRouter.post("/register", UserController.registerUser)

userRouter.get("/filter", UserController.filterUsers)

userRouter.get("/", UserController.getAllUsers)

userRouter.get("/students/:id", UserController.teacherStudents)

userRouter.get("/classes/:id", UserController.teacherClasses)