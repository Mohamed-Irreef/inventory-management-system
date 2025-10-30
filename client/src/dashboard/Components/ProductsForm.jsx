import React from 'react'

const ProductsForm = ({setShowAddProdForm}) => {
  return (
    
    <div className="add-product-section">
      <form className='add-product' action="">

        <dic className="cancel-form" onClick={()=>{setShowAddProdForm((prev)=>!prev)}}> <i class="ri-close-line"></i></dic>
        <div className="form-title">
          ADD INVENTORY
        </div>
      <div className="input-fields">
        <label htmlFor="product">Product Name</label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label htmlFor="sku">SKU</label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label htmlFor="qty">Quantity</label>
        <input type="number" />
      </div>
      <div className="input-fields">
        <label htmlFor="location">Location</label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label htmlFor="minstock">Minimum Stock</label>
        <input type="number" />
      </div>
      <div className="input-auto">
        <label htmlFor="qty"><input type="checkbox"/>Automatic Reorder</label>
      </div>
      
        <button className='btn'>Add Product</button>
 
    </form>
    </div>
  )
}

export default ProductsForm