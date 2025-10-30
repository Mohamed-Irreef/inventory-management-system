import React from "react";
import warehouse from "../../assets/warehouse.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <div className="banner-label">
          <i class="ri-star-line"></i>
          <p>#1 Warehouse Management Platform</p>
        </div>
        <div className="banner-title">
          <h3 className="banner-title1">Smart Warehouse</h3>
          <h3 className="banner-title2">Management</h3>
        </div>
        <div className="banner-para">
          <p>
            Revolutionize your warehouse operations with our advanced
            intelligent management system. Designed to enhance efficiency, it
            helps you streamline inventory control, automate routine tasks, and
            optimize daily workflows. With the power of real-time analytics,
            gain actionable insights into every aspect of your operations,
            ensuring faster decisions and reduced errors.
          </p>
        </div>
        <div className="banner-buttons">
          <button className="trial">
            Start Free Trial &nbsp; <i class="ri-arrow-right-line"></i>
          </button>
          <button className="demo">
            <i class="ri-play-large-line"></i> &nbsp; Watch Demo
          </button>
        </div>

        <div className="banner-features">
          <div className="real">
            <i class="ri-map-pin-line"></i>
            <p>Real-time Tracking</p>
          </div>
          <div className="time">
            <i class="ri-time-line"></i>
            <p>24/7 Operations</p>
          </div>
          <div className="cost">
            <i class="ri-money-rupee-circle-line"></i>
            <p>Cost Reduction</p>
          </div>
        </div>
      </div>
      <div className="banner-right">
        <img src={warehouse} alt="" />
      </div>
    </div>
  );
};

export default Banner;
