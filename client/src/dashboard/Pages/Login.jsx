import React, { useContext, useState } from 'react';

import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../global-states/ContextApi';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Loader from '../Components/Loader';

const Login = () => {
  const navigator = useNavigate();
     const {loading,setLoading} = useContext(Context);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setLoading(true);
    const timer = setTimeout(()=>{
      setLoading(false);
    
      // alert("Account activated successfully!");
     navigator('/dashboard');
      return ()=>{clearTimeout(timer)}
    },5000)

    const timer2 = setTimeout(()=>{
      toast.success("Logged In Successfully", {
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
    <div className="signup-page">
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
      <div className="signup-left">
        <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
       
        <h2>StackFlow Pro</h2>
        <p className="tagline">Real-Time Smart Warehouse Management System</p>

        <div className="input-group">
          <label>Email</label>
          <div className="input-wrapper">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              
            />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="input-wrapper">
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              
            />
          </div>
        </div>

        <div className="input-group">
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange} >
            <option value="">Select your role</option>
            <option>Admin</option>
            <option>Warehouse Manager</option>
            <option>Inventory Staff</option>
            <option>Delivery Manager</option>
            <option>Vendor/Supplier</option>
            <option>Customer Support</option>
          </select>
        </div>

        <button type="submit" className="login-btn">Sign In</button>
        <p className="forgot-link">Forgot your password?</p>
      </form>
    </div>
      </div>
    </div>
  );
};

export default Login;
