import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Mars, Venus, Pill, Utensils, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { setUserData } from "../redux/userSlice";
import { profileSetup } from "../apicalls/authCalls";

function Profile() {
  const [step, setStep] = useState(1);
  const containerRef = useRef(null);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const [formData, setFormData] = useState({
    age: "",
    gender: "",
    weight: "",
    diabetesType: "",
    dibetesDuration: "",
    medications: "",
    activityLevel: "",
    mealPattern: "",
  });

  const handleSubmit = async()=>{

    const user = await profileSetup(formData);
    console.log(user)
    if(user){
    dispatch(setUserData(user))
    navigate("/dashboard")
    }
  }

  // Animate container on step change
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }
    );
  }, [step]);


  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const OptionButton = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border shadow-sm transition-all w-full
        ${active ? "bg-blue-600 text-white" : "bg-white text-gray-700 border-gray-200"}`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div
        ref={containerRef}
        className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8"
      >
        {/* Step Indicators */}
        <div className="flex justify-center mb-6 space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                step === i ? "bg-blue-600 scale-125" : "bg-gray-300"
              } transition-all`}
            />
          ))}
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Basic Information
              </h2>

              {/* Age */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => updateField("age", e.target.value)}
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <OptionButton
                    active={formData.gender === "Male"}
                    onClick={() => updateField("gender", "Male")}
                  >
                    <Mars size={18} /> Male
                  </OptionButton>
                  <OptionButton
                    active={formData.gender === "Female"}
                    onClick={() => updateField("gender", "Female")}
                  >
                    <Venus size={18} /> Female
                  </OptionButton>
                </div>
              </div>

              {/* Weight Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Weight: {formData.weight} kg
                </label>
                <input
                  type="range"
                  min="30"
                  max="120"
                  value={formData.weight}
                  onChange={(e) => updateField("weight", e.target.value)}
                  className="w-full accent-blue-600"
                />
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-blue-600 text-white py-3 rounded-full text-sm font-medium shadow"
              >
                Next
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Diabetes Details
              </h2>

              {/* Diabetes Type */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Diabetes Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Type 1", "Type 2"].map((type) => (
                    <OptionButton
                      key={type}
                      active={formData.diabetesType === type}
                      onClick={() => updateField("diabetesType", type)}
                    >
                      <Pill size={18} /> {type}
                    </OptionButton>
                  ))}
                </div>
              </div>

              {/* Diagnosis Duration */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Diagnosis Duration
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["<1 yr", "1–5 yrs"].map((d) => (
                    <OptionButton
                      key={d}
                      active={formData.dibetesDuration === d}
                      onClick={() => updateField("dibetesDuration", d)}
                    >
                      {d}
                    </OptionButton>
                  ))}
                </div>
              </div>

              {/* Medications */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Medications
                </label>
                <input
                  type="text"
                  placeholder="Enter medications"
                  value={formData.medications}
                  onChange={(e) => updateField("medications", e.target.value)}
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrev}
                  className="px-6 py-2 rounded-full border text-gray-600"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2 rounded-full bg-blue-600 text-white shadow"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Lifestyle Details
              </h2>

              {/* Activity Level */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Activity Level
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Low", "Medium"].map((a) => (
                    <OptionButton
                      key={a}
                      active={formData.activityLevel === a}
                      onClick={() => updateField("activityLevel", a)}
                    >
                      <Activity size={18} /> {a}
                    </OptionButton>
                  ))}
                </div>
              </div>

              {/* Meal Pattern */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Usual Meal Pattern
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["3 meals", "3 meals + snacks"].map((m) => (
                    <OptionButton
                      key={m}
                      active={formData.mealPattern === m}
                      onClick={() => updateField("mealPattern", m)}
                    >
                      <Utensils size={18} /> {m}
                    </OptionButton>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrev}
                  className="px-6 py-2 rounded-full border text-gray-600"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 rounded-full bg-blue-600 text-white shadow"
                >
                  Done
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Profile;
