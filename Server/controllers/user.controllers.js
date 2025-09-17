import User from "../models/user.model.js";

// Create a Profile

export const createProfile = async (req, res) => {
    try {
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
            return res
                .status(400)
                .json({ message: "Please fill the required fields" });
        }
        
        const user = await User.findById(req.userId).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });
        Object.assign(user, {
            age,
            gender,
            weight,
            diabetesType,
            dibetesDuration,
            medications,
            activityLevel,
            mealPattern,
            healthConditions,
        });

        await user.save();

        res.status(200).json({ message: "Profile saved", user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};

// Verify Login
export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};

// edit,update Profile

export const editOrUpdateProfile = async (req, res) => {
    try {
        const data = req.body;
        const user = await User.findById(req.userId).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });
        Object.assign(user, data);
        res.status(201).json({ message: "updated profile", user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};
