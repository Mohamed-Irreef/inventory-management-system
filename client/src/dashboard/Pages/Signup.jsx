import React, { useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { Context } from "../../global-states/ContextApi";
import Loader from "../Components/Loader";

const Signup = () => {
  const {loading,setLoading} =useContext(Context);
  const navigate=useNavigate();
  const [pwdMsg,setPwdMsg] =useState("");
  function registrationHandler(e){
    e.preventDefault();

    const formData = new FormData(e.target);
 
    const formValues ={
      name:formData.get("fname"),
      email:formData.get("email"),
      password:formData.get("password"),
      confirmPwd: formData.get("confirmPwd"),
      role:formData.get("role"),
      // terms:(formData.get("terms")=="on"?true:false)
    }
    console.log("Forms: ",formValues);
    
    setLoading(true);
    const timer = setTimeout(()=>{
      setLoading(false);
      navigate('/privacy-policy');

      return ()=>{clearTimeout(timer)}
    },2000);
   
  }

  return (
    <div className="signup-page">
      {loading&&<Loader/>}
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
      <div className="signup-right">
        <div className="signup-form-section">

          <form action="" onSubmit={registrationHandler}>
            <h3>Create an account</h3>
            <p>Get started with StackFlow Pro</p>

            <div className="field-input">
              <label htmlFor="fname">Full Name <span>*</span></label>
              <input type="text" id="fname" placeholder="Enter your full name" name="fname"/>
            </div>

            <div className="field-input">
              <label htmlFor="email">Email Address <span>*</span></label>
              <input type="email" id="email" placeholder="Enter your email" name="email"/>
            </div>

            {/* <div className="field-input">
              <label htmlFor="mobile">Contact Number <span>*</span></label>
              <input type="tel" id="mobile" placeholder="Enter your Contact Number" />
            </div> */}


            <div className="field-input">
              <label htmlFor="password">Password <span>*</span></label>
              <input type="password" id="password" placeholder="Enter Strong Password" name="password"/>
            </div>

            <div className="field-input">
              <label htmlFor="confirmPwd" >Confirm Password <span>*</span></label>
              <input type="password" id="confirmPwd" placeholder="Confirm Password" name="confirmPwd"/>
            </div>

            <div className="field-input">
              <label htmlFor="cars">Choose Role</label>
              <select name="role" id="role" defaultValue="admin">
                <option value="admin">Warehouse Admin</option>
                {/* <option value="manager">Warehouse Manager</option> */}
              </select>
            </div>

            {/* <div className="field-input-check">
              <input type="checkbox" id="terms" name="terms"/>
               <label htmlFor="terms">I agree to the <Link to="/privacy-policy"><span>Terms of Service</span> and <span>Privacy Policy</span></Link></label>
            </div> */}


            <div className="form-button">
              <button type="submit">Get Started</button>
            </div>

            <p className="button-sub">Already have an account? <span><Link to='/login'>Log in</Link></span></p>
          </form>


        </div>
      </div>
    </div>
  );
};

export default Signup;
