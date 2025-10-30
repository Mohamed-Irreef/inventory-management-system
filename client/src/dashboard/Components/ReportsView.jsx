import React from 'react'
import DashboardGraphs from './DashboardGraphs';
import ReportsGraphs from './ReportsGraphs';

const ReportsView = () => {

  const stats1 =[
    {
      title:"Total Inventory",
      icon:<i class="ri-box-3-line"></i>,
      numeric:"45,231",
      percentage:"2.1%",
      sub:"Items in Stock",
    },
    {
      title:"Pending Orders",
      icon:<i class="ri-shopping-cart-2-line"></i>,
      numeric:"1,247",
      percentage:"5.2%",
      sub:"Awaiting Process",
    },
    {
      title:"Low Stock Alerts",
      icon:<i class="ri-error-warning-line"></i>,
      numeric:23,
      percentage:"12%",
      sub:"Items Below Threshold",
    },
    {
      title:"Today's Shipment",
      icon:<i class="ri-truck-line"></i>,
      numeric:189,
      percentage:"8.2%",
      sub:"Orders Dispatched",
    },

    {
      title:"Revenue Today",
      icon:<i class="ri-money-rupee-circle-line"></i>,
      numeric:24580,
      percentage:"15.3%",
      sub:"Orders Processed",
    },
    {
      title:"Efficiency Rate",
      icon:<i class="ri-line-chart-line"></i>,
      numeric:24580,
      percentage:"95.2%",
      sub:"Overall Performance",
    }
  ]

  const stats2 = [
    {
      title: "Expected Today",
      icon: <i class="ri-box-3-line"></i>,
      count: 8,
      text: "shipments",
    },
    {
      title: "Pending Processing",
      icon: <i class="ri-edit-circle-line"></i>,
      count: 12,
      text: "items",
    },
    {
      title: "Completed Today",
      icon: <i class="ri-checkbox-circle-line"></i>,
      count: 24,
      text: "received",
    },
    {
      title: "Quality Issues",
      icon: <i class="ri-error-warning-line"></i>,
      count: 2,
      text: "items flagged",
    },
  ];
  return (
    <div className="reports-page">
      <div className="inventory-page-title">
        <h2>Inventory Management</h2>
        <div className="receiving-page-btns">
          <button className="add-product">
            <i class="ri-download-2-line"></i> Export Data
          </button>
          <button className="add-product">
            <i class="ri-file-chart-line"></i> Generate Report
          </button>
        </div>
      </div>
      <div className="stats-container">

          {
            stats1.map((data,index)=>{
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
      
      <div className="reports-main-section">
        <div className="receiving-cards">
          {stats2.map((each, index) => {
            return (
              <>
                <div className="receiving-card" key={index}>
                  <div className="receiving-title-box">
                    <p className="title">{each.title}</p>
                    <span>{each.icon}</span>
                  </div>
                  <p className="count">{each.count}</p>
                  <p className="text">{each.text}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="garphs-section">
        <ReportsGraphs/>
      </div>

    </div>
  )
}

export default ReportsView