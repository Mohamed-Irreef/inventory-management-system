import React from 'react'
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'

const Navbar = ({setLoading}) => {
    const navigate = useNavigate();
    function getStartedHanlder(){
        setLoading(true);
         const timer = setTimeout(()=>{
      setLoading(false);
      navigate('/sign-up');

      return ()=>{clearTimeout(timer)}
    },3000);
    }
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="" />
            <div className="logo-text">
                <h3>Stock Flow</h3>
                <p>Warehouse Management</p>
            </div>
        </div>
        <ul className="nav-menu">
            <li>Features</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Pricing</li>
        </ul>

        <div className="nav-buttons">
            <button className='login'>Sign In</button>
            <button className='started' onClick={()=>{getStartedHanlder()}}>Get Started</button>
        </div>
    </nav>
  )
}

export default Navbar