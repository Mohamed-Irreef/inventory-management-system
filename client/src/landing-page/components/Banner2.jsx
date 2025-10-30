import React from 'react'
import warehouse from "../../assets/warehouse2.webp";

const Banner2 = () => {
  return (
    <div className="banner2">
          <div className="banner2-left">
            <div className="banner2-left-contnet">
                <h3>Visualize Your Warehouse Operations</h3>
                <p className='banner2-left-para'>Get a bird's eye view of your entire warehouse with our interactive dashboard. Monitor inventory levels, track orders, and optimize workflows in real-time.</p>

                <div className="banner2-bottom-content">
                    <div className="">
                        <h2>98%</h2>
                        <p>Order Accuracy</p>
                    </div>
                    <div className="">
                        <h2>45%</h2>
                        <p>Cost Reduction</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="banner2-right">
           <img src={warehouse} alt="" />
          </div>
        </div>
  )
}

export default Banner2