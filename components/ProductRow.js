import React from "react"

function ProductRow(props) {
  const { product, clickHandler } = props
  return (
    <div key={product._id} className="product-row-container">
      <div className={`product-position ${product.position}`}>
        <div className="label">
          <img src={product.productLabel} alt="" />
        </div>
        <div
          className="details-image"
          onClick={() => clickHandler(product._id)}
        >
          <img src={product.productFamilyImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductRow
