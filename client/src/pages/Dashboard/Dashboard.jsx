import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("daily");

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  const lineData = {
    labels: timeframe === "daily" ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] : timeframe === "weekly" ? ["Week 1", "Week 2", "Week 3", "Week 4"] : timeframe === "monthly" ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Calories Burned",
        data: timeframe === "daily" ? [500, 700, 800, 600, 750, 900, 850] : timeframe === "weekly" ? [3500, 4000, 4500, 3000] : timeframe === "monthly" ? [20000, 21000, 25000, 24000, 23000, 26000, 27000, 29000, 30000, 28000, 27000, 26000] : [240000, 250000, 260000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
      {
        label: "Calories Consumed",
        data: timeframe === "daily" ? [1800, 2000, 1900, 2100, 2200, 2000, 1950] : timeframe === "weekly" ? [14000, 15000, 16000, 13000] : timeframe === "monthly" ? [60000, 62000, 64000, 63000, 65000, 67000, 66000, 68000, 70000, 69000, 71000, 72000] : [720000, 740000, 750000],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Carbs", "Proteins", "Fats"],
    datasets: [
      {
        label: "Daily Intake (g)",
        data: [250, 150, 70],
        backgroundColor: [
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 99, 132, 0.8)",
        ],
        borderColor: [
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Cardio", "Strength Training", "Flexibility"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h3>Timeframe</h3>
        <select value={timeframe} onChange={handleTimeframeChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Health Dashboard</h1>
        </div>

        <div className="cards-container">
          <div className="card">
            <h3>Calories Burned Today</h3>
            <p>750 kcal</p>
          </div>
          <div className="card">
            <h3>Average Weekly Workout</h3>
            <p>5 Hours</p>
          </div>
          <div className="card">
            <h3>Total Steps This Month</h3>
            <p>150,000</p>
          </div>
        </div>

        <div className="charts-container">
          <div className="chart">
            <h3>Calories Burned vs Consumed</h3>
            <Line data={lineData} />
          </div>

          <div className="chart">
            <h3>Daily Nutritional Intake</h3>
            <Bar data={barData} />
          </div>

          <div className="chart">
            <h3>Workout Distribution</h3>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
