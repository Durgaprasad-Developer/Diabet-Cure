import React from "react";
import KeyFeatures from "./KeyFeatures";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-blue-600">DiabetiCures</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 items-center">
          <a
            href="#features"
            className="text-gray-600 hover:text-blue-600 transition duration-150 font-medium hidden sm:block cursor-pointer"
          >
            Features
          </a>
          <a
            onClick={() => navigate("/signin")}
            className="text-gray-600 hover:text-blue-600 transition duration-150 font-medium hidden sm:block cursor-pointer"
          >
            Sign In
          </a>
          <a
            onClick={() => navigate("/signup")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 shadow-md cursor-pointer"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
