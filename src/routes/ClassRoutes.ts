import { Router } from "express"
import { ClassController } from "../controllers/ClassController.js"

export const classRouter = Router()

classRouter.post("/create", ClassController.createClass)