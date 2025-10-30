import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Loader from "./Loader";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const InventoryAnalytics = () => {
  const dispatchData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Dispatched",
        data: [120, 140, 90, 180, 160, 135, 110],
        backgroundColor: "#22c55e",
        borderRadius: 4,
      },
      {
        label: "Returns",
        data: [10, 15, 5, 12, 8, 6, 3],
        backgroundColor: "#ef4444",
        borderRadius: 4,
      },
    ],
  };

  const stockByCategoryData = {
    labels: [
      "Electronics",
      "Clothing",
      "Home & Garden",
      "Books",
      "Accessories",
    ],
    datasets: [
      {
        label: "Stock Count",
        data: [420, 300, 180, 90, 60],
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#6366f1",
          "#ef4444",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="analytics-container">
      
        {/* Left: Fast/Slow Moving */}
        <div className="fast-slow">
          <h2>Fast vs Slow Moving Items</h2>
          <p className="sub-title">Top 5 fastest and slowest moving SKUs</p>
          <div className="columns">
            <div className="column fast">
              <h3><i class="ri-circle-fill"></i> Fast Moving</h3>
              {[
                {
                  name: "Samsung Galaxy S24",
                  code: "SG24-128",
                  units: 145,
                  days: 2,
                },
                {
                  name: "iPhone 15 Pro",
                  code: "IP15P-256",
                  units: 132,
                  days: 3,
                },
                {
                  name: "MacBook Air M3",
                  code: "MBA-M3-512",
                  units: 98,
                  days: 4,
                },
                {
                  name: "Sony WH-1000XM5",
                  code: "SWH-1000XM5",
                  units: 87,
                  days: 3,
                },
                {
                  name: "iPad Pro 12.9",
                  code: "IPP-129-1TB",
                  units: 76,
                  days: 5,
                },
              ].map((item, i) => (
                <div className="card fast-card" key={i}>
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    <small>{item.code}</small>
                  </div>
                  <span className="units">{item.units} units</span>
                  <span className="days">{item.days} days in stock</span>
                </div>
              ))}
            </div>
            <div className="column slow">
              <h3><i class="ri-circle-fill"></i> Slow Moving</h3>
              {[
                {
                  name: "Vintage Camera Lens",
                  code: "VCL-85MM",
                  units: 2,
                  days: 180,
                },
                {
                  name: "Bluetooth Speakers",
                  code: "BTS-MINI-BLK",
                  units: 3,
                  days: 165,
                },
                {
                  name: "Gaming Mouse Pad",
                  code: "GMP-XXL-RGB",
                  units: 4,
                  days: 145,
                },
                { name: "USB-C Hub", code: "UCH-7P-GREY", units: 5, days: 120 },
                {
                  name: "Wireless Charger",
                  code: "WC-15W-BLK",
                  units: 6,
                  days: 110,
                },
              ].map((item, i) => (
                <div className="card slow-card" key={i}>
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    <small>{item.code}</small>
                  </div>
                  <span className="units red">{item.units} units</span>
                  <span className="days">{item.days} days in stock</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Graph */}

        <div className="right-graph-container">
          <div className="chart-box">
            <h2>Returns vs Dispatch Volume</h2>
            <p className="sub-title">
              Daily comparison of dispatched orders and returns
            </p>
            <Bar data={dispatchData} />
            <div className="summary">
              <div className="total-dispatched">
                <i class="ri-checkbox-circle-line"></i> 1,050 <br />
                <span>Total Dispatched</span>
              </div>
              <div className="total-returns">
                <i class="ri-close-circle-line"></i> 63 <br />
                <span>Total Returns (6.0%)</span>
              </div>
            </div>
          </div>

          <div className="chart1-box1">
            <h2>Category-wise Stock Distribution</h2>
            <p className="sub-title1">
              Visual breakdown of current stock levels by category
            </p>
            <div className="chart-wrapper">
              <Pie data={stockByCategoryData} />
            </div>
            <div className="summary1">
              <p>🗂 Total Categories: 5</p>
              <p>📦 Total Items: 1,050</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="chart-graph">
        
        <div className="chart-box">
        <h2>Returns vs Dispatch Volume</h2>
        <p className="sub-title">Daily comparison of dispatched orders and returns</p>
        <Bar data={dispatchData} />
        <div className="summary">
          <div className="total-dispatched">✅ 1,050 <br /><span>Total Dispatched</span></div>
          <div className="total-returns">❌ 63 <br /><span>Total Returns (6.0%)</span></div>
        </div>
      </div>  
    </div>  */}
    </>
  );
};

export default InventoryAnalytics;
