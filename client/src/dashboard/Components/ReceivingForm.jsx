import React from 'react'

const ReceivingForm = ({setReceivingForm}) => {
  return (
    
    <div className="add-product-section">
      <form className='add-product' action="">

        <dic className="cancel-form" onClick={()=>{setReceivingForm((prev)=>!prev)}}> <i class="ri-close-line"></i></dic>
        <div className="form-title">
          New Receiving
        </div>
      <div className="input-fields">
        <label htmlFor="product">Company Name</label>
        <input type="text" />
      </div>
      {/* <div className="input-fields">
        <label htmlFor="sku">Product Order Id</label>
        <input type="text" />
      </div> */}
      <div className="input-fields">
        <label htmlFor="qty">Date</label>
        <input type="date" />
      </div>
      <div className="input-fields">
        <label htmlFor="location">Orders</label>
        <input type="number" />
      </div>
      {/* <div className="input-fields">
        <label htmlFor="minstock">Value</label>
        <input type="text" />
      </div> */}
      {/* <div className="input-auto">
        <label htmlFor="qty"><input type="checkbox"/>Automatic Reorder</label>
      </div> */}
      
        <button className='btn'>Add Vendor</button>
 
    </form>
    </div>
  )
}

export default ReceivingForm;