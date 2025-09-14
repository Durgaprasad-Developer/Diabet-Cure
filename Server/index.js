import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Authentication Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes)

// Connect to Database
connectDB();

app.get('/', (req, res) => {
    res.send("Server is running")
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 