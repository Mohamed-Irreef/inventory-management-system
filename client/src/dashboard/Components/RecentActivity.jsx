import React from 'react';


const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <div className="activities">
        <h2>Recent Activities</h2>
        <p className="subheading">Latest warehouse operations</p>
        <ul>
          <li><span className="dot"></span>New order #12345 received</li>
          <li><span className="dot"></span>Stock updated for SKU-A001</li>
          <li><span className="dot"></span>Vendor ABC Corp added new products</li>
          <li><span className="dot"></span>Dispatch completed for Order #12340</li>
          <li><span className="dot"></span>Low stock alert for Product XYZ</li>
        </ul>
      </div>

      <div className="actions">
        <h2>Quick Actions</h2>
        <p className="subheading">Common warehouse tasks</p>
        <div className="buttons">
          <div className="action-btn">
            <i class="ri-box-3-line"></i>
            <p>Add Product</p>
          </div>
          <div className="action-btn">
            <i class="ri-shopping-cart-line"></i>
            <p>Process Order</p>
          </div>
          <div className="action-btn">
            <i class="ri-error-warning-line"></i>
            <p>Stock Check</p>
          </div>
          <div className="action-btn">
            <i class="ri-file-chart-line"></i>
            <p>Generate Report</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
