import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv"
dotenv.config();

const ai = new GoogleGenAI({
    apikey: process.env.GEMINI_API_KEY,
})

export default ai