import React from "react"
import Image from "next/image"

function Footer({
  footerImageFront,
  footerTabletFront,
  footerMobileFront,
  footerImageBack,
  bottom,
  ImageBottom,
  mobileBottom,
  tabletBottom,
  footerTabletBack,
  footerMobileBack,
}) {
  return (
    <>
      <div className="footer-container" style={{ bottom: `${bottom}` }}>
        <div className="footer-images" style={{ bottom: `${ImageBottom}` }}>
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
              alt="cloud"
            ></Image>
          </div>

          <div className="hills-back">
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

      <div
        className="footer-container-tablet"
        style={{ bottom: `${tabletBottom}` }}
      >
        <div className="footer-images" style={{ bottom: `${ImageBottom}` }}>
          <div className="footer-front">
            <Image
              src={footerTabletFront}
              width={1024}
              height={218}
              priority
              alt="footer"
            ></Image>
          </div>
          <div className="footer-back">
            <Image
              src={footerTabletBack}
              width={1024}
              height={218}
              priority
              alt="footer"
            ></Image>
          </div>
          <div className="hills-back">
            <Image
              src="/images/footerTablet/hills_tablet.png"
              width={1024}
              height={218}
              priority
              alt="hills"
            ></Image>
          </div>
        </div>
      </div>
      <div
        className="footer-container-mobile"
        style={{ bottom: `${mobileBottom}` }}
      >
        <div className="footer-images" style={{ bottom: `${ImageBottom}` }}>
          <div className="footer-front">
            <Image
              src={footerMobileFront}
              width={500}
              height={218}
              priority
              alt="footer"
            ></Image>
          </div>

          <div className="footer-back">
            <Image
              src={footerMobileBack}
              width={500}
              height={218}
              priority
              alt="footer"
            ></Image>
          </div>
          {/* 
          <div className="hills-back">
            <Image
              src="/images/footerMobile/hills_mobile.png"
              width={500}
              height={218}
              priority
              alt="hills"
            ></Image>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Footer
