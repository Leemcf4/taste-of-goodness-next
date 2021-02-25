import React from "react"
import Image from "next/image"

function Footer({ footerImageFront, footerImageBack, bottom }) {
  return (
    <div className="footer-container" style={{ bottom: `${bottom}` }}>
      <div className="footer-images">
        <div className="footer-front">
          <Image
            src={footerImageFront}
            width={2650}
            height={200}
            priority
            alt="footer"
          ></Image>
        </div>
        <div className="footer-back">
          <Image
            src={footerImageBack}
            width={2650}
            height={414}
            priority
            alt="footer"
          ></Image>
        </div>

        <div className="hills-back">
          <Image
            src="/images/hills.png"
            width={2650}
            height={216}
            priority
            alt="hills"
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default Footer
