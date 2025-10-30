import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import ProductsForm from './ProductsForm';
import InventoryOrders from './InventoryOrders';
import OrdersForm from './OrdersForm';

const InventoryView = () => {
  
  const [visibleCount, setVisibleCount] = useState(1);
  const[showOrderForm,setShowOrderForm] = useState(false);
  const [showInventoryOrder, setShowInventoryOrder] = useState(false);
  // const [showorderForm,setShowOrderForm] = useState(false)
  const data = [
  {
    id: 1,
    sku: "SKU-A001",
    product_name: "Wireless Headphones",
    qty: 130,
    location: "A1-B2",
    status: "In Stock",
  },
  {
    id: 2,
    sku: "SKU-A002",
    product_name: "Bluetooth Speaker",
    qty: 45,
    location: "B2-C3",
    status: "Low Stock",
  },
  {
    id: 3,
    sku: "SKU-A003",
    product_name: "Smartwatch",
    qty: 0,
    location: "C1-D1",
    status: "Out of Stock",
  },
  {
    id: 4,
    sku: "SKU-A004",
    product_name: "Gaming Mouse",
    qty: 75,
    location: "D3-E2",
    status: "In Stock",
  },
  {
    id: 5,
    sku: "SKU-A005",
    product_name: "Mechanical Keyboard",
    qty: 110,
    location: "A2-A3",
    status: "In Stock",
  },
  {
    id: 6,
    sku: "SKU-A006",
    product_name: "Laptop Stand",
    qty: 32,
    location: "B1-B4",
    status: "Low Stock",
  },
  {
    id: 7,
    sku: "SKU-A007",
    product_name: "USB-C Charger",
    qty: 210,
    location: "C4-D2",
    status: "In Stock",
  },
  {
    id: 8,
    sku: "SKU-A008",
    product_name: "HDMI Cable",
    qty: 300,
    location: "E1-F1",
    status: "In Stock",
  },
  {
    id: 9,
    sku: "SKU-A009",
    product_name: "Portable SSD",
    qty: 18,
    location: "F2-F3",
    status: "Low Stock",
  },
  {
    id: 10,
    sku: "SKU-A010",
    product_name: "Webcam 1080p",
    qty: 0,
    location: "G1-G2",
    status: "Out of Stock",
  },
  {
    id: 11,
    sku: "SKU-A011",
    product_name: "Wireless Keyboard",
    qty: 65,
    location: "H1-H3",
    status: "In Stock",
  }
];
 useEffect(() => {
  const timer = setInterval(() => {
    setVisibleCount((prev) => {
      if (prev < data.length) return prev + 1;
      clearInterval(timer);
      return prev;
    });
  }, 100);

  return () => clearInterval(timer); // cleanup
}, [data.length]);
  return (
    <>
      <div className="inventory-page">
        {/* {showorderForm && <OrdersForm setShowOrderForm={setShowOrderForm}/>} */}
        {
          showOrderForm && <OrdersForm setShowOrderForm={setShowOrderForm}/>
        }
    
    
        <div className="inventory-page-title">
          <h2>Inventory Management </h2>
          {
            !showInventoryOrder && <button className='add-product' onClick={()=>{setShowInventoryOrder((prev)=>!prev)}}>See Orders <i class="ri-arrow-right-s-fill"></i></button>
          }
          {
            showInventoryOrder && <>
              <div className="inventory-btns">
                 <button className='add-product inventory-btn' onClick={()=>{setShowInventoryOrder((prev)=>!prev)}}><i class="ri-arrow-left-s-fill"></i> See Inventory</button>
                <button className='add-product inventory-btn' onClick={()=>{setShowOrderForm((prev)=>!prev)}}>Add Order <i class="ri-add-line"></i></button>
              </div>
            </>
          }
        </div>

        {
          !showInventoryOrder ?<>
          <div className="inventory-main-section">
          <div className="input-filter">
            <div className="search-box">
              <i class="ri-search-line search-icon"></i>
              <input type="search" placeholder="Search orders, products, SKUs..." />
            </div>
            <button className="filter-btn"><i class="ri-filter-line"></i> Filter</button>
          </div>
         <div className="inventory-table-section">
           <table className='inventory-main-table'>
            <thead>
              <tr>
                <th>SKU</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
               {
      data.slice(0, visibleCount).map((each) => (
        <tr key={each.id}>
          <td className="column-bold">{each.sku}</td>
          <td>{each.product_name}</td>
          <td>{each.qty}</td>
          <td>{each.location}</td>
          <td>
            <span className={each.qty < 50 ? "status-out" : "status-in"}>
              {each.status}
            </span>
          </td>
          <td>
            <button className="inventory-edit">Edit</button>
          </td>
        </tr>
      ))
    }
            </tbody>
          </table>
         </div>
        </div>
          </>:
          <>
          <InventoryOrders />
          </>
        }

      </div>
    </>
  )
}

export default InventoryView