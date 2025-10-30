import React, { useEffect, useState } from 'react'
import VendorsForm from './VendorsForm';

const VendorsView = () => {
  const [visibleCount,setVisibleCount] = useState(1);
  const [showVendorsForm,setShowVendorsForm] = useState(false);
  const data = [
  {
    id: 1,
    vendor: "Zen Electronics",
    contact: "zen@gmail.com",
    phone: "+91 98238 72839",
    rating: 4.5,
    orders: 45,
    status: "active"
  },
  {
    id: 2,
    vendor: "Tech World",
    contact: "techworld@outlook.com",
    phone: "+91 98111 12345",
    rating: 4.2,
    orders: 38,
    status: "active"
  },
  {
    id: 3,
    vendor: "Smart Solutions",
    contact: "smart.solutions@gmail.com",
    phone: "+91 98888 65432",
    rating: 4.8,
    orders: 52,
    status: "active"
  },
  {
    id: 4,
    vendor: "NextGen Gadgets",
    contact: "contact@nextgen.com",
    phone: "+91 99001 11223",
    rating: 3.9,
    orders: 28,
    status: "inactive"
  },
  {
    id: 5,
    vendor: "Elite Devices",
    contact: "elite@devices.in",
    phone: "+91 99221 33445",
    rating: 4.6,
    orders: 61,
    status: "active"
  },
  {
    id: 6,
    vendor: "Global Traders",
    contact: "sales@globaltraders.com",
    phone: "+91 99887 77665",
    rating: 4.0,
    orders: 34,
    status: "active"
  },
  {
    id: 7,
    vendor: "Alpha Tech",
    contact: "support@alphatech.com",
    phone: "+91 98123 98765",
    rating: 3.7,
    orders: 20,
    status: "inactive"
  },
  {
    id: 8,
    vendor: "Digital Den",
    contact: "info@digitalden.co.in",
    phone: "+91 98000 44556",
    rating: 4.3,
    orders: 42,
    status: "active"
  },
  {
    id: 9,
    vendor: "Gadget Arena",
    contact: "arena@gadget.com",
    phone: "+91 98444 66778",
    rating: 4.1,
    orders: 37,
    status: "active"
  },
  {
    id: 10,
    vendor: "Byte Electronics",
    contact: "contact@byteelec.com",
    phone: "+91 98765 43210",
    rating: 4.9,
    orders: 75,
    status: "active"
  },
  {
    id: 11,
    vendor: "Urban Gear",
    contact: "urbangear@gmail.com",
    phone: "+91 98653 21098",
    rating: 4.4,
    orders: 48,
    status: "active"
  },
  {
    id: 12,
    vendor: "Infinity Supplies",
    contact: "infinity@supplies.com",
    phone: "+91 98899 55447",
    rating: 3.8,
    orders: 26,
    status: "inactive"
  },
  {
    id: 13,
    vendor: "Nova Tech",
    contact: "nova@techmail.com",
    phone: "+91 98332 87654",
    rating: 4.7,
    orders: 59,
    status: "active"
  },
  {
    id: 14,
    vendor: "Spark Distributors",
    contact: "spark@distrib.com",
    phone: "+91 98421 00987",
    rating: 4.2,
    orders: 40,
    status: "active"
  },
  {
    id: 15,
    vendor: "Quickmart Supplies",
    contact: "quickmart@supplies.com",
    phone: "+91 98198 99889",
    rating: 3.6,
    orders: 18,
    status: "inactive"
  },
  {
    id: 16,
    vendor: "Macro Tech",
    contact: "macro@techhub.com",
    phone: "+91 98555 87612",
    rating: 4.0,
    orders: 33,
    status: "active"
  },
  {
    id: 17,
    vendor: "Prime Ventures",
    contact: "prime@ventures.com",
    phone: "+91 98701 65432",
    rating: 4.6,
    orders: 60,
    status: "active"
  },
  {
    id: 18,
    vendor: "Metro Electronics",
    contact: "metro@electronics.in",
    phone: "+91 98444 22446",
    rating: 4.1,
    orders: 39,
    status: "active"
  },
  {
    id: 19,
    vendor: "Vision Corp",
    contact: "info@visioncorp.com",
    phone: "+91 98333 12398",
    rating: 4.5,
    orders: 51,
    status: "active"
  },
  {
    id: 20,
    vendor: "Tech Cartel",
    contact: "techcartel@shop.com",
    phone: "+91 98213 76432",
    rating: 4.0,
    orders: 36,
    status: "active"
  },
  {
    id: 21,
    vendor: "Omni Hub",
    contact: "sales@omnihub.com",
    phone: "+91 98087 11335",
    rating: 3.9,
    orders: 30,
    status: "inactive"
  }
];


function starRating(rating){
  var stars =[];
  var rem=rating;
  for(var i=1;i<=rating;i++){
    rem=rem-1;
    console.log(`rem ${i}: ${rem}`);
    
    stars.push("ri-star-fill");
  }
  console.log(`final rem ${i}: ${rem}`);
  if(rem>=0.8 && rem<1){
    stars.push("ri-star-fill");
  }else if(rem<0.8 && rem>0){
    stars.push("ri-star-half-fill");
  }else{
    // nothing
  }
  for(i=1;i<=Math.floor(5-rating);i++){
    stars.push("ri-star-line");
  }
return stars;
}
// starRating(3.5)
// console.log(stars);

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
          showVendorsForm && <VendorsForm setShowVendorsForm={setShowVendorsForm}/>
        }
      <div className="inventory-page-title">
        <h2>Vendors Management</h2>
        <button className="add-product" onClick={()=>{setShowVendorsForm((prev)=>!prev)}}>
          <i class="ri-add-fill"></i> Add Vendors
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
                <th>Vendor Name</th>
                <th>Contact</th>
                <th>Phone</th>
                <th>Rating</th>
                <th>Orders</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, visibleCount).map((each) => {
                return (
                  <>
                    <tr key={each.id}>
                      <td className='column-bold'>{each.vendor}</td>
                      <td>{each.contact}</td>
                      <td>{each.phone}</td>
                      <td>{
                        starRating(each.rating).map((star)=>{
                          return <span className='star-color'><i class={star}></i></span>
                        })
                        } ({each.rating})</td>
                      <td>{each.orders}</td>
                      <td><span className={each.status=="active"?"status-in":"status-out"}>{each.status}</span></td>
                      <td>
                        <button className="inventory-edit">Manage</button>
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
  )
}

export default VendorsView