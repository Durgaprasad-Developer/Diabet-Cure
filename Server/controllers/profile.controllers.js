import User from '../models/user.model.js';

export const createOrUpdateProfile = async(req, res) => {

    
    try{
    const { age, gender, weight, diabetesType, dibetesDuration, medications, activityLevel, mealPattern, healthConditions } = req.body;

    if(!age || !gender || !weight || !diabetesType || !dibetesDuration || !activityLevel || !mealPattern){
        return res.status(400).json({ message: "Please fill the required fields" });
    }
    const user = await User.findById(req.userId);
    if(!user) return res.status(404).json({message: "User not found"})
    Object.assign(user, {age, gender, weight, diabetesType, dibetesDuration, medications, activityLevel, mealPattern, healthConditions})

    await user.save()

    res.status(200).json({message: "Profile saved", user});
}catch(err){
    console.log(err);
    res.status(500).json({message: "Server error"})
}
}

