import express from "express"
import {addGlucoseReading, getGlucoseReadings, getglucoseAverages,getGlucoseSummary, getGlucomain, glucoseReport} from "../controllers/glucoseReadings.controllers.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const Router = express.Router();
Router.post('/',authMiddleware, addGlucoseReading)
Router.get("/", authMiddleware, getGlucoseReadings)
Router.get("/main", authMiddleware, getGlucomain)
Router.get("/averages", authMiddleware, getglucoseAverages)
Router.get("/summary", authMiddleware, getGlucoseSummary)
Router.get("/aireport", authMiddleware, glucoseReport)

export default Router;