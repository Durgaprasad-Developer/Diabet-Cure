import express from "express"
import { createOrUpdateProfile } from "../controllers/profile.controllers.js"
import authMiddleware from "../middlewares/authMiddleware.js";


const route = express.Router();
route.post("/profile", authMiddleware, createOrUpdateProfile);
route.get("/test", (req, res) => {
  res.send("Profile routes working ✅");
});


export default route;