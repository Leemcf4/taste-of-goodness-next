import Head from "next/head"
import Image from "next/image"
import React from "react"
import Balloons from "../components/Balloons"
import Footer from "../components/Footer"

const title = "Taste of Goodness"
const description = "Taste of Goodness"

function whatsgood() {
  return (
    <div className="whats-good-container">
      <Head>
        <title>Taste of Goodness</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description " content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:title" content={title} />
      </Head>
      <div className="whats-good-title">
        <Image
          src="/images/good_title.png"
          alt="good-title"
          width={237}
          height={74}
        ></Image>
      </div>

      <div className="cloud-container-left" id="whatsgood-left">
        <Image
          src="/images/good_cloud1.png"
          alt="cloud"
          width={278}
          height={498}
        ></Image>
      </div>
      <div className="cloud-container-right" id="whatsgood-right">
        <Image
          src="/images/good_cloud2.png"
          alt="cloud"
          width={279}
          height={499}
        ></Image>
      </div>
      <Balloons />

      <div className="sign-container">
        <Image
          src="/images/good_sign.png"
          alt="sign"
          width={281}
          height={412}
        ></Image>
      </div>
      <Footer
        footerImageFront="/images/fields_front_3.png"
        footerImageBack="/images/fields_back_3.png"
        footerTabletFront="/images/footerTablet/fields_front_3_tablet.png"
        footerTabletBack="/images/footerTablet/fields_back_3_tablet.png"
        footerMobileFront="/images/footerMobile/fields_front3_mobile.png"
        footerMobileBack="/images/footerMobile/fields_back3_mobile.png"
        bottom={"-5px"}
        mobileBottom={"-5px"}
        tabletBottom={"-5px"}
      />
    </div>
  )
}

export default whatsgood
