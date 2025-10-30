import React, { useState } from 'react'
import DashboardView from '../Components/DashboardView';
import InventoryView from '../Components/InventoryView';
import OrdersView from '../Components/OrdersView';
import VendorsView from '../Components/VendorsView';
import ReceivingView from '../Components/ReceivingView';
import DispatchView from '../Components/DispatchView';
import ReturnsView from '../Components/ReturnsView';
import WarehouseMapView from '../Components/WarehouseMapView';
import SupportView from '../Components/SupportView';
import SettingsView from '../Components/SettingsView';
import ReportsView from '../Components/ReportsView';


const Home = () => {

  const [menuClicked, setMenuClicked] = useState("dashboard");
  
  const menuOptionHandler = (option)=>{
    
    switch(option){
      case "dashboard":
        setMenuClicked("dashboard");
        break;
      case "inventory":
        setMenuClicked("inventory");
        break;
      case "orders":
        setMenuClicked("orders");
        break;
      case "vendors":
        setMenuClicked("vendors");
        break;
      case "receiving":
        setMenuClicked("receiving");
        break;
      case "dispatch":
        setMenuClicked("dispatch");
        break;
      case "returns":
        setMenuClicked("returns");
        break;
      case "warehousemap":
        setMenuClicked("warehousemap");
        break;
      case "reports":
        setMenuClicked("reports");
        break;
      case "support":
        setMenuClicked("support");
        break;
      case "settings":
        setMenuClicked("settings");
        break;
      default:
        setMenuClicked("dashboard");
        break;
    }
  }
  return (
    <div className='home-page'>
      <div className="home-menu">

        <div className="home-menu-title-section" onClick={()=>{menuOptionHandler("dashboard")}}>
          <div className="home-menu-title-box"><i class="ri-box-3-line"></i></div>
          <p className="home-menu-title" >StockFlow Pro</p>
        </div>
        <div className="line"></div>
        <ul className="home-menu-list">

          <li onClick={()=>{menuOptionHandler("dashboard")}} className={menuClicked=="dashboard"?'clicked':"list"}>
            <i class="ri-home-4-line"></i>
            <p>Dashboard</p>
          </li>
          <li onClick={()=>{menuOptionHandler("inventory")}} className={menuClicked=="inventory"?'clicked':"list"}>
            <i class="ri-box-3-line"></i>
            <p>Inventory</p>
          </li>
          <li onClick={()=>{menuOptionHandler("orders")}} className={menuClicked=="orders"?'clicked':"list"}>
            <i class="ri-shopping-cart-2-line"></i>
            <p>Orders</p>
          </li>
          <li onClick={()=>{menuOptionHandler("vendors")}} className={menuClicked=="vendors"?'clicked':"list"}>
            <i class="ri-group-line"></i>
            <p>Vendors</p>
          </li>
          <li onClick={()=>{menuOptionHandler("receiving")}} className={menuClicked=="receiving"?'clicked':"list"}>
            <i class="ri-arrow-left-right-line"></i>
            <p>Receiving</p>
          </li>
          <li onClick={()=>{menuOptionHandler("dispatch")}} className={menuClicked=="dispatch"?'clicked':"list"}>
            <i class="ri-truck-line"></i>
            <p>Dispatch</p>
          </li>
          <li onClick={()=>{menuOptionHandler("returns")}} className={menuClicked=="returns"?'clicked':"list"}>
            <i class="ri-exchange-box-line"></i>
            <p>Returns</p>
          </li>
          <li onClick={()=>{menuOptionHandler("warehousemap")}} className={menuClicked=="warehousemap"?'clicked':"list"}>
            <i class="ri-map-pin-line"></i>
            <p>Warehouse Map</p>
          </li>
          <li onClick={()=>{menuOptionHandler("reports")}} className={menuClicked=="reports"?'clicked':"list"}>
            <i class="ri-bar-chart-line"></i>
            <p>Reports</p>
          </li>
          <li onClick={()=>{menuOptionHandler("support")}} className={menuClicked=="support"?'clicked':"list"}>
            <i class="ri-customer-service-line"></i>
            <p>Support</p>
          </li>
          <li onClick={()=>{menuOptionHandler("settings")}} className={menuClicked=="settings"?'clicked':"list"}>
            <i class="ri-settings-2-line"></i>
            <p>Settings</p> 
          </li>
        </ul>
         <div className="line"></div>
         <p className='role'>Role : <span className='role-name'>Admin</span></p>
      </div>

      <div className="home-view">
        {
          menuClicked=="dashboard"&& <DashboardView/>
        }
        {
          menuClicked=="inventory" && <InventoryView/>
        }
        {
          menuClicked=="orders" && <OrdersView/>
        }
        {
          menuClicked=="vendors"&& <VendorsView/>
        }
        {
          menuClicked=="receiving"&& <ReceivingView/>
        }
        {
          menuClicked=="dispatch"&& <DispatchView/>
        }
        {
          menuClicked=="returns"&& <ReturnsView/>
        }
        {
          menuClicked=="warehousemap"&& <WarehouseMapView/>
        }
        {
          menuClicked=="reports"&& <ReportsView/>
        }
        {
          menuClicked=="support"&& <SupportView/>
        }
        {
          menuClicked=="settings"&& <SettingsView/>
        }
        
      </div>
    </div>
  )
}

export default Home