import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Forgotpassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle OTP send logic
    console.log("OTP sent to:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white shadow-xl rounded-3xl border border-gray-100 p-8"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-6"
        >
          Forgot Password
        </motion.h2>

        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl py-3 pl-10 pr-4 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            Send OTP
          </motion.button>

          {/* Switch */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Back to login?{" "}
            <Link
              to="/signin"
              className="text-cyan-600 font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Forgotpassword;
