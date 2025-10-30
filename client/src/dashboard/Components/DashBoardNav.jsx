import React from "react";

const DashBoardNav = () => {
  return (
    <>
      <div className="search-box">
        <i class="ri-search-line search-icon"></i>
        <input type="search" placeholder="Search orders, products, SKUs..." />
      </div>

      <div className="dashboard-nav-right">
        <div className="notification-box">
          <span>3</span>
          <i class="ri-notification-2-line"></i>
        </div>
        <div className="message-box">
          <i class="ri-chat-4-line"></i>
        </div>
        <div className="loggedin-by">
          <p>
            Welcome, <b>Admin</b>
          </p>
        </div>
        <div className="logout-button">
          <i class="ri-logout-box-r-line"></i>
        </div>
      </div>
    </>
  );
};

export default DashBoardNav;
