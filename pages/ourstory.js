import Head from "next/head"
import Image from "next/image"
import React from "react"
import Footer from "../components/Footer"

const title = "Taste of Goodness"
const description = "Taste of Goodness"

function ourstory() {
  return (
    <div className="story">
      <Head>
        <title>Taste of Goodness</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description " content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:title" content={title} />
      </Head>

      <div className="story-container">
        <div className="story-title">
          <Image
            src="/images/story_title.png"
            width={237}
            height={74}
            alt="storytitle"
            quality={100}
          ></Image>
        </div>
        <div className="story-book">
          <Image
            src="/images/story_book.png"
            height={448}
            width={659}
            alt="story"
          ></Image>
        </div>
        <div className="story-cloud-container-right">
          <Image
            src="/images/story_cloud.png"
            width={261}
            height={467}
            alt="cloud"
          ></Image>
        </div>
        <Footer
          footerImageFront="/images/fields_front_2.png"
          footerImageBack="/images/fields_back_2.png"
          footerTabletFront="/images/footerTablet/fields_front_2_tablet.png"
          footerTabletBack="/images/footerTablet/fields_back_2_tablet.png"
          footerMobileFront="/images/footerMobile/fields_front2_mobile.png"
          footerMobileBack="/images/footerMobile/fields_back2_mobile.png"
          bottom={"50px"}
          mobileBottom={"-5px"}
          tabletBottom={"-5px"}
        />
      </div>
    </div>
  )
}

export default ourstory
