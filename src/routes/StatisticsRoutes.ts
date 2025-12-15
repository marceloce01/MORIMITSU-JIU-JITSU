import { Router } from "express"
import { StatisticController} from "../controllers/StatisticController.js"
import { AuthMiddleware } from "../middlewares/authMiddlewares.js"

export const statisticsRouter = Router()

statisticsRouter.use(AuthMiddleware.authenticate)

statisticsRouter.get("/summary", StatisticController.summary)

statisticsRouter.get("/week-graphic", StatisticController.weekGraphic)

statisticsRouter.get("/month-graphic", StatisticController.monthGraphic)