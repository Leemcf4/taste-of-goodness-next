import Image from "next/image"
import React from "react"

function Awards() {
  return (
    <div className="award-container">
      <Image
        src="/images/Taste_Of_Goodness_Home_Footer.png"
        width={912}
        height={158}
        alt="Awards"
        layout="intrinsic"
      ></Image>
    </div>
  )
}

export default Awards
