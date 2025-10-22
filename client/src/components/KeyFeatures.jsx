import React from 'react';

// Reusable FeatureCard component
const FeatureCard = ({ title, subtitle, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl w-full">
    <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-blue-600 font-medium mb-4">{subtitle}</p>
    {/* Content Area for mockups */}
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 h-64 flex flex-col justify-center items-center text-sm text-gray-500 overflow-hidden">
      {children}
    </div>
  </div>
);

const KeyFeatures = () => {
  return (
    <section id="features" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center md:text-left">Key Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Feature 1: Effortless Glucose Tracking */}
        <FeatureCard title="Effortless Glucose Tracking" subtitle="Simple Data Entry">
          <div className="w-full p-4 flex flex-col justify-between h-full">
             <div className="mb-4">
                 <label className="block text-xs text-gray-500 font-medium">Glucose Reading (mg/dL)</label>
                 <input type="text" value="120" readOnly className="w-full p-2 border border-gray-300 rounded-md mt-1 text-gray-800 font-semibold" />
             </div>
             <div className="mb-4">
                 <label className="block text-xs text-gray-500 font-medium mb-1">Meal Context</label>
                 <div className="flex space-x-2">
                     <button className="flex-1 py-1 px-2 text-xs rounded-md border border-blue-500 text-blue-600">Pre-Meal</button>
                     <button className="flex-1 py-1 px-2 text-xs rounded-md bg-blue-600 text-white">Post-Meal</button>
                 </div>
             </div>
             <div className="mb-4">
                 <label className="block text-xs text-gray-500 font-medium">Meal Type</label>
                 <select className="w-full p-2 border border-gray-300 rounded-md mt-1 text-gray-800 text-sm">
                     <option>Breakfast</option>
                 </select>
             </div>
             <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition">
                Add Reading
             </button>
          </div>
        </FeatureCard>

        {/* Feature 2: Comprehensive Dashboard */}
        <FeatureCard title="Comprehensive Dashboard" subtitle="Visualizing Your Progress">
          <div className="w-full p-4 flex flex-col justify-between h-full">
            <div className="grid grid-cols-3 gap-2 text-center mb-4">
              <div className="bg-blue-100 p-2 rounded-md">
                <p className="text-lg font-bold text-blue-700">25</p>
                <p className="text-xs text-blue-600">Low</p>
              </div>
              <div className="bg-green-100 p-2 rounded-md">
                <p className="text-lg font-bold text-green-700">31</p>
                <p className="text-xs text-green-600">Normal</p>
              </div>
              <div className="bg-red-100 p-2 rounded-md">
                <p className="text-lg font-bold text-red-700">24</p>
                <p className="text-xs text-red-600">High</p>
              </div>
            </div>
            <div className="h-24 bg-white border border-gray-200 rounded-lg p-2 mb-4 flex items-center justify-center">
              <p className="text-xs text-gray-500">Glucose Trend Chart Placeholder</p>
            </div>
            <div className="h-16 bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-center">
              <p className="text-xs text-gray-500">Distribution Chart Placeholder</p>
            </div>
          </div>
        </FeatureCard>

        {/* Feature 3: Smart AI Guidance */}
        <FeatureCard title="Smart AI Guidance" subtitle="Personalized Health Reports">
          <div className="w-full p-4 flex flex-col justify-between h-full text-left">
            <h4 className="text-base font-bold text-gray-800 mb-2">GlucoAI Smart Glucose Report</h4>
            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar"> {/* Added custom-scrollbar for visual effect */}
              <p className="text-xs mb-2 text-gray-600 leading-tight">
                **Observation:** Glucose variability has increased over the last 7 days, primarily due to inconsistent evening meals. Your average post-meal readings have shown a slight upward trend.
              </p>
              <p className="text-xs mb-2 text-gray-600 leading-tight">
                **Recommendation:** Consider adjusting your evening meal composition, focusing on reducing refined carbohydrates by 15-20%. Incorporate a short 15-minute walk after dinner.
              </p>
              <p className="text-xs text-gray-600 leading-tight">
                **Insight:** Your current activity level is 'Medium'. Increasing it to 'High' could significantly improve glucose control. Discuss this with your doctor.
              </p>
            </div>
            <button className="mt-4 text-sm text-blue-600 font-semibold self-start hover:underline">
                View Full AI Analysis →
            </button>
          </div>
        </FeatureCard>
      </div>
    </section>
  );
};

export default KeyFeatures;