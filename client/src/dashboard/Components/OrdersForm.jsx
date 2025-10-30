import React, { useState } from 'react'

const OrdersForm = ({setShowOrderForm}) => {
  const [showNext, setShowNext] = useState(false);
  
  return (
    
    <div className="add-product-section">
      <form className='add-product' action="">

        <dic className="cancel-form" onClick={()=>{setShowOrderForm((prev)=>!prev)}}> <i class="ri-close-line"></i></dic>
        <div className="form-title">
          Create Order
        </div>

        <div className="completed-marks">
          <div className="highlight-mark completed"></div>
          {
            showNext==true ?<div className="highlight-mark  completed"></div>:<div className="highlight-mark"></div>
          }
        </div>

      {
        !showNext && <>

          <div className="vendor-form1">
        <div className="input-fields">
        <label htmlFor="product">Product Name</label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label htmlFor="sku">Vendor Id</label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label htmlFor="qty">Quantity</label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label htmlFor="location">Wanted Date</label>
        <input type="date" />
      </div>
      
      <button className='btn vendor-btn' onClick={()=>{setShowNext((prev)=>!prev)}}>Move Next</button>
      </div>
        </>
      }
 
        {
          showNext && <>
          <div className="vendor-form2">
        <div className="input-fields">
        <label htmlFor="product">Minimum Stock</label>
        <input type="number" />
      </div>
      <div className="input-fields">
        <label htmlFor="sku">Maximum Stock</label>
        <input type="email" />
      </div>
      <div className="input-fields">
        <label htmlFor="qty">Bin Max Count</label>
        <input type="tel" />
      </div>
      <div className="input-auto">
        <label htmlFor="location"> <input type="checkbox"/>Reorder Status</label>
        
      </div>
      
      
      <div className="btn-box vendor-btn">
        <button className='btn' onClick={()=>{setShowNext((prev)=>!prev)}}>Go Back</button>
        <button className='btn'>Create Order</button>
      </div>
      </div>
          </>
        }

    </form>
    </div>
  )
}

export default OrdersForm;