import React, { useState, useEffect } from "react";
import {
  Mars,
  Venus,
  Pill,
  Utensils,
  Activity,
  User,
  Mail,
  Scale,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice";
import { putUser, getCurrentUser } from "../apicalls/authCalls.js";
import BackButton from "../components/BackButton.jsx";

function Profile() {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.user.user);

  const [userData, setUserDataState] = useState(null);
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [backupData, setBackupData] = useState({});

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await getCurrentUser();
        setUserDataState(res);
        setFormData({
          userId: res.userName || "",
          name: res.name || "",
          email: res.email || "",
          age: res.age || "",
          gender: res.gender || "",
          weight: res.weight || 0,
          diabetesType: res.diabetesType || "",
          dibetesDuration: res.dibetesDuration || "",
          medications: res.medications || "",
          activityLevel: res.activityLevel || "",
          mealPattern: res.mealPattern || "",
          healthConditions: res.healthConditions || "",
        });
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    }
    fetchUser();
  }, []);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditToggle = () => {
    setBackupData(formData);
    setEditMode(true);
  };

  const handleCancel = () => {
    setFormData(backupData);
    setEditMode(false);
  };

  const handleSave = async () => {
    try {
      const updatedUser = await putUser(formData);
      if (updatedUser) {
        setUserDataState(updatedUser);
        dispatch(setUserData(updatedUser));
        setEditMode(false);
      }
    } catch (err) {
      console.error("Failed to save user:", err);
    }
  };

  const OptionButton = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl border shadow-sm transition-all
        ${active
          ? "bg-blue-600 text-white shadow-md scale-105"
          : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50"}`}
    >
      {children}
    </button>
  );

  if (!userData) return <p className="text-center mt-20">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center py-12 px-4">
      <BackButton />
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-blue-100 transition-all">

        {/* Header with Avatar */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <User className="text-blue-700 rounded-4xl" size={56}/>
              
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-700">{formData.name}</h2>
              <p className="text-gray-600">{formData.email}</p>
            </div>
          </div>
          {!editMode && (
            <button
              onClick={handleEditToggle}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Field Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Field
            label="Name"
            value={formData.name}
            icon={<User size={16} />}
            editable={editMode}
            onChange={(v) => updateField("name", v)}
          />

          <Field
            label="Email"
            value={formData.email}
            icon={<Mail size={16} />}
            editable={editMode}
            onChange={(v) => updateField("email", v)}
          />

          <Field
            label="Age"
            value={formData.age}
            type="number"
            editable={editMode}
            onChange={(v) => updateField("age", v)}
          />

          <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-all">
            <Label title="Gender" icon={<Mars size={16} />} />
            {editMode ? (
              <div className="flex gap-3 mt-2">
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
            ) : (
              <p className="text-gray-700 mt-2">{formData.gender}</p>
            )}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-all">
            <Label title="Weight" icon={<Scale size={16} />} />
            {editMode ? (
              <input
                type="range"
                min="30"
                max="120"
                value={formData.weight}
                onChange={(e) => updateField("weight", e.target.value)}
                className="w-full accent-blue-600"
              />
            ) : (
              <p className="text-gray-700 mt-2">{formData.weight} kg</p>
            )}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-all">
            <Label title="Diabetes Type" icon={<Pill size={16} />} />
            {editMode ? (
              <div className="flex gap-3 mt-2">
                {["Type 1", "Type 2"].map((type) => (
                  <OptionButton
                    key={type}
                    active={formData.diabetesType === type}
                    onClick={() => updateField("diabetesType", type)}
                  >
                    {type}
                  </OptionButton>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 mt-2">{formData.diabetesType}</p>
            )}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-all">
            <Label title="Diagnosis Duration" />
            {editMode ? (
              <div className="flex gap-3 mt-2">
                {["<1 yr", "1–5 yrs", ">5 yrs"].map((d) => (
                  <OptionButton
                    key={d}
                    active={formData.dibetesDuration === d}
                    onClick={() => updateField("dibetesDuration", d)}
                  >
                    {d}
                  </OptionButton>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 mt-2">{formData.dibetesDuration}</p>
            )}
          </div>

          <Field
            label="Medications"
            value={formData.medications}
            editable={editMode}
            onChange={(v) => updateField("medications", v)}
          />

          <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-all">
            <Label title="Activity Level" icon={<Activity size={16} />} />
            {editMode ? (
              <div className="flex gap-3 mt-2">
                {["Low", "Medium", "High"].map((a) => (
                  <OptionButton
                    key={a}
                    active={formData.activityLevel === a}
                    onClick={() => updateField("activityLevel", a)}
                  >
                    {a}
                  </OptionButton>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 mt-2">{formData.activityLevel}</p>
            )}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-all">
            <Label title="Meal Pattern" icon={<Utensils size={16} />} />
            {editMode ? (
              <div className="flex gap-3 mt-2">
                {["3 meals", "3 meals + snacks"].map((m) => (
                  <OptionButton
                    key={m}
                    active={formData.mealPattern === m}
                    onClick={() => updateField("mealPattern", m)}
                  >
                    {m}
                  </OptionButton>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 mt-2">{formData.mealPattern}</p>
            )}
          </div>
        </div>

        {/* Health Conditions Full Width */}
        <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-all mt-6">
          <Label title="Health Conditions" />
          {editMode ? (
            <textarea
              value={formData.healthConditions}
              onChange={(e) => updateField("healthConditions", e.target.value)}
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-wrap mt-2">
              {formData.healthConditions || "None"}
            </p>
          )}
        </div>

        {/* Save/Cancel Buttons */}
        {editMode && (
          <div className="flex justify-end gap-4 mt-8">
            <button
              onClick={handleCancel}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-2xl hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Subcomponent for label
const Label = ({ title, icon }) => (
  <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
    {icon && icon} {title}
  </label>
);

// Reusable text field
const Field = ({ label, value, onChange, editable, type = "text", icon }) => (
  <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-all">
    <Label title={label} icon={icon} />
    {editable ? (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 mt-2"
      />
    ) : (
      <p className="text-gray-700 mt-2">{value || "—"}</p>
    )}
  </div>
);

export default Profile;
