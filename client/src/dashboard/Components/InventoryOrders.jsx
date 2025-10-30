import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import ProductsForm from './ProductsForm';

const InventoryOrders = () => {
  
  const [visibleCount, setVisibleCount] = useState(1);
  const[showAddProdForm,setShowAddProdForm] = useState(false);

  //receiving starts
    const [receivingForm,setReceivingForm] = useState(false);
   
  const data = [
    // Today's date - 2025-06-20
    { id: "IN001", company: "TechSupplier.Inc", po_id: "PO-2025-001", items: 45, date: "2025-06-25", status: "pending", eta: "14:00" },
    { id: "IN002", company: "ElectroMart Pvt Ltd", po_id: "PO-2025-002", items: 30, date: "2025-06-25", status: "pending", eta: "11:00" },
    { id: "IN003", company: "SmartEdge Corp", po_id: "PO-2025-003", items: 60, date: "2025-06-25", status: "pending", eta: "12:00" },
    { id: "IN004", company: "NexGen Solutions", po_id: "PO-2025-004", items: 25, date: "2025-06-25", status: "pending", eta: "12:30" },
    { id: "IN005", company: "FutureTech India", po_id: "PO-2025-005", items: 75, date: "2025-06-25", status: "pending", eta: "17:30" },
    { id: "IN006", company: "InnoWare Ltd", po_id: "PO-2025-006", items: 40, date: "2025-06-25", status: "pending", eta: "19:00" },
    { id: "IN007", company: "NextPhase Global", po_id: "PO-2025-007", items: 55, date: "2025-06-25", status: "pending", eta: "10:00" },
    { id: "IN008", company: "Sparkline Electronics", po_id: "PO-2025-008", items: 20, date: "2025-06-25", status: "pending", eta: "12:45" },
  
    // 2025-06-21
    { id: "IN009", company: "CircuitBase Systems", po_id: "PO-2025-009", items: 90, date: "2025-06-26", status: "pending", eta: "09:00" },
    { id: "IN010", company: "Alpha Components", po_id: "PO-2025-010", items: 35, date: "2025-06-26", status: "pending", eta: "09:45" },
    { id: "IN011", company: "ResoTech Pvt Ltd", po_id: "PO-2025-011", items: 50, date: "2025-06-26", status: "pending", eta: "16:00" },
    { id: "IN012", company: "Visionary Devices", po_id: "PO-2025-012", items: 28, date: "2025-06-26", status: "pending", eta: "19:30" },
    { id: "IN013", company: "Microchip India", po_id: "PO-2025-013", items: 70, date: "2025-06-26", status: "pending", eta: "11:30" },
    { id: "IN014", company: "CompTech Global", po_id: "PO-2025-014", items: 33, date: "2025-06-26", status: "pending", eta: "13:30" },
    { id: "IN015", company: "NanoSoft Corp", po_id: "PO-2025-015", items: 65, date: "2025-06-26", status: "pending", eta: "15:00" },
  
    // 2025-06-22
    { id: "IN016", company: "BitLine Technologies", po_id: "PO-2025-016", items: 42, date: "2025-06-27", status: "pending", eta: "18:00" },
    { id: "IN017", company: "Zenith Instruments", po_id: "PO-2025-017", items: 37, date: "2025-06-27", status: "pending", eta: "08:30" },
    { id: "IN018", company: "PeakLogic Pvt Ltd", po_id: "PO-2025-018", items: 80, date: "2025-06-27", status: "pending", eta: "19:00" },
    { id: "IN019", company: "GreenWave Innovations", po_id: "PO-2025-019", items: 26, date: "2025-06-27", status: "pending", eta: "10:30" },
    { id: "IN020", company: "Infoware Systems", po_id: "PO-2025-020", items: 49, date: "2025-06-27", status: "pending", eta: "14:00" },
  
    // 2025-06-23
    { id: "IN021", company: "LogixPower Corp", po_id: "PO-2025-021", items: 52, date: "2025-06-28", status: "pending", eta: "10:30" },
    { id: "IN022", company: "NextEra Technologies", po_id: "PO-2025-022", items: 34, date: "2025-06-28", status: "pending", eta: "11:45" },
    { id: "IN023", company: "Quantix Digital", po_id: "PO-2025-023", items: 67, date: "2025-06-28", status: "pending", eta: "13:15" },
    { id: "IN024", company: "SkyLogic Inc", po_id: "PO-2025-024", items: 43, date: "2025-06-28", status: "pending", eta: "15:30" },
    { id: "IN025", company: "VirtuChip Systems", po_id: "PO-2025-025", items: 31, date: "2025-06-28", status: "pending", eta: "17:00" }
  ];
  
  
  var newList=[];
  function todayShipments(dataArray){
    for(var i = 0; i < dataArray.length; i++){
      var sDate =data[i].date;
      var [year,month,date] = sDate.toString().split('-');
    const d = new Date();
    console.log(d.getMonth());
    
   
      newList.push(dataArray[i]);
    
    // if(d.getFullYear()==parseInt(year) && d.getMonth()+1==parseInt(month) && d.getDate()==parseInt(date) ){
    //   newList.push(dataArray[i]);
    // }
    }
  }
  todayShipments(data)
  
  // console.log("new List: "+ newList);
  
    function etaHandler(eta){
      var d = new Date(); 
      var [hr] =eta.split(':');
      const rem=parseInt(hr)-d.getHours();
      if(rem!=0){
        return `${rem} hours`
      }else if(rem==0){
        return `Now`
      }else{
        // return "delayed"
      }
    }
    function statusHandler(eta){
      var d = new Date();
       var [hr] =eta.split(':');
      const rem=parseInt(hr)-d.getHours();
      if(rem>0 & rem<7){
        return `in-transit`
      }else if(rem==0){
        return `arrived`
      }else if(rem<0){
        return `arrived`  // or may be delayed
      }else{
        return `pending`
      }
    }
    const stats = [
      {
        title: "Expected Today",
        icon: <i class="ri-box-3-line"></i>,
        count: 8,
        text: "shipments",
      },
      {
        title: "Pending Processing",
        icon: <i class="ri-edit-circle-line"></i>,
        count: 12,
        text: "items",
      },
      {
        title: "Completed Today",
        icon: <i class="ri-checkbox-circle-line"></i>,
        count: 24,
        text: "received",
      },
      {
        title: "Quality Issues",
        icon: <i class="ri-error-warning-line"></i>,
        count: 2,
        text: "items flagged",
      },
    ];

  //receiving ends
  
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
        {
          showAddProdForm && <ProductsForm setShowAddProdForm={setShowAddProdForm}/>
        }
      
    
       

        <div className="inventory-main-section">
          <div className="input-filter">
            <div className="search-box">
              <i class="ri-search-line search-icon"></i>
              <input type="search" placeholder="Search orders, products, SKUs..." />
            </div>
            <button className="filter-btn"><i class="ri-filter-line"></i> Filter</button>
          </div>
         {/* <div className="inventory-table-section">
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
         </div> */}


          <div className="receiving-table-cards1">
            {/* Single card starts */}
            {
              newList.slice(0, visibleCount).map((each)=>{
                return(
                  <div className="receiving-table-card" key={each.id}>
              <div className="card-title">
                <div className="icon-box">
                  <i class="ri-box-3-line"></i>
                </div>
                <div className="company-box">
                  <p className="inbound-id">{each.id}</p>
                  <p className="company-name">{each.company}</p>
                  <p className="po-id">PO: {each.po_id}</p>
                </div>
              </div>

              <div className="date-box">
                <span>{each.date}</span>
              </div>

              <div className="receiving-table-card-left">
                <div className="eta-orders">
                <p className="inbound-items">{each.items} items</p>
                <p className="eta">
                  <i class="ri-time-line"></i> ETA: <span className={etaHandler(each.eta)=="now"?"time-green":null}>{etaHandler(each.eta)}</span>
                </p>
              </div>

              <div className="status-box">
                <span className={
                          statusHandler(each.eta) == "pending"
                            ? "status-pending"
                            : statusHandler(each.eta) == "arrived"
                            ? "status-arrived"
                            : statusHandler(each.eta) == "cancelled"
                            ? "status-cancelled"
                            : statusHandler(each.eta) == "delayed"
                            ? "status-delayed"
                            : "status-in-transit"
                        }>{statusHandler(each.eta)}</span>
              </div>

              <div className="receiving-card-btn">
                <button>Process</button>
              </div>
              </div>
            </div>
                )
              })
            }
            {/* Single card Ends */}
           
          </div>


        </div>
      </div>
    </>
  )
}

export default InventoryOrders;