import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { AuthMiddleware } from "../middlewares/authMiddlewares.js";
import { upload } from "../config/multer.js";
import { uploadInCloud } from "../config/cloudinary.js";

export const userRouter = Router()

userRouter.use(AuthMiddleware.authenticate)

userRouter.post("/register", upload.single('image_user_url'), (req, res, next) => {
    if(!req.file){
        req.body.image_user_url = undefined
        return next()
    }

   req.body.image_user_url = uploadInCloud(req.file.path)
   next()

}, UserController.registerUser)

userRouter.put("/update/:id", upload.single('image_user_url'), (req, res, next) => {
    if(!req.file){
        req.body.image_user_url = undefined
        return next()
    }

   req.body.image_user_url = uploadInCloud(req.file.path)
   next()

}, UserController.updateUser)

userRouter.get("/filter", UserController.filterUsers)

userRouter.get("/", UserController.getAllUsers)

userRouter.get("/students/:id", UserController.teacherStudents)

userRouter.get("/classes/:id", UserController.teacherClasses)

userRouter.get("/profile/:email", UserController.teacherProfile)