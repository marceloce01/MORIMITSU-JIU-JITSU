import { Router } from "express"
import { ClassController } from "../controllers/ClassController.js"
import { upload } from "../config/multer.js"
import { uploadInCloud } from "../config/cloudinary.js"
import { AuthMiddleware } from "../middlewares/authMiddlewares.js"

export const classRouter = Router()

classRouter.use(AuthMiddleware.authenticate)

classRouter.post("/create", upload.single('image_class_url'), ClassController.createClass)

classRouter.post("/add-student/:class_id", ClassController.addStudentInClass)

classRouter.get("/filter", ClassController.filterClasses)

classRouter.get("/", ClassController.findAll)

classRouter.delete("/:id", ClassController.deleteStudent)