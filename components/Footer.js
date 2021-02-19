import React from "react"
import Image from "next/image"

function Footer({ footerImageFront, footerImageBack }) {
  return (
    <div className="footer-container">
      <div className="footer-images">
        <div className="footer-front">
          {/* <img src={footerImageFront} alt="FooterFront" /> */}
          <Image
            src={footerImageFront}
            width={2650}
            height={200}
            priority
            alt="cloud"
          ></Image>
        </div>
        <div className="footer-back">
          {/* <img src={footerImageBack} alt="FooterBack" />
           */}
          <Image
            src={footerImageBack}
            width={2650}
            height={414}
            priority
            alt="cloud"
          ></Image>
        </div>

        <div className="hills-back">
          {/* <img src="/images/hills.png" alt="HillsBack" /> */}
          <Image
            src="/images/hills.png"
            width={2650}
            height={216}
            priority
            alt="cloud"
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default Footer
