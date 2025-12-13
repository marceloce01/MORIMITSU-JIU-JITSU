import { Router } from "express";
import { BeltController } from "../controllers/BeltController.js";
import { AuthMiddleware } from "../middlewares/authMiddlewares.js";

export const beltRouter = Router()

beltRouter.use(AuthMiddleware.authenticate)

beltRouter.post("/create", BeltController.createBeltConfig)

beltRouter.put("/update/:belt", BeltController.updateBeltConfig)

beltRouter.get("/filter/", BeltController.filterBelt)

beltRouter.get("/belts", BeltController.getAll)