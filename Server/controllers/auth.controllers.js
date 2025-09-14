import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import genToken from "../config/token.js";

export const signUp = async (req, res) => {
    const { name, userName, email, password } = req.body;
    if (!name || !userName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const existingUserName = await User.findOne({ userName });
    if (existingUserName) {
        return res.status(400).json({ message: "Username already taken" });
    }

    if (password.length < 6) {
        return res
            .status(400)
            .json({ message: "Password must be at least 6 characters" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(salt, hashedPassword);

    const newUser = await User.create({
        name,
        userName,
        email,
        password: hashedPassword,
    });

    const token = await genToken(newUser._id);

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    console.log(token);

    res.status(201).json(newUser);
};

export const profile = async (req, res) => {
    const {
        age,
        gender,
        weight,
        diabetesType,
        dibetesDuration,
        medications,
        activityLevel,
        mealPattern,
        healthConditions,
    } = req.body;
    if (
        !age ||
        !gender ||
        !weight ||
        !diabetesType ||
        !dibetesDuration ||
        !activityLevel ||
        !mealPattern
    ) {
        return res.status(400).json({ message: "Please fill the required fields" });
    }
};

export const signIn = async (req, res) => {
    const { userName, password } = req.body;
    console.log(req.body);

    if (!password || !userName) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ userName });
    console.log(user);
    if (!user) {
        return res.status(400).json({ message: "Invalid UserName" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid Password" });
    }

    const token = await genToken(user._id);
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    console.log(token);

    res.status(200).json({ message: "SignIn Successful", token });
};
