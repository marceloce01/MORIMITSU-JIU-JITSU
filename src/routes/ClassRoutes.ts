import { Router } from "express"
import { ClassController } from "../controllers/ClassController.js"
import { upload } from "../config/multer.js"
import { uploadInCloud } from "../config/cloudinary.js"

export const classRouter = Router()

classRouter.post("/create", upload.single('image_class_url'), (req, res, next) => {
    if(!req.file){
        req.body.image_class_url = undefined
        return next()
    }

   req.body.image_class_url = uploadInCloud(req.file.path)
   next()

}, ClassController.createClass)