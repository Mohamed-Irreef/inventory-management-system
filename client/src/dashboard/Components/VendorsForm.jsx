import React, { useState } from 'react'

const VendorsForm = ({setShowVendorsForm}) => {
  const [showNext, setShowNext] = useState(false);
  return (
    
    <div className="add-product-section">
      <form className='add-product' action="">

        <dic className="cancel-form" onClick={()=>{setShowVendorsForm((prev)=>!prev)}}> <i class="ri-close-line"></i></dic>
        <div className="form-title">
          Add Vendor
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
        <label htmlFor="product">Vendor Company</label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label htmlFor="sku">Vendor Company Id</label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label htmlFor="qty">Vendor Address</label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label htmlFor="location">Vendor Product</label>
        <input type="text" />
      </div>
      
      <button className='btn vendor-btn' onClick={()=>{setShowNext((prev)=>!prev)}}>Move Next</button>
      </div>
        </>
      }
 
        {
          showNext && <>
          <div className="vendor-form2">
        <div className="input-fields">
        <label htmlFor="product">Owner Name</label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label htmlFor="sku">Owner Email</label>
        <input type="email" />
      </div>
      <div className="input-fields">
        <label htmlFor="qty">Owner Contact</label>
        <input type="tel" />
      </div>
      <div className="input-fields">
        <label htmlFor="location">Owner Password</label>
        <input type="password" />
      </div>
      
      
      <div className="btn-box vendor-btn">
        <button className='btn' onClick={()=>{setShowNext((prev)=>!prev)}}>Go Back</button>
        <button className='btn'>Add Vendor</button>
      </div>
      </div>
          </>
        }

    </form>
    </div>
  )
}

export default VendorsForm;