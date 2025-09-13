import express from "express"
import { createOrUpdateProfile } from "../controllers/profile.controllers.js"
import authMiddleware from "../middlewares/authMiddleware.js";


const route = express.Router();
route.post("/profile", authMiddleware, createOrUpdateProfile);


export default route;