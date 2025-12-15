import { Router } from "express"
import { ClassController } from "../controllers/ClassController.js"
import { upload } from "../config/multer.js"
import { uploadInCloud } from "../config/cloudinary.js"
import { AuthMiddleware } from "../middlewares/authMiddlewares.js"

export const classRouter = Router()

classRouter.use(AuthMiddleware.authenticate)

classRouter.post("/create", upload.single('image_class_url'), upload.single('image_class_url'), (req, res, next) => {
    if(!req.file){
        req.body.image_class_url = null
        return next()
    }

   req.body.image_class_url = uploadInCloud(req.file.path)
   next()

}, ClassController.createClass)

classRouter.put("/update/:id", upload.single('image_class_url'), (req, res, next) => {
    if(!req.file){
        req.body.image_class_url = null
        return next()
    }

   req.body.image_class_url = uploadInCloud(req.file.path)
   next()

},ClassController.updateClass)

classRouter.post("/add-student/:class_id", ClassController.addStudentInClass)

classRouter.get("/filter", ClassController.filterClasses)

classRouter.get("/", ClassController.findAll)

classRouter.delete("/:id", ClassController.deleteStudent)