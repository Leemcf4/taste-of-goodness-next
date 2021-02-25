import Image from "next/image"
import React from "react"

function ProductDetails({ detailsImage, cloudImage }) {
  return (
    <div className="product-details-container">
      <div className="product-details">
        <Image
          src={detailsImage}
          alt="textboard"
          width={675}
          height={586}
        ></Image>
      </div>
      <div className="product-details-cloud">
        <Image
          src={cloudImage}
          alt="familyCloud"
          width={247}
          height={478}
        ></Image>
      </div>
    </div>
  )
}

export default ProductDetails
