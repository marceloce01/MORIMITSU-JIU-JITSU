import { Router } from "express"
import { StudentController } from "../controllers/StudentController.js"

export const studentRouter = Router()

studentRouter.post("/register", StudentController.registerStudent)

studentRouter.put("/update/:id", StudentController.updateStudent)

studentRouter.get("/:id", StudentController.getStudent)

studentRouter.get("/", StudentController.getAllStudents)

studentRouter.delete("/:id", StudentController.deleteStudent)