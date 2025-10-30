import React from "react";

const Solutions = () => {
  return (
    <div className="solution-box">
      <div className="solution-card">
        <div className="solution-icon">
          <i class="ri-home-5-line"></i>
        </div>
        <h4>Warehouse Optimization</h4>
        <p>
          Optimize delivery routes, track vehicles, and manage driver schedules
          efficiently.
        </p>
        <ul className="solution-list">
          <li><i class="ri-checkbox-circle-line check"></i> 30% faster picking</li>
          <li><i class="ri-checkbox-circle-line check"></i> 25% space optimization</li>
          <li><i class="ri-checkbox-circle-line check"></i> Real time tracking</li>
        </ul>
      </div>

      <div className="solution-card">
        <div className="solution-icon">
          <i class="ri-shopping-cart-2-line"></i>
        </div>
        <h4>Order Fullfillment</h4>
        <p>
          Streamline your order processing from recipt to shipment with
          automated workflows.
        </p>
        <ul className="solution-list">
          <li><i class="ri-checkbox-circle-line check"></i> 99.9% accuracy</li>
          <li><i class="ri-checkbox-circle-line check"></i> Same day processing</li>
          <li><i class="ri-checkbox-circle-line check"></i> Integrated Shipping</li>
        </ul>
      </div>

      <div className="solution-card">
        <div className="solution-icon">
          <i class="ri-line-chart-line"></i>
        </div>
        <h4>Supply Chain Analytics</h4>
        <p>
          Get deep insights into your supply chain performance and identify optimization opportunities
        </p>
        <ul className="solution-list">
          <li><i class="ri-checkbox-circle-line check"></i> Predictable analysis</li>
          <li><i class="ri-checkbox-circle-line check"></i> Custom reports</li>
          <li><i class="ri-checkbox-circle-line check"></i> KPI dashboards</li>
        </ul>
      </div>
    </div>
  );
};

export default Solutions;
