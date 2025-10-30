import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { Context } from "../../global-states/ContextApi";
import { FaSlack } from "react-icons/fa";

const TermsAndConditions = () => {
 
    const [enableBtn,setEnableBtn] = useState(false);
    const {loading,setLoading} = useContext(Context);

    const navigator = useNavigate();
  const handleCheckbox = () => {
    setEnableBtn((prev)=>!prev)
  };

  function continueHandler(){
    setLoading(true);
    const timer = setTimeout(()=>{
      setLoading(false);
      navigator("/account-activation")
      return ()=>{clearTimeout(timer)}
    },2000)
  }
  return (
    <div className="terms-condition-page">

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
  
      <div className="terms-right">
        {loading&&<Loader/>}
      <div className="terms-container">
      {/* <Loader/> */}
      <h2>Terms and Conditions</h2>
      <div className="terms-scroll">
        <p style={{textAlign:'center', fontSize:'14px'}}>Last Updated: June 2025</p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By registering and using the Warehouse Management System (“WMS”), you
          agree to be bound by these Terms and Conditions. If you do not agree,
          do not use the system.
        </p>

        <h3>2. User Registration</h3>
        <ul>
          <li>All companies must provide accurate and up-to-date information.</li>
          <li>The registering entity is responsible for maintaining the confidentiality of its account credentials.</li>
        </ul>

        <h3>3. Use of the System</h3>
        <ul>
          <li>WMS is to be used only for lawful warehouse management purposes.</li>
          <li>You must not misuse the system to harm others or disrupt operations.</li>
          <li>Automation or scraping of data without permission is strictly prohibited.</li>
        </ul>

        <h3>4. Data Privacy & Security</h3>
        <ul>
          <li>We prioritize your data security and take industry-standard measures to protect it.</li>
          <li>We may collect anonymized data to improve system performance and reliability.</li>
        </ul>

        <h3>5. Responsibilities</h3>
        <ul>
          <li>The company is solely responsible for ensuring inventory accuracy, shipment updates, and timely data uploads.</li>
          <li>Mismanagement or unauthorized access due to negligence is the company’s liability.</li>
        </ul>

        <h3>6. Account Suspension or Termination</h3>
        <ul>
          <li>Accounts may be suspended or terminated for any activity that violates these terms.</li>
          <li>No refunds or compensation shall be provided for terminated accounts due to violations.</li>
        </ul>

        <h3>7. Limitation of Liability</h3>
        <ul>
          <li>We are not responsible for data loss, business interruption, or damages caused by third-party attacks or misuse.</li>
          <li>Our total liability shall not exceed the subscription fee paid in the last 3 months.</li>
        </ul>

        <h3>8. System Updates & Maintenance</h3>
        <ul>
          <li>Scheduled maintenance will be notified in advance. Emergency updates may cause brief downtimes.</li>
          <li>You agree to accept system updates and new terms when applicable.</li>
        </ul>

        <h3>9. Governing Law</h3>
        <p>These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Tamil Nadu.</p>

        <h3>10. Changes to Terms</h3>
        <p>We reserve the right to modify these terms at any time. Continued use indicates your acceptance of the new terms.</p>
      </div>

      <label className="checkbox-container">
       <div className="terms-button">
         <input type="checkbox"  onChange={handleCheckbox} />
        <span className="checkmark"></span>
        I have read and accept the Terms & Conditions.
       </div>

        <button className={enableBtn?`enable-btn`:`disable-btn`} disabled={!enableBtn?true:false} onClick={()=>{continueHandler()}}>Continue</button>
      </label>  
    </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
