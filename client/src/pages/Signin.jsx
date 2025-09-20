import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Lock } from "lucide-react";
import { signIn } from "../apicalls/authCalls";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    try{
    e.preventDefault();
    const data = await signIn({userName,password})
    console.log("signIn data", data)

    if(data){
    dispatch(setUserData(data))
    navigate("/")
    }
    setUserName("");
    setPassword("");
    }catch(err){
      console.error(err)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-100">
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-cyan-600 text-white p-10 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-3">DiabetiCures</h1>
            <p className="text-blue-100 max-w-sm leading-relaxed">
              Your trusted partner in diabetes management. Monitor, analyze, and
              share your health insights with doctors effortlessly.
            </p>
          </motion.div>

          {/* Subtle overlay */}
          {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" /> */}
        </div>

        {/* Card */}
        <div className="w-full max-w-md flex flex-col gap-5 border-default p-8 rounded-3xl shadow-lg bg-white">
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-gray-800 text-center"
          >
            Sign In
          </motion.h2>
          <p className="text-gray-500 text-center mb-8 text-sm">
            Login and track your glucose and get your report
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Username */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                User Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="John Doe"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
                />
              </div>
            </div>

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Sign In
            </motion.button>

            {/* Forgot Password */}
            <Link
              to="/forgot-password"
              className="text-sm text-center text-secondary hover:text-primary underline"
            >
              Forgot Password?
            </Link>

            {/* Sign Up */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link
                to="/signup"
                className="text-cyan-600 font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
