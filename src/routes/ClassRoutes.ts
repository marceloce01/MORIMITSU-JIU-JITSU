import { Router } from "express"
import { ClassController } from "../controllers/ClassController.js"
import { upload } from "../config/multer.js"
import { uploadInCloud } from "../config/cloudinary.js"
import { AuthMiddleware } from "../middlewares/authMiddlewares.js"

export const classRouter = Router()

classRouter.use(AuthMiddleware.authenticate)

classRouter.post("/create", ClassController.createClass)

classRouter.put("/update/:id", ClassController.updateClass)

classRouter.post("/add-student/:class_id", ClassController.addStudentInClass)

classRouter.delete("/remove-student/:class_id", ClassController.removeStudentInClass)

classRouter.get("/filter", ClassController.filterClasses)

classRouter.get("/", ClassController.findAll)

classRouter.delete("/:id", ClassController.deleteStudent)