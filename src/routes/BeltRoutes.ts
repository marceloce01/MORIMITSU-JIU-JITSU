import { Router } from "express";
import { BeltController } from "../controllers/BeltController.js";

export const beltRouter = Router()

beltRouter.post("/create", BeltController.createBeltConfig)