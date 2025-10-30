import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../global-states/ContextApi";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Loader from "./Loader";


const CompanyRegister = () => {
    const navigator = useNavigate();
     const {loading,setLoading} = useContext(Context);
     
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    gstNumber: "",
    regNumber: "",
    businessType: "",
    yearEstablished: "",
    warehouseSpace: "",
    warehouseCount: "",
    goodsType: "",
    operationalStates: "",
    contactName: "",
    contactDesignation: "",
    contactMobile: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const timer = setTimeout(()=>{
      setLoading(false);
    
      // alert("Account activated successfully!");
     navigator('/dashboard')
      return ()=>{clearTimeout(timer)}
    },5000)

    const timer2 = setTimeout(()=>{
      toast.success("Registered Successfully", {
       position: "top-right",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: false,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       transition: Bounce,
     });
      return ()=>{clearTimeout(timer2)}
    },2500)

    
   
    console.log(formData);
    
  };

  return (
    <div className="two-panel-container">
      {/* Left Panel */}
      {loading&&<Loader/>}
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="signup-page">
        <div className="signup-left">
        <div className="signup-left-title">
          <div className="square-box">SF</div>
          <span className="pro">StackFlow Pro</span>
        </div>

        <div className="signup-left-main-title">
          <span className="signup-left-title1">Join the Future of</span>
          <br />
          <span className="signup-left-title2">Warehouse Management</span>
        </div>

        <div className="signup-left-subtitile">
          <p>
            Transform your warehouse operations with cutting-edge technology and
            real-time insights. Empower your team with smarter workflows, faster
            decisions, and full visibility. Join StackFlow Pro today — where
            precision meets performance.
          </p>
        </div>
        <ul className="signup-left-list">
          <li>Real-time inventory tracking</li>
          <li>Automated workflow management</li>
          <li>Seamless team collaboration</li>
          <li>Advanced analytics & reporting</li>
        </ul>

        <div className="signup-left-features">
          <div className="feature-list">
            <div className="feature-icon">
              <i className="ri-map-pin-line"></i>
            </div>
            <p>Real-time Tracking</p>
          </div>
          <div className="feature-list">
            <div className="feature-icon">
              <i className="ri-time-line"></i>
            </div>
            <p>24/7 Operations</p>
          </div>
          <div className="feature-list">
            <div className="feature-icon">
              <i className="ri-money-rupee-circle-line"></i>
            </div>

            <p>Cost Reduction</p>
          </div>
        </div>
      </div>
        <div className="company-right">
          {/* Right Panel */}
          <div className="right-panel">
            <form className="register-form" onSubmit={handleSubmit}>
              <h2>Company Registration</h2>

              <h3>Company Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Company Name</label>
                  <input name="companyName"  onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phone"  onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input name="address"  onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>GST Number</label>
                  <input name="gstNumber" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Reg. Number</label>
                  <input name="regNumber" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Business Type</label>
                  <select name="businessType" onChange={handleChange}>
                    <option value="">--Select--</option>
                    <option>Private Limited</option>
                    <option>Partnership</option>
                    <option>Sole Proprietorship</option>
                    <option>LLP</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Year Established</label>
                  <input
                    type="number"
                    name="yearEstablished"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h3>Warehouse Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Total Space (sq.ft)</label>
                  <input name="warehouseSpace" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>No. of Warehouses</label>
                  <input name="warehouseCount" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Goods Type</label>
                  <input name="goodsType" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Operational States</label>
                  <input name="operationalStates" onChange={handleChange} />
                </div>
              </div>

              <h3>Primary Contact</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Contact Name</label>
                  <input name="contactName" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Designation</label>
                  <input name="contactDesignation" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Mobile</label>
                  <input name="contactMobile" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Alternate Email</label>
                  <input
                    type="email"
                    name="contactEmail"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="register-btn">
                Register Company
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegister;
