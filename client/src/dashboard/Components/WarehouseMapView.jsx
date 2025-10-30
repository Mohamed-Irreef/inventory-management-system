import React, { useRef, useState } from "react";
import Map from "./Map";


function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


const WarehouseMapView = () => {

  const stageRef = useRef(null);
  const [selectedOption,setSelectedOption] = useState("all");
  console.log("selected:",selectedOption);
  
  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(uri);
    // we also can save uri as file
    downloadURI(uri, 'stage.png');
  };
  const [binProduct, setBinProduct] = useState({
        addr: "None",
        zone: "None",
        aisle: "None",
        rack: "None",
        bin: "None",
        status: "None",
        sku: "None",
        product: "None",
        quantity: 0,
        capacity: 0,
      });
      
  const stats = [
    {
      icon: <i class="ri-circle-fill circle-green"></i>,
      option: "active",
      title: "REC",
      sub: "Receiving Area",
      percentage: 45,
    },
    {
      icon: <i class="ri-circle-fill circle-red"></i>,
      option: "full",
      title: "STO",
      sub: "Storage Area",
      percentage: 87,
    },
    {
      icon: <i class="ri-circle-fill circle-yellow"></i>,
      option: "busy",
      title: "PICK",
      sub: "Picking Zone",
      percentage: 62,
    },
    {
      icon: <i class="ri-circle-fill circle-blue"></i>,
      option: "available",
      title: "PACK",
      sub: "Packing Area",
      percentage: 34,
    },
    {
      icon: <i class="ri-circle-fill circle-ornage"></i>,
      option: "loading",
      title: "SHIP",
      sub: "Shipping Area",
      percentage: 78,
    },
    {
      icon: <i class="ri-circle-fill circle-purple"></i>,
      option: "processing",
      title: "RET",
      sub: "Return Zone",
      percentage: 23,
    },
    {
      icon: <i class="ri-circle-fill circle-sky"></i>,
      option: "active",
      title: "COLD",
      sub: "Cold Storage",
      percentage: 91,
    },
    {
      icon: <i class="ri-circle-fill circle-lightred"></i>,
      option: "restricted",
      title: "HAZ",
      sub: "Hazardous Materials",
      percentage: 15,
    },
  ];
  return (
    <div className="warehouse-page">
      <div className="inventory-page-title">
        <h2>Warehouse Map</h2>
        <div className="receiving-page-btns">
          <button className="add-product">
            <i class="ri-eye-line"></i> Heatmap View
          </button>
          <button className="add-product" onClick={handleExport}>
            <i class="ri-download-2-line"></i> Export Layout
          </button>
        </div>
      </div>

      <div className="map-controls">
        <h2>
          <i class="ri-settings-2-line"></i> Map & Controls
        </h2>
        <div className="inputs-section">
          <div className="search-box">
            <i class="ri-search-line"></i>
            <input type="search" placeholder="search SKU, Product id" />
          </div>

          <div className="select-option">
            <select name="zone" id="zone" onChange={(e)=>{setSelectedOption(e.target.value)}}>
              <option value="all" >All Zones</option>
              <option value="receiving">Receiving Area</option>
              <option value="storage">Storage Area</option>
              <option value="picking">Picking Zone</option>
              <option value="packing">Packing Area</option>
              <option value="shipping">Shipping Dock</option>
              <option value="returns">Returns Zone</option>
              <option value="cold">Cold Storage</option>
              <option value="hazordous">Hazardous Materials</option>
            </select>
          </div>

          <div className="select-option">
            <select name="status" id="status">
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="full">Full</option>
              <option value="partial">Partial</option>
              <option value="reserved">Reserved</option>
              <option value="picking">Picking</option>
              <option value="packing">Packing</option>
            </select>
          </div>

          <div className="zoom-btns">
            <button className="zoom-out">
              <i class="ri-zoom-out-line"></i>
            </button>
            <button className="zoom-in">
              <i class="ri-zoom-in-line"></i>
            </button>
          </div>
          <div className="path">
            <button>
              <i class="ri-navigation-line"></i> Show Paths
            </button>
          </div>
          <div className="full-view">
            <button>
              <i class="ri-expand-diagonal-line"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="warehouse-map-cards">
        {stats.map((each) => {
          return (
            <div className="warehouse-map-card">
              <div className="map-card-title">

                {each.icon} <span>{each.option}</span>
              </div>
              <p className="card-name">{each.title}</p>
              <p className="sub"> {each.sub}</p>
              <p className="percentage">{each.percentage}%</p>
            </div>
          );
        })}
      </div>

      <div className="warehouse-map-area">

        <div className="warehouse-map-box">

          <div className="warehouse-map-box-title">
            <h3>Live Warehouse Layout</h3>
            <div className="warehouse-box">
              <p>Zoom 100% | 17 bins shown</p>
            </div>
          </div>

          <div className="warehouse-map">
            <Map selectedOption={selectedOption} binProduct={binProduct} setBinProduct={setBinProduct} handleExport={handleExport} stageRef={stageRef}/>
          </div>
        </div>

        <div className="warehouse-map-details">
          <h3>Live Bin Details</h3>
          <div className="bin-details">
            <p className="bin-name">{binProduct.addr}</p>
            <p className="zone-name"><b>Zone: </b><span>{binProduct.zone}</span></p>
            <p><b>Aisle: </b><span>{binProduct.aisle}</span></p>
            <p><b>Rack: </b><span>{binProduct.rack}</span></p>
            <p><b>Shelf: </b><span>{binProduct.bin}</span></p>
            <p><b>Status: </b><i></i><span>{binProduct.status}</span></p>
            <p><b>SKU: </b><span>{binProduct.sku}</span></p>
            <p><b>Product: </b><span>{binProduct.product}</span></p>
            <p><b>Quantity: </b><span>{binProduct.quantity}/{binProduct.capacity}</span></p>
            <progress id="file" value={(binProduct.quantity/binProduct.capacity)*100} max="100"> 32% </progress>
            <div className="map-detail-btn">
              <button>Close Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseMapView;
