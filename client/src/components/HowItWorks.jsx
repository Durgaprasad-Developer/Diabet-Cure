import React from 'react';

const Step = ({ number, title }) => (
  <div className="flex flex-col items-center space-y-3">
    <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white text-2xl font-bold rounded-full shadow-lg">
      {number}
    </div>
    <p className="text-lg font-medium text-gray-700">{title}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
      
      {/* Steps Layout */}
      <div className="flex justify-center items-center space-x-4 sm:space-x-8 md:space-x-16 flex-wrap">
        <Step number="1" title="Track Readings" />
        
        {/* Arrow Connector */}
        <div className="w-10 sm:w-16 md:w-20 h-0.5 bg-gray-300 transform -translate-y-4 hidden sm:block"></div>
        
        <Step number="2" title="View Insights" />
        
        {/* Arrow Connector */}
        <div className="w-10 sm:w-16 md:w-20 h-0.5 bg-gray-300 transform -translate-y-4 hidden sm:block"></div>

        <Step number="3" title="Get AI Guidance" />
      </div>
    </section>
  );
};

export default HowItWorks;