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
    const {
      name,
      email,
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

    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update only allowed fields
    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (age !== undefined) user.age = age;
    if (gender !== undefined) user.gender = gender;
    if (weight !== undefined) user.weight = weight;
    if (diabetesType !== undefined) user.diabetesType = diabetesType;
    if (dibetesDuration !== undefined) user.dibetesDuration = dibetesDuration;
    if (medications !== undefined) user.medications = medications;
    if (activityLevel !== undefined) user.activityLevel = activityLevel;
    if (mealPattern !== undefined) user.mealPattern = mealPattern;
    if (healthConditions !== undefined) user.healthConditions = healthConditions;

    await user.save();

    res.status(200).json({ message: "Profile updated", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", });
  }
};


