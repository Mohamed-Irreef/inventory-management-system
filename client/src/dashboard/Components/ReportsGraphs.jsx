// StackFlow Pro – Real-Time Smart Warehouse Dashboard
// Unified Dashboard with All Graphs (Using Normal CSS)

import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";
// import './DashboardGraphs.css';

const COLORS = [
  "#E50914",
  "#0F0F0F",
  "#F4F4F4",
  "#8884d8",
  "#FF6384",
  "#FFCE56",
  "#36A2EB",
];

const stockData = [
  { name: "Jan", Stock: 4000 },
  { name: "Feb", Stock: 3000 },
  { name: "Mar", Stock: 2000 },
  { name: "Apr", Stock: 2780 },
  { name: "May", Stock: 1890 },
];

const orderTrendData = [
  { name: "Mon", Orders: 30 },
  { name: "Tue", Orders: 45 },
  { name: "Wed", Orders: 50 },
  { name: "Thu", Orders: 60 },
  { name: "Fri", Orders: 90 },
];

const delayStats = [
  { name: "Delayed", value: 300 },
  { name: "On Time", value: 700 },
];

const warehouseMap = [
  { zone: "Zone A", density: 80 },
  { zone: "Zone B", density: 50 },
  { zone: "Zone C", density: 95 },
  { zone: "Zone D", density: 30 },
];

const stockMovement = [
  { date: "Mon", inward: 120, outward: 100 },
  { date: "Tue", inward: 150, outward: 130 },
  { date: "Wed", inward: 100, outward: 90 },
  { date: "Thu", inward: 200, outward: 160 },
  { date: "Fri", inward: 170, outward: 140 },
];

const abcData = [
  { name: "A - High Value", value: 55 },
  { name: "B - Medium Value", value: 30 },
  { name: "C - Low Value", value: 15 },
];

const fulfillmentData = [
  { name: "Fulfilled", value: 85 },
  { name: "Pending", value: 15 },
];

const fastMoving = [
  { name: "Product A", qty: 400 },
  { name: "Product B", qty: 300 },
  { name: "Product C", qty: 200 },
  { name: "Product D", qty: 100 },
];

const radarData = [
  { partner: "Delhivery", onTime: 90, avgTime: 5 },
  { partner: "Shiprocket", onTime: 85, avgTime: 6 },
  { partner: "Bluedart", onTime: 92, avgTime: 4 },
];

const funnelData = [
  { value: 1000, name: "Received" },
  { value: 800, name: "Packed" },
  { value: 600, name: "Dispatched" },
  { value: 550, name: "Delivered" },
];

const turnoverData = [
  { month: 'Jan', turnover: 2.5 },
  { month: 'Feb', turnover: 3.0 },
  { month: 'Mar', turnover: 2.2 },
  { month: 'Apr', turnover: 3.5 },
  { month: 'May', turnover: 4.0 },
];


function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

export default function ReportsGraphs() {
  return (
    <div className="report-dashboard">
     
      {/* 📦 Monthly Stock Levels */}
      <Card className=" ">
        <CardContent>
          <p className="text-md font-bold mb-6"> Monthly Stock Levels</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={stockData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Stock"
                stroke="#E50914"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">
            Tracks monthly stock availability trends.
          </p>
        </CardContent>
      </Card>

      {/* 📈 Weekly Order Trends */}
      <Card className=" ">
        <CardContent>
          <p className="text-md font-bold mb-2"> Weekly Order Trends</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={orderTrendData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Orders" fill="#0F0F0F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">
            Orders placed during the week.
          </p>
        </CardContent>
      </Card>

      {/* 🚚 Delivery Status Breakdown */}
      <Card className="">
        <CardContent>
          <p className="text-md font-bold mb-2">
             Delivery Status Breakdown
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={delayStats}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
                label
              >
                {delayStats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">
            Proportion of delayed vs on-time deliveries.
          </p>
        </CardContent>
      </Card>

     

      {/* 🤖 Inventory Forecast */}
      <Card className=" ">
        <CardContent>
          <p className="text-md font-bold mb-2"> Inventory Forecast</p>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={stockData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Stock"
                stroke="#E50914"
                fill="#F4F4F4"
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">
            Forecasted inventory based on past data.
          </p>
        </CardContent>
      </Card>

      {/* 📦 Daily Stock Movement */}
      <Card className=" ">
        <CardContent>
          <p className="text-md font-bold mb-2"> Daily Stock Movement</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={stockMovement}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="inward" stroke="#36A2EB" />
              <Line type="monotone" dataKey="outward" stroke="#E50914" />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">
            Inward vs outward flow each day.
          </p>
        </CardContent>
      </Card>

      {/* 📊 ABC Inventory Classification */}
      <Card className=" ">
        <CardContent>
          <p className="text-md font-bold mb-2">
             ABC Inventory Classification
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={abcData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                {abcData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">
            A (high value), B (medium), C (low).
          </p>
        </CardContent>
      </Card>

      {/* 📈 Fulfillment Efficiency */}
      <Card className=" ">
        <CardContent>
          <p className="text-md font-bold mb-2"> Fulfillment Efficiency</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={fulfillmentData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
                label
              >
                {fulfillmentData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">
            Completed vs pending fulfillment.
          </p>
        </CardContent>
      </Card>

      {/* 🚀 Fastest Moving Items */}
      <Card className=" ">
        <CardContent>
          <p className="text-md font-bold mb-2"> Fastest Moving Items</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={fastMoving}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="qty" fill="#36A2EB" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">Top selling SKUs.</p>
        </CardContent>
      </Card>

      {/* 🚚 Partner Performance Metrics */}
      <Card className=" ">
        <CardContent>
          <p className="text-md font-bold mb-2">
             Partner Performance Metrics
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="partner" />
              <PolarRadiusAxis />
              <Radar
                name="On-Time"
                dataKey="onTime"
                stroke="#E50914"
                fill="#E50914"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">
            Courier service comparison.
          </p>
        </CardContent>
      </Card>

      {/* 🔄 Order Fulfillment Funnel */}
      <Card className=" ">
        <CardContent>
          <p className="text-md font-bold mb-2">
             Order Fulfillment Funnel
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <FunnelChart>
              <Tooltip />
              <Funnel dataKey="value" data={funnelData}>
                <LabelList
                  position="right"
                  fill="#000"
                  stroke="none"
                  dataKey="name"
                />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">
            Stages from order to delivery.
          </p>
        </CardContent>
      </Card>


       {/* 🏬 Warehouse Occupancy Map */}
      <Card className=" ">
        <CardContent>
          <p className="text-md font-bold mb-2">
             Live Warehouse Occupancy Map
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={warehouseMap} layout="vertical">
              <XAxis type="number" />
              <YAxis type="category" dataKey="zone" />
              <Tooltip />
              <Bar dataKey="density" fill="#E50914" barSize={24} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">
            Real-time storage density in each zone.
          </p>
        </CardContent>
      </Card>

      <Card className="">
  <CardContent>
    <p className="text-md font-bold mb-6">Inventory Turnover Ratio</p>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={turnoverData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="turnover"
          stroke="#E50914"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
    <p className="text-sm text-gray-500 mt-2">
      Shows how efficiently inventory is cycled each month.
    </p>
  </CardContent>
</Card>

      
    </div>
    
  );
}
