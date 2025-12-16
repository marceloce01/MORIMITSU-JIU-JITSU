import { Router } from "express";
import { PresenceController } from "../controllers/PresenceController.js";
import { AuthMiddleware } from "../middlewares/authMiddlewares.js";

export const presenceRouter = Router()

presenceRouter.use(AuthMiddleware.authenticate)

presenceRouter.post("/add/:classroom_id", PresenceController.presence)

presenceRouter.put("/update/:classroom_id", PresenceController.updatePresence)
