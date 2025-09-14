import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    weight: {
        type: Number,
    },
    diabetesType: {
        type: String,
    },
    dibetesDuration: {
        type: Number,
    },
    medications: {
        type: String,
    },
    activityLevel: {
        type: String,
    },
    mealPattern: {
        type: String,
    },
    healthConditions: {
        type: String,
    }
})

const User = mongoose.model("User", userSchema)

export default User;