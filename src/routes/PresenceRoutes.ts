import { Router } from "express";
import { PresenceController } from "../controllers/PresenceController.js";
import { AuthMiddleware } from "../middlewares/authMiddlewares.js";

export const presenceRouter = Router()

presenceRouter.use(AuthMiddleware.authenticate)

presenceRouter.post("/add/:clasroom_id", PresenceController.presence)
