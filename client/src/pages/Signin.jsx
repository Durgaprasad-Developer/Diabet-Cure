import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">

      {/* Card */}
      <div className="w-full max-w-md flex flex-col gap-5 border-default p-8 rounded-3xl shadow-lg bg-white">
        <h2 className="text-primary text-3xl font-semibold text-center">Sign In</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border-default bg-background-soft py-2.5 px-4 rounded-2xl text-secondary focus:outline-none focus:ring-2 focus:ring-primary-light"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-default bg-background-soft py-2.5 px-4 rounded-2xl text-secondary focus:outline-none focus:ring-2 focus:ring-primary-light"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-2.5 px-4 rounded-2xl"
          >
            Login
          </button>

          {/* Forgot Password */}
          <Link
            to="/forgot-password"
            className="text-sm text-center text-secondary hover:text-primary underline"
          >
            Forgot Password?
          </Link>

          {/* Sign Up */}
          <p className="text-center text-sm text-secondary">
            Don’t have an account?{" "}
            <Link className="text-primary font-medium underline" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
