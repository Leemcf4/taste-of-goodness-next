import Head from "next/head"
import Image from "next/image"
import React from "react"
import Footer from "../components/Footer"

const title = "Taste of Goodness"
const description = "Taste of Goodness"

function callus() {
  return (
    <div className="call-container">
      <Head>
        <title>Taste of Goodness</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description " content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:title" content={title} />
      </Head>
      <div className="call-title">
        <Image
          src="/images/callme_title.png"
          alt="call-title"
          width={239}
          height={86}
          quality={100}
        ></Image>
      </div>

      <div className="call-text-left">
        <Image
          src="/images/callus_textboard1.png"
          alt="call-text-1"
          width={508}
          height={375}
        ></Image>
      </div>

      <div className="call-text-right">
        <Image
          src="/images/callus_textboard2.png"
          alt="call-text-2"
          width={257}
          height={497}
        ></Image>
      </div>
      <Footer
        footerImageFront="/images/fields_front_6.png"
        footerImageBack="/images/fields_back_6.png"
        footerTabletFront="/images/footerTablet/fields_front_6_tablet.png"
        footerTabletBack="/images/footerTablet/fields_back_6_tablet.png"
        footerMobileFront="/images/footerMobile/fields_front6_mobile.png"
        footerMobileBack="/images/footerMobile/fields_back6_mobile.png"
        bottom={"-5px"}
        mobileBottom={"-5px"}
        tabletBottom={"-5px"}
      />
    </div>
  )
}

export default callus
