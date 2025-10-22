import React from 'react';
import dashboard from "../assets/mockups/dashboard.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6 md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug">
            Track Your Glucose <br /> Master Your Health
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            Your trusted partner in diabetes management. Monitor, analyze, and share health insights with doctors effortlessly using smart AI.
          </p>
          <button className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transform transition duration-300">
            Get Started Free
          </button>
        </div>

        {/* Right Image/Mockup */}
        <div className="flex justify-center md:w-1/2 relative mb-8 md:mb-0">
          {/* Background blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/4 left-3/4 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>

          {/* Mobile mockup */}
          <div className="relative z-10 w-48 sm:w-56 md:w-72 lg:w-80 h-auto max-h-[60vh] bg-gray-900 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-gray-800 flex items-center justify-center transform hover:scale-105 transition duration-500">
            {/* Top notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-3 sm:h-4 md:h-5 bg-gray-800 rounded-b-xl z-20"></div>
            {/* Dashboard image */}
            <img 
              src={dashboard} 
              alt="dashboard" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
