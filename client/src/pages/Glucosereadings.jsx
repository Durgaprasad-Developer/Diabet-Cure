import React, { useState } from "react";
import { addGlucose } from "../apicalls/glucoCalls";
import { useNavigate } from "react-router-dom";
import { fetchReport } from "../redux/reportSlice";
import { useDispatch } from "react-redux";

function Glucosereadings() {
  const [value, setValue] = useState("");
  const [mealContext, setMealContext] = useState("");
  const [mealTag, setMealTag] = useState("");
  const [notes, setNotes] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newReading = {
      value,
      mealContext,
      mealTag,
      notes,
    };
    const data = await addGlucose(newReading)
    console.log(data);
    if(data){
      console.log("✅ Submitted Glucose Reading:", newReading);
    }


    // Reset fields
    setValue("");
    setMealContext("");
    setMealTag("");
    setNotes("");

    // Show success
    setSuccess(true);
    dispatch(fetchReport())
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <div className=" bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto">
      <button
          type="button"
          onClick={() => navigate("/")} 
          className="absolute top-4 left-4 text-blue-500 font-bold flex items-center gap-1 hover:text-blue-700"
        >
          ← Back
        </button>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Glucose Reading */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Glucose Reading (mg/dL)
          </label>
          <input
            required
            type="number"
            placeholder="Enter your glucose reading"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Meal Context */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meal Context
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              className={`flex-1 px-4 py-2 rounded-xl font-medium transition transform hover:scale-105 ${
                mealContext === "preMeal"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setMealContext("preMeal")}
            >
              Pre-Meal
            </button>
            <button
              type="button"
              className={`flex-1 px-4 py-2 rounded-xl font-medium transition transform hover:scale-105 ${
                mealContext === "postMeal"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setMealContext("postMeal")}
            >
              Post-Meal
            </button>
          </div>
        </div>

        {/* Meal Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meal Type
          </label>
          <select
            value={mealTag}
            onChange={(e) => setMealTag(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="" disabled>
              Select meal type
            </option>
            <option value="fasting">Fasting</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="bedtime">Bedtime</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes
          </label>
          <input
            type="text"
            placeholder="Optional notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          {/* <input type="file" accept="audio/*"><button type="button" onClick={startListening} className={`px-3 py-2 rounded-full border ${listening? "bg-red-500 text-white":"bg-gray-100 text-gray-700"}`}>voice</button></input> */}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transform transition hover:scale-105"
        >
          Add Reading
        </button>

        {/* Success Message */}
        {success && (
          <p className="text-green-600 text-center font-medium">
            ✅ Reading added successfully!
          </p>
        )}
      </form>
    </div>
    </div>
  );
}

export default Glucosereadings;
