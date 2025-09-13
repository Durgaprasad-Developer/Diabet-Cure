import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
      {/* Card */}
      <div className="w-full max-w-md flex flex-col gap-6 border-default p-8 rounded-3xl shadow-lg bg-white">
        <h2 className="text-primary text-3xl font-semibold text-center">Sign Up</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-default bg-background-soft py-2.5 px-4 rounded-2xl text-secondary focus:outline-none focus:ring-2 focus:ring-primary-light"
          />

          {/* Username */}
          <input
            type="text"
            placeholder="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border-default bg-background-soft py-2.5 px-4 rounded-2xl text-secondary focus:outline-none focus:ring-2 focus:ring-primary-light"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-default bg-background-soft py-2.5 px-4 rounded-2xl text-secondary focus:outline-none focus:ring-2 focus:ring-primary-light"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-default bg-background-soft py-2.5 px-4 rounded-2xl text-secondary focus:outline-none focus:ring-2 focus:ring-primary-light"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-2.5 px-4 rounded-2xl"
          >
            Create Account
          </button>

          {/* Switch to Sign In */}
          <p className="text-center text-sm text-secondary">
            Already have an account?{" "}
            <Link className="text-primary font-medium underline" to="/signin">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
