import React from "react";

const ReturnsView = () => {
  const returnRequests = [
  {
    id: "RT004",
    customer: "Alice Brown",
    order_id: "ORD-004",
    reason: "Damaged on Arrival",
    date: "2024-06-17",
    amount: 75.25,
    status: "pending",
  },
  {
    id: "RT005",
    customer: "Michael Lee",
    order_id: "ORD-005",
    reason: "Late Delivery",
    date: "2024-06-18",
    amount: 120.00,
    status: "approved",
  },
  {
    id: "RT006",
    customer: "Emma Davis",
    order_id: "ORD-006",
    reason: "Changed Mind",
    date: "2024-06-19",
    amount: 59.99,
    status: "rejected",
  },
  {
    id: "RT007",
    customer: "Liam Wilson",
    order_id: "ORD-007",
    reason: "Item Missing",
    date: "2024-06-20",
    amount: 210.49,
    status: "processing",
  },
  {
    id: "RT008",
    customer: "Olivia Martinez",
    order_id: "ORD-008",
    reason: "Wrong Product",
    date: "2024-06-21",
    amount: 134.00,
    status: "pending",
  },
  {
    id: "RT009",
    customer: "Noah Anderson",
    order_id: "ORD-009",
    reason: "Duplicate Order",
    date: "2024-06-22",
    amount: 89.99,
    status: "approved",
  },
  {
    id: "RT010",
    customer: "Ava Thomas",
    order_id: "ORD-010",
    reason: "Color Mismatch",
    date: "2024-06-23",
    amount: 67.00,
    status: "processing",
  },
  {
    id: "RT011",
    customer: "William Garcia",
    order_id: "ORD-011",
    reason: "Quality Issues",
    date: "2024-06-24",
    amount: 95.70,
    status: "rejected",
  },
  {
    id: "RT012",
    customer: "Sophia Martinez",
    order_id: "ORD-012",
    reason: "No Longer Needed",
    date: "2024-06-25",
    amount: 110.10,
    status: "pending",
  },
  {
    id: "RT013",
    customer: "James Clark",
    order_id: "ORD-013",
    reason: "Packaging Damage",
    date: "2024-06-26",
    amount: 130.85,
    status: "approved",
  }
];


  const stats = [
    {
      title: "Pending Returns",
      icon: <i className="ri-time-line"></i>,
      count: 12,
      text: "awaiting review",
    },
    {
      title: "Processing",
      icon: <i className="ri-loop-left-line"></i>,
      count: 8,
      text: "in progress",
    },
    {
      title: "Completed Today",
      icon: <i className="ri-checkbox-circle-line"></i>,
      count: 15,
      text: "resolved",
    },
    {
      title: "Refund Amount",
      icon: <i className="ri-money-dollar-circle-line"></i>,
      count: "$2,450",
      text: "today",
    },
  ];

  const statusClass = {
    pending: "status-pending",
    approved: "status-approved",
    processing: "status-processing",
  };

  return (
    <div className="returns-page">
      <div className="inventory-page-title">
        <h2>Returns</h2>
        <div className="receiving-page-btns">
          <button className="add-product" style={{ background: "red", color: "#fff" }}>
            <i className="ri-loop-left-line"></i> Process Return
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
            <h2 className="title">Return Requests</h2>
            <div className="input-filter">
              <div className="search-box">
                <i className="ri-search-line search-icon"></i>
                <input type="search" placeholder="Search returns..." />
              </div>
            </div>
          </div>

          <div className="receiving-table-cards">
            {returnRequests.map((req) => (
              <div className="receiving-table-card" key={req.id}>
                <div className="card-title">
                  <div className="icon-box">
                    <i className="ri-loop-left-line"></i>
                  </div>
                  <div className="company-box">
                    <p className="inbound-id">{req.id}</p>
                    <p className="company-name">{req.customer}</p>
                    <p className="po-id">Order: {req.order_id}</p>
                  </div>
                </div>


                <div className="receiving-table-card-left">
                   <div className="date-box">
                  <p style={{ color: "red", fontWeight: "bold" , textAlign:'right'}}>{req.reason}</p>
                  <p style={{ fontSize: "13px", color: "#555", textAlign:'right' }}>{req.date}</p>
                  <p style={{ fontWeight: "bold", color: "red" , textAlign:'right'}}>${req.amount.toFixed(2)}</p>
                </div>
                  <div className="status-box">
                    <span className={statusClass[req.status]}>{req.status}</span>
                  </div>
                  <div className="receiving-card-btn">
                    <button>Review</button>
                  </div>
                </div>
              </div>
            ))}
            {returnRequests.length === 0 && (
              <p className="no-orders">No return requests for today.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsView;
