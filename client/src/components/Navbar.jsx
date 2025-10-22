import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* Using an SVG for the icon to match design better */}
          <svg className="w-7 h-7 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l2-2 2 2v13M9 19H7a2 2 0 01-2-2v-4a2 2 0 012-2h2m0 0h6m-6 0h6m6 0h2a2 2 0 012 2v4a2 2 0 01-2 2h-2m-3-11v11"></path>
          </svg>
          <span className="text-xl font-bold text-gray-800">DiabetiCures</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition duration-150 font-medium">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition duration-150 font-medium">Pricing</a>
          <a href="#signin" className="text-gray-600 hover:text-blue-600 transition duration-150 font-medium">Sign In</a>
          <a href="#signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 shadow-md">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;