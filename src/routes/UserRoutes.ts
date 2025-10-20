import { Router} from "express";
import { UserController } from "../controllers/UserController";

export const userRouter = Router()

//Rota que cadastra usuário como instrutor
userRouter.post("/registerUserTeacher", UserController.registerUserTeacher)

//Rota que cadastra usuário como administrador
userRouter.post("/registerUserAdmin", UserController.registerUserAdmin)