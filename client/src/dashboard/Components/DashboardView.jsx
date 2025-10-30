import React from "react";
import DashBoardNav from "./DashBoardNav";
import DashboardGraphs from "./DashboardGraphs";
import ChatBot from "./ChatBot";
import InventoryAnalytics from "./InventoryAnalytics";
import StockAlerts from "./StockAlerts";
import RecentActivity from "./RecentActivity";
import Loader from "./Loader";

const DashboardView = () => {
  const stats =[
    {
      title:"Total Inventory",
      icon:<i class="ri-box-3-line"></i>,
      // numeric:"45,231",
      numeric:"0",
      percentage:"0%",
      // percentage:"2.1%",
      sub:"Items in Stock",
    },
    {
      title:"Pending Orders",
      icon:<i class="ri-shopping-cart-2-line"></i>,
      // numeric:"1,247",
      // percentage:"5.2%",
      numeric:"0",
      percentage:"0%",
      sub:"Awaiting Process",
    },
    {
      title:"Low Stock Alerts",
      icon:<i class="ri-error-warning-line"></i>,
      // numeric:23,
      // percentage:"12%",
      numeric:0,
      percentage:"0%",
      sub:"Items Below Threshold",
    },
    {
      title:"Today's Shipment",
      icon:<i class="ri-truck-line"></i>,
      // numeric:189,
      // percentage:"8.2%",
      numeric:0,
      percentage:"0%",
      sub:"Orders Dispatched",
    },

    {
      title:"Revenue Today",
      icon:<i class="ri-money-rupee-circle-line"></i>,
      // numeric:24580,
      // percentage:"15.3%",
      numeric:0,
      percentage:"0%",
      sub:"Orders Processed",
    },
    {
      title:"Efficiency Rate",
      icon:<i class="ri-line-chart-line"></i>,
      // numeric:24580,
      // percentage:"95.2%",
      numeric:0,
      percentage:"0%",
      sub:"Overall Performance",
    }
  ]
  return (
    <div className="main-dashboard-page">
      {/* <Loader/> */}
      <div className="dashboard-nav">
          <DashBoardNav/>
      </div>
    
    <div className="dashboard-main">
        <h2>Dashboard</h2>
        <div className="stats-container">

          {
            stats.map((data,index)=>{
              return<>
              <div className="state-box" key={index+1}>
            <div className="state-title">
              <p>{data.title}</p>
              {data.icon}
            </div>
            <span className="state-data">{data.numeric}</span>
            <p className="state-bottom">
              <span className="state-percentage">+{data.percentage}</span> &nbsp; {data.sub}
            </p>
          </div>
              
              </>
            })
          }



        </div>

        <div className="garphs-section">
          <DashboardGraphs/>
        </div>
        <div className="">
          <InventoryAnalytics/>
        </div>
        <div className="dashboard-alerts-box">
          <StockAlerts/>
        </div>
        <div className="">
          <RecentActivity/>
        </div>
        <div className="">
          <ChatBot/>
        </div>
      </div>

    </div>
  );
};

export default DashboardView;
