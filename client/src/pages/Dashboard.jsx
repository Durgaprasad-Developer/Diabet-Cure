import React, { useEffect, useRef } from "react";
import { User } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts";
import { motion } from "framer-motion";
import gsap from "gsap";
import useGlucoData from "../hooks/useGlucoData";
import { useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Activity,
  Plus,
  FileText,
  AlertCircle,
  Menu,
} from "lucide-react";

const COLORS = ["#3b82f6", "#10b981", "#ef4444"];

export default function Dashboard() {
  const pageRef = useRef(null);
  const { mainGluco, averageGluco, summaryGluco } = useGlucoData();
  const navigate = useNavigate();

  const mainData = mainGluco?.chartData?.map((item) => ({
    name: item.name,
    preMeal: item.preMeal,
    postMeal: item.postMeal,
  }));

  const averageData = Object.entries(averageGluco).map(([meal, values]) => ({
    name: meal,
    preMeal: values.preMeal,
    postMeal: values.postMeal,
  }));

  const summaryData = [
    { name: "Low", value: summaryGluco.low },
    { name: "Normal", value: summaryGluco.normal },
    { name: "High", value: summaryGluco.high },
  ];

  const totalReadings =
    summaryGluco.low + summaryGluco.normal + summaryGluco.high;

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const StatCard = ({ title, value, subtitle, icon: Icon, color, delay }) => (
    <motion.div
      className={`bg-gradient-to-br ${color} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-lg sm:rounded-xl">
          <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </div>
      </div>
      <h3 className="text-white/80 text-xs sm:text-sm font-medium mb-1">
        {title}
      </h3>
      <p className="text-white text-2xl sm:text-3xl font-bold mb-1">{value}</p>
      <p className="text-white/70 text-xs">{subtitle}</p>
    </motion.div>
  );

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 text-xs sm:text-sm">
          <p className="font-semibold mb-1">{payload[0].payload.name}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pb-6 sm:pb-8"
    >
      {/* Mobile-Optimized Header */}
      <motion.header
        className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent truncate">
                Diabetes Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1 hidden sm:block">
                Track and manage your glucose levels
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <button className="p-2 sm:hidden bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"></button>
              <User className="cursor-pointer" size={26} onClick={() => navigate("/profile")} />
            </div>
          </div>
        </div>
      </motion.header>

      <div className="px-3 sm:px-6 lg:px-8 mt-4 sm:mt-8 max-w-7xl mx-auto">
        {/* Mobile-Optimized Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-8">
          <StatCard
            title="Low Readings"
            value={summaryGluco.low}
            subtitle={`${
              totalReadings > 0
                ? ((summaryGluco.low / totalReadings) * 100).toFixed(1)
                : 0
            }% of total`}
            icon={AlertCircle}
            color="from-blue-500 to-blue-600"
            delay={0.2}
          />
          <StatCard
            title="Normal Readings"
            value={summaryGluco.normal}
            subtitle={`${
              totalReadings > 0
                ? ((summaryGluco.normal / totalReadings) * 100).toFixed(1)
                : 0
            }% of total`}
            icon={Activity}
            color="from-green-500 to-emerald-600"
            delay={0.3}
          />
          <StatCard
            title="High Readings"
            value={summaryGluco.high}
            subtitle={`${
              totalReadings > 0
                ? ((summaryGluco.high / totalReadings) * 100).toFixed(1)
                : 0
            }% of total`}
            icon={TrendingUp}
            color="from-red-500 to-rose-600"
            delay={0.4}
          />
        </div>

        {/* Mobile-Optimized Charts */}
        <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8">
          {/* Glucose Trend Chart */}
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                  Glucose Trend
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Pre and post-meal
                </p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart
                data={mainData}
                margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorPreMeal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorPostMeal"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  stroke="#6b7280"
                  style={{ fontSize: "10px" }}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  stroke="#6b7280"
                  style={{ fontSize: "10px" }}
                  tick={{ fontSize: 10 }}
                  width={40}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }}
                  iconSize={10}
                />
                <Area
                  type="monotone"
                  dataKey="preMeal"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorPreMeal)"
                />
                <Area
                  type="monotone"
                  dataKey="postMeal"
                  stroke="#10b981"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorPostMeal)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Distribution Chart */}
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="bg-purple-100 p-1.5 sm:p-2 rounded-lg">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                  Distribution
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">By range</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={summaryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {summaryData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "11px" }} iconSize={10} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Average Glucose Chart */}
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                  Average by Meal
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">Pre vs post</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart
                data={averageData}
                margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  stroke="#6b7280"
                  style={{ fontSize: "10px" }}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  stroke="#6b7280"
                  style={{ fontSize: "10px" }}
                  tick={{ fontSize: 10 }}
                  width={40}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }}
                  iconSize={10}
                />
                <Bar dataKey="preMeal" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="postMeal" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Mobile-Optimized Action Buttons */}
        <motion.div
          className="flex flex-col gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <button
            onClick={() => navigate("/aiReport")}
            className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg active:scale-95 transition-all text-sm sm:text-base"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Generate AI Report</span>
          </button>
          <button
            onClick={() => navigate("/glucose-readings")}
            className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg active:scale-95 transition-all text-sm sm:text-base"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Add New Reading</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
