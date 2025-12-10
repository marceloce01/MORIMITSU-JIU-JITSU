import { Router } from "express"
import { ClassroomController } from "../controllers/ClassroomController.js"
import { AuthMiddleware } from "../middlewares/authMiddlewares.js"

export const classroomRouter = Router()

classroomRouter.use(AuthMiddleware.authenticate)

classroomRouter.post("/:class_id", ClassroomController.createClassroom)