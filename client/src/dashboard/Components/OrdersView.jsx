import React, { useEffect, useState } from "react";
import OrdersForm from "./OrdersForm";

const OrdersView = () => {
  const [visibleCount,setVisibleCount] = useState(1);
  const [showOrderForm, setShowOrderForm]= useState(false);
  const data = [
  {
    order_id: "#12345",
    customer: "Sarvana",
    items: 4,
    status: "processing",
    date: "2024-03-15",
    value: "₹2,450",
  },
  {
    order_id: "#12346",
    customer: "Meena",
    items: 2,
    status: "packed",
    date: "2024-03-16",
    value: "₹1,230",
  },
  {
    order_id: "#12347",
    customer: "Ravi",
    items: 3,
    status: "dispatched",
    date: "2024-03-17",
    value: "₹3,100",
  },
  {
    order_id: "#12348",
    customer: "Anjali",
    items: 1,
    status: "delivered",
    date: "2024-03-18",
    value: "₹850",
  },
  {
    order_id: "#12349",
    customer: "Kumar",
    items: 5,
    status: "received",
    date: "2024-03-19",
    value: "₹4,570",
  },
  {
    order_id: "#12350",
    customer: "Priya",
    items: 2,
    status: "processing",
    date: "2024-03-20",
    value: "₹1,450",
  },
  {
    order_id: "#12351",
    customer: "Arun",
    items: 6,
    status: "packed",
    date: "2024-03-21",
    value: "₹5,200",
  },
  {
    order_id: "#12352",
    customer: "Divya",
    items: 4,
    status: "dispatched",
    date: "2024-03-22",
    value: "₹3,890",
  },
  {
    order_id: "#12353",
    customer: "Naveen",
    items: 1,
    status: "delivered",
    date: "2024-03-23",
    value: "₹720",
  },
  {
    order_id: "#12354",
    customer: "Lakshmi",
    items: 3,
    status: "received",
    date: "2024-03-24",
    value: "₹2,100",
  },
  {
    order_id: "#12355",
    customer: "Karthik",
    items: 2,
    status: "processing",
    date: "2024-03-25",
    value: "₹1,980",
  },
  {
    order_id: "#12356",
    customer: "Sneha",
    items: 4,
    status: "packed",
    date: "2024-03-26",
    value: "₹3,250",
  },
  {
    order_id: "#12357",
    customer: "Ganesh",
    items: 2,
    status: "dispatched",
    date: "2024-03-27",
    value: "₹1,740",
  },
  {
    order_id: "#12358",
    customer: "Rekha",
    items: 5,
    status: "delivered",
    date: "2024-03-28",
    value: "₹4,980",
  },
  {
    order_id: "#12359",
    customer: "Surya",
    items: 3,
    status: "received",
    date: "2024-03-29",
    value: "₹2,870",
  },
  {
    order_id: "#12360",
    customer: "Monica",
    items: 1,
    status: "processing",
    date: "2024-03-30",
    value: "₹650",
  },
  {
    order_id: "#12361",
    customer: "Vikram",
    items: 6,
    status: "packed",
    date: "2024-03-31",
    value: "₹5,600",
  },
  {
    order_id: "#12362",
    customer: "Lavanya",
    items: 2,
    status: "dispatched",
    date: "2024-04-01",
    value: "₹1,980",
  },
  {
    order_id: "#12363",
    customer: "Gokul",
    items: 4,
    status: "delivered",
    date: "2024-04-02",
    value: "₹3,770",
  },
  {
    order_id: "#12364",
    customer: "Aishwarya",
    items: 3,
    status: "received",
    date: "2024-04-03",
    value: "₹2,360",
  },
  {
    order_id: "#12365",
    customer: "Deepak",
    items: 5,
    status: "processing",
    date: "2024-04-04",
    value: "₹4,330",
  }
];
useEffect(()=>{
  const timer = setInterval(()=>{
    setVisibleCount((prev)=>{
      if(prev<data.length){
        return prev+1
      }
    })
  },100)
  return ()=> clearInterval(timer); 
},[data.length])
  return (
    <div className="inventory-page">
      {
        showOrderForm && <OrdersForm setShowOrderForm={setShowOrderForm}/>
      }
      <div className="inventory-page-title">
        <h2>Orders Management</h2>
        <button className="add-product" onClick={()=>{setShowOrderForm((prev)=>!prev)}}>
          <i class="ri-add-fill"></i> Import Orders
        </button>
      </div>

      <div className="inventory-main-section">
        <div className="input-filter">
          <div className="search-box">
            <i class="ri-search-line search-icon"></i>
            <input
              type="search"
              placeholder="Search orders, products, SKUs..."
            />
          </div>
          <button className="filter-btn">
            <i class="ri-filter-line"></i> Filter
          </button>
        </div>
        <div className="inventory-table-section">
          <table className="inventory-main-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Status</th>
                <th>Date</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0,visibleCount).map((each) => {
                return (
                  <>
                    <tr key={each.order_id}>
                      <td className='column-bold'>{each.order_id}</td>
                      <td>{each.customer}</td>
                      <td>{each.items}</td>
                      <td>
                        <span  className={
                          each.status == "processing"
                            ? "processing"
                            : each.status == "packed"
                            ? "packed"
                            : each.status == "dispatched"
                            ? "dispatched"
                            : each.status == "delivered"
                            ? "delivered"
                            : "received"
                        }>{(each.status).toUpperCase()}</span>
                      </td>
                      <td>{each.date}</td>
                      <td className="order-value">{each.value}</td>
                      <td>
                        <button className="inventory-edit">
                          <i class="ri-eye-line"></i> View
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersView;
