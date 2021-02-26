import Head from "next/head"
import Image from "next/image"
import React from "react"
import Footer from "../components/Footer"

const title = "Taste of Goodness"
const description = "Taste of Goodness"

function wheretofind() {
  return (
    <div className="where-container">
      <Head>
        <title>Taste of Goodness</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description " content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:title" content={title} />
      </Head>
      <div className="where-search">
        <Image
          src="/images/where_magnifying_glass.png"
          alt="mag"
          height={86}
          width={177}
        ></Image>

        <div className="where-title">
          <Image
            src="/images/where_title.png"
            alt="where-title"
            height={87}
            width={239}
            quality={100}
          ></Image>
        </div>
      </div>
      <div className="where-news">
        <Image
          src="/images/where_news.png"
          alt="where-news"
          height={531}
          width={597}
        ></Image>
      </div>
      <div className="where-fsdu">
        <Image
          src="/images/where_fsdu_full.png"
          alt="where-fsdu"
          height={599}
          width={450}
        />
      </div>
      <Footer
        footerImageFront="/images/fields_front_5.png"
        footerImageBack="/images/fields_back_5.png"
        footerTabletFront="/images/footerTablet/fields_front_5_tablet.png"
        footerTabletBack="/images/footerTablet/fields_back_5_tablet.png"
        footerMobileFront="/images/footerMobile/fields_front5_mobile.png"
        footerMobileBack="/images/footerMobile/fields_back5_mobile.png"
        bottom={"-5px"}
        mobileBottom={"-5px"}
        tabletBottom={"-5px"}
      />
    </div>
  )
}

export default wheretofind
