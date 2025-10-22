import mongoose from "mongoose";

const GlucosereadingSchema = await mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    value: {
        type: Number,
        required: true,
    },
    mealContext: {
        type: String,
        enum: ["preMeal", "postMeal"],
        required: true
    },
    mealTag: {
        type: String,
        enum: ["fasting", "breakfast", "lunch", "dinner", "bedtime"],
        required: true
    },
    notes: {
        type: String,
    }
}, { timestamps: true });

const GlucoseReadings = mongoose.model("GlucoseReading", GlucosereadingSchema)
export default GlucoseReadings