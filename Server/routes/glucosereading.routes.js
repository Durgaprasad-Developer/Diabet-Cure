import express from "express"
import {addGlucoseReading, getGlucoseReadings, getglucoseAverages,getGlucoseSummary} from "../controllers/glucoseReadings.controllers.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const Router = express.Router();
Router.post('/',authMiddleware, addGlucoseReading)
Router.get("/", authMiddleware, getGlucoseReadings)
Router.get("/averages", authMiddleware, getglucoseAverages)
Router.get("/summary", authMiddleware, getGlucoseSummary)

export default Router;