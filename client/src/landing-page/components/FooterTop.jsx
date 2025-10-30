import React from "react";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <h2 style={{ textAlign: "center", fontSize: "30px" }}>
        Ready to Transform Your Warehouse?
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "white",
          marginTop: "14px",
        }}
      >
        Join thousands of business that have revolutionalized their operations
        with StockFlow
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "white",
        }}
      >
        Start your free trial today and see the difference in just 24 hours.
      </p>
      <div className="footer-features">
        <div className="footer-feature">
          <i class="ri-checkbox-circle-line"></i>
          <p>14-day Free Trial</p>
        </div>
        <div className="footer-feature">
          <i class="ri-checkbox-circle-line"></i>
          <p>No Setup Fees</p>
        </div>
        <div className="footer-feature">
          <i class="ri-checkbox-circle-line"></i>
          <p>24/7 Support Included</p>
        </div>
        <div className="footer-feature">
          <i class="ri-checkbox-circle-line"></i>
          <p>Cancel Anytime</p>
        </div>
      </div>

      <div className="trial-button">
        <button className="trial">Start Free Trial Now <i class="ri-arrow-right-line"></i></button>
      </div>
      <p className="footerTop-para">No credit card required <b>.</b> Setup in under 5 minutes</p>
    </div>
  );
};

export default FooterTop;
