import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../global-states/ContextApi";
import Loader from "../Components/Loader";
import { ToastContainer, toast,Bounce } from 'react-toastify';

const EmailVerification = ({ userData, onBack }) => {
  
  const [code, setCode] = useState("");
  const {loading,setLoading} = useContext(Context);
  const [timer, setTimer] = useState(180); // 3 minutes
  const [resendAvailable, setResendAvailable] = useState(false);
  const navigator= useNavigate();
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setResendAvailable(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleResend = () => {
    setTimer(180);
    setResendAvailable(false);
    alert("Verification code resent to your email.");
    // Add resend API logic here
  };

  const handleVerify = () => {
    
    setLoading(true);
    const timer = setTimeout(()=>{
      setLoading(false);
    
      // alert("Account activated successfully!");
      navigator('/company-registration')
      return ()=>{clearTimeout(timer)}
    },4000)
     const timer2 = setTimeout(()=>{
          toast.success("Activated Successfully", {
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
    // Add verification logic here
  };

  return (
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
      <div className="signup-right">
        <div className="verify-container">
      {loading && <Loader />}
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
      <div className="verify-card">
        <h2>Account Activation</h2>

        <div className="form-group">
          <label>Username</label>
          <input value="Mohamed Irreef" disabled />
        </div>

        <div className="form-group">
          <label>Registered Email</label>
          <input value="mdirreef@gmail.com" disabled />
        </div>

        <p className="info-text">
          A 6-digit verification code has been sent to your registered email.
          Please enter it below. This code will expire in:
          <span className="timer"> {formatTime(timer)}</span>
        </p>

        <div className="form-group">
          <label>Enter 6-digit Code</label>
          <input
            type="text"
            maxLength={6}
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/, ""))}
          />
        </div>

        <div className="button-row">
          <button className="back-btn">Back to Edit</button>
          <button
            className="verify-btn"
            disabled={code.length !== 6 || timer === 0}
            onClick={handleVerify}
          >
            Activate
          </button>
        </div>

        {resendAvailable && (
          <p className="resend-link" onClick={handleResend}>
            Didn't get the code? <span>Resend Code</span>
          </p>
        )}
      </div>
    </div>
      </div>
    </div>
  );
};

export default EmailVerification;
