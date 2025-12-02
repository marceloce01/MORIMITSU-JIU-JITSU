import { Router } from "express";
import { BeltController } from "../controllers/BeltController.ts";

export const beltRouter = Router()

beltRouter.post("/create", BeltController.createBeltConfig)