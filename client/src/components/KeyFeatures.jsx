import React from "react";
import GlucoseTrackerImage from "../assets/mockups/glucoAdd.png";
import DashboardImage from "../assets/mockups/dashboard.png";
import AIReportImage from "../assets/mockups/AIReport.png";


const FeatureCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:translate-y-[-2px] w-full border border-gray-100">
    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-3">
      {title}
    </h3>
    {children}
  </div>
);


const KeyFeatures = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Key Features
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Feature 1: Effortless Glucose Tracking - USING IMAGE */}
        <FeatureCard title="Effortless Glucose Tracking">
          <div className="w-full h-80 relative overflow-hidden rounded-xl shadow-lg border border-gray-100">
            <img
              src={GlucoseTrackerImage}
              alt="Glucose Reading Entry Form"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="mt-4 space-y-3">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-blue-700">Quick Entry:</span>{" "}
              Log readings in seconds using a clean, simple mobile-first
              interface.
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-blue-700">
                Contextual Notes:
              </span>{" "}
              Add meal details and notes for rich analysis later.
            </p>
          </div>
        </FeatureCard>

        {/* Feature 2: Comprehensive Dashboard - USING IMAGE */}
        <FeatureCard title="Comprehensive Dashboard">
          <div className="w-full h-80 relative overflow-hidden rounded-xl shadow-lg border border-gray-100">
            <img
              src={DashboardImage}
              alt="Diabetes Dashboard Overview"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="mt-4 space-y-3">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-green-700">
                Visualize Trends:
              </span>{" "}
              See your glucose history, distribution, and averages at a glance.
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-green-700">Key Metrics:</span>{" "}
              Instantly view counts of Low, Normal, and High readings for the
              period.
            </p>
          </div>
        </FeatureCard>

        {/* Feature 3: Smart AI Guidance - USING IMAGE */}
        <FeatureCard title="Smart AI Guidance">
          <div className="w-full h-80 relative overflow-hidden rounded-xl shadow-lg border border-gray-100">
            <img
              src={AIReportImage}
              alt="GlucoAI Smart Glucose Report"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-3">
            <h4 className="text-base font-bold text-gray-800">
              GlucoAI Summary
            </h4>
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-blue-700">
                Actionable Insights:
              </span>{" "}
              Get personalized recommendations based on your data patterns.
            </p>
          </div>
        </FeatureCard>
      </div>
    </section>
  );
};

export default KeyFeatures;
