import React, { useEffect, useRef } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";
import { motion } from "framer-motion";
import gsap from "gsap";
import useGlucoData from "../hooks/useGlucoData";

const COLORS = ["#4F9CFF", "#1E63E9", "#FF6B6B"];

export default function Dashboard() {
  const pageRef = useRef(null);
  const {rawGluco, averageGluco, summaryGluco} = useGlucoData();
  console.log("Raw gluco data",rawGluco)
  console.log(averageGluco)
  console.log(summaryGluco);

  const rawData = []

  const averageData = Object.entries(averageGluco).map(([meal, values])=>({
    name:meal,
    preMeal:values.preMeal,
    postMeal:values.postMeal
  }))
  console.log(averageData)
  const summaryData = [
    {name:"low",value:summaryGluco.low},
    {name:"normal",value:summaryGluco.normal},
    {name:"high",value:summaryGluco.high}
  ] ;

  // if(loading) return <p>loading...</p>

  useEffect(() => {
    // GSAP intro animation
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col gap-8 px-4 py-6 md:px-12"
    >
      {/* Header */}
      <motion.header
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Diabetes Dashboard
        </h1>
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-500 shadow-md"
        />
      </motion.header>

      {/* Raw Glucose Data */}
      <motion.div
        className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-lg font-semibold mb-2">Raw Glucose Data</h2>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart width={730} height={250} data={rawData}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Average Glucose Data */}
      <motion.div
        className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-lg font-semibold mb-2">Average Glucose</h2>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart width={730} height={250} data={averageData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="preMeal" fill="#8884d8" />
  <Bar dataKey="postMeal" fill="#82ca9d" />
</BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Summary Charts */}
        {/* Pie Chart */}
        <motion.div
          className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-lg font-semibold mb-2">Summary (Pie)</h2>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={summaryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {summaryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex justify-between items-center mt-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl shadow-lg">
          AI Report
        </button>
        <button className="px-5 py-3 bg-green-500 hover:bg-green-600 transition text-white rounded-xl shadow-lg">
          Add Glucose
        </button>
      </motion.div>
    </div>
  );
}
