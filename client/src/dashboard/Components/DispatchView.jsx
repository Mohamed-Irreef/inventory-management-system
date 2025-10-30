import React from "react";

const DispatchView = () => {
 const data = [
  { order_id: "ORD-001", customer_name: "John Doe", items: 3, location: "Mumbai", date: "2025-07-07", eta: "14:00" },
  { order_id: "ORD-002", customer_name: "Jane Smith", items: 1, location: "Delhi", date: "2025-07-07", eta: "11:00" },
  { order_id: "ORD-003", customer_name: "Bob Wilson", items: 5, location: "Bangalore", date: "2025-07-07", eta: "12:00" },
  { order_id: "ORD-004", customer_name: "Aisha Khan", items: 2, location: "Chennai", date: "2025-07-08", eta: "12:30" },
  { order_id: "ORD-005", customer_name: "Ravi Patel", items: 4, location: "Ahmedabad", date: "2025-07-08", eta: "17:30" },
  { order_id: "ORD-006", customer_name: "Emily Chen", items: 6, location: "Hyderabad", date: "2025-07-08", eta: "19:00" },
  { order_id: "ORD-007", customer_name: "Liam Martin", items: 2, location: "Kolkata", date: "2025-07-09", eta: "10:00" },
  { order_id: "ORD-008", customer_name: "Priya Nair", items: 3, location: "Pune", date: "2025-07-09", eta: "12:45" },
  { order_id: "ORD-009", customer_name: "Carlos Mendez", items: 1, location: "Goa", date: "2025-07-07", eta: "09:00" },
  { order_id: "ORD-010", customer_name: "Sophia Thomas", items: 4, location: "Jaipur", date: "2025-07-10", eta: "09:45" },
  { order_id: "ORD-011", customer_name: "Arjun Reddy", items: 5, location: "Bhopal", date: "2025-07-10", eta: "16:00" },
  { order_id: "ORD-012", customer_name: "Sara Ahmed", items: 2, location: "Lucknow", date: "2025-07-10", eta: "19:30" },
  { order_id: "ORD-013", customer_name: "Karan Mehta", items: 3, location: "Coimbatore", date: "2025-07-07", eta: "11:30" },
  { order_id: "ORD-014", customer_name: "Meera Singh", items: 1, location: "Nagpur", date: "2025-07-08", eta: "13:30" },

  // New entries (from 2025-10-30 to 2025-11-14)
  { order_id: "ORD-015", customer_name: "Vikram Das", items: 4, location: "Surat", date: "2025-10-30", eta: "15:00" },
  { order_id: "ORD-016", customer_name: "Olivia Brown", items: 2, location: "Trivandrum", date: "2025-10-30", eta: "10:30" },
  { order_id: "ORD-017", customer_name: "Harish Kumar", items: 6, location: "Patna", date: "2025-10-30", eta: "13:45" },
  { order_id: "ORD-018", customer_name: "Ananya Gupta", items: 3, location: "Indore", date: "2025-10-30", eta: "09:15" },
  { order_id: "ORD-019", customer_name: "David Lee", items: 1, location: "Chandigarh", date: "2025-10-30", eta: "18:20" },
  { order_id: "ORD-020", customer_name: "Rohit Sharma", items: 5, location: "Madurai", date: "2025-10-30", eta: "11:00" },
  { order_id: "ORD-021", customer_name: "Fatima Noor", items: 2, location: "Visakhapatnam", date: "2025-11-05", eta: "12:15" },
  { order_id: "ORD-022", customer_name: "George Adams", items: 4, location: "Mysore", date: "2025-11-06", eta: "16:40" },
  { order_id: "ORD-023", customer_name: "Nisha Balan", items: 1, location: "Rajkot", date: "2025-11-07", eta: "14:25" },
  { order_id: "ORD-024", customer_name: "Daniel Wong", items: 3, location: "Vijayawada", date: "2025-11-08", eta: "17:30" },
  { order_id: "ORD-025", customer_name: "Sanjay Iyer", items: 5, location: "Agra", date: "2025-11-09", eta: "10:45" },
  { order_id: "ORD-026", customer_name: "Emma Johnson", items: 2, location: "Noida", date: "2025-11-10", eta: "19:00" },
  { order_id: "ORD-027", customer_name: "Mohammed Ali", items: 4, location: "Tirunelveli", date: "2025-11-11", eta: "13:00" },
  { order_id: "ORD-028", customer_name: "Isabella White", items: 6, location: "Hubli", date: "2025-11-11", eta: "09:50" },
  { order_id: "ORD-029", customer_name: "Rajesh Kumar", items: 3, location: "Erode", date: "2025-11-12", eta: "11:20" },
  { order_id: "ORD-030", customer_name: "Sneha Pillai", items: 2, location: "Thrissur", date: "2025-11-12", eta: "15:40" },
  { order_id: "ORD-031", customer_name: "Kevin Lewis", items: 5, location: "Udaipur", date: "2025-11-13", eta: "10:10" },
  { order_id: "ORD-032", customer_name: "Zara Qureshi", items: 3, location: "Guwahati", date: "2025-11-13", eta: "18:30" },
  { order_id: "ORD-033", customer_name: "Aravind Raj", items: 4, location: "Trichy", date: "2025-11-14", eta: "09:00" },
  { order_id: "ORD-034", customer_name: "Julia Fernandez", items: 1, location: "Ranchi", date: "2025-11-14", eta: "14:15" }
];


  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  // Filter for today’s orders only
  const todayDispatches = data.filter((item) => item.date === todayStr);

  function etaHandler(eta) {
    const now = new Date();
    const [hr] = eta.split(":");
    const rem = parseInt(hr) - now.getHours();
    if (rem > 0) return `${rem} hours`;
    if (rem === 0) return "Now";
    return "Delayed";
  }

  function statusHandler(eta) {
    const now = new Date();
    const [hr] = eta.split(":");
    const rem = parseInt(hr) - now.getHours();
    if (rem > 0 && rem <= 6) return "in-transit";
    if (rem === 0) return "arrived";
    if (rem < 0) return "arrived";
    return "pending";
  }

  const stats = [
    {
      title: "Ready to Ship",
      icon: <i className="ri-box-3-line"></i>,
      count: todayDispatches.length,
      text: "orders"
    },
    {
      title: "In Transit",
      icon: <i className="ri-edit-circle-line"></i>,
      count: 156,
      text: "shipments"
    },
    {
      title: "Delivered Today",
      icon: <i className="ri-checkbox-circle-line"></i>,
      count: 89,
      text: "completed"
    },
    {
      title: "Avg. Delivery Time",
      icon: <i className="ri-time-line"></i>,
      count: "2.3",
      text: "days"
    }
  ];

  return (
    <div className="receiving-page">
      <div className="inventory-page-title">
        <h2>Dispatch</h2>
        <div className="receiving-page-btns">
          <button className="add-product">
            <i className="ri-box-3-line"></i> Create Shipment
          </button>
        </div>
      </div>

      <div className="receiving-main-section">
        <div className="receiving-cards">
          {stats.map((each, index) => (
            <div className="receiving-card" key={index}>
              <div className="receiving-title-box">
                <p className="title">{each.title}</p>
                <span>{each.icon}</span>
              </div>
              <p className="count">{each.count}</p>
              <p className="text">{each.text}</p>
            </div>
          ))}
        </div>

        <div className="receiving-table-section">
          <div className="receiving-table-title-box">
            <h2 className="title">Orders Ready For Dispatch</h2>
            <div className="input-filter">
              <div className="search-box">
                <i className="ri-search-line search-icon"></i>
                <input type="search" placeholder="Search Shipments..." />
              </div>
              <button className="filter-btn">
                <i className="ri-filter-line"></i> Filter
              </button>
            </div>
          </div>

          <div className="receiving-table-cards">
            {todayDispatches.map((each) => (
              <div className="receiving-table-card" key={each.order_id}>
                <div className="card-title">
                  <div className="icon-box">
                    <i className="ri-truck-line"></i>
                  </div>
                  <div className="company-box">
                    <p className="inbound-id">{each.order_id}</p>
                    <p className="company-name">{each.customer_name}</p>
                    <p className="po-id">{each.location}</p>
                  </div>
                </div>

                <div className="date-box">
                  <span>{each.date}</span>
                </div>

                <div className="receiving-table-card-left">
                  <div className="eta-orders">
                    <p className="inbound-items">{each.items} items</p>
                    <p className="eta">
                      <i className="ri-time-line"></i> ETA:{" "}
                      <span className={etaHandler(each.eta) === "Now" ? "time-green" : ""}>
                        {etaHandler(each.eta)}
                      </span>
                    </p>
                  </div>

                  <div className="status-box">
                    <span
                      className={
                        statusHandler(each.eta) === "pending"
                          ? "status-pending"
                          : statusHandler(each.eta) === "arrived"
                          ? "status-arrived"
                          : "status-in-transit"
                      }
                    >
                      {statusHandler(each.eta)}
                    </span>
                  </div>

                  <div className="receiving-card-btn">
                    <button>Process</button>
                  </div>
                </div>
              </div>
            ))}

            {todayDispatches.length === 0 && (
              <p className="no-orders">No dispatches scheduled for today.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispatchView;
