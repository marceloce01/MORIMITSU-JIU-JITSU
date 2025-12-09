import { Router } from "express"
import { StudentController } from "../controllers/StudentController.js"
import { GraduationController } from "../controllers/GraduationController.js"
import { upload } from "../config/multer.js"
import { uploadInCloud } from "../config/cloudinary.js"

export const studentRouter = Router()

studentRouter.post("/register", upload.single('image_student_url'), (req, res, next) => {
    if(!req.file){
        req.body.image_student_url = undefined
        return next()
    }

   req.body.image_student_url = uploadInCloud(req.file.path)
   next()

}, StudentController.registerStudent)
  
studentRouter.put("/update/:id", upload.single('image_student_url'), (req, res, next) => {
    if(!req.file){
        req.body.image_student_url = undefined
        return next()
    }

   req.body.image_student_url = uploadInCloud(req.file.path)
   next()

}, StudentController.updateStudent)

studentRouter.get("/:id", StudentController.getStudent)

studentRouter.get("/", StudentController.getAllStudents)

studentRouter.delete("/:id", StudentController.deleteStudent)

studentRouter.patch("/graduate/:id", GraduationController.graduateStudent)

