import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-white py-20 text-center">
      <p className="text-2xl font-semibold text-gray-800 mb-8">
        Take control of your diabetes journey.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-50 transition duration-300">
          Learn More
        </button>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-lg">
          Sign Up Free
        </button>
      </div>
    </section>
  );
};

export default CallToAction;