import Head from "next/head"
import Footer from "../components/Footer"

import Image from "next/image"
import Awards from "../components/Awards"

const title = "Taste of Goodness"
const description = "Taste of Goodness"

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Head>
          <title>Taste of Goodness</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description " content={description} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:title" content={title} />
        </Head>

        <div className="logo-container">
          <Image
            src="/images/tog_logo_full.png"
            width={441}
            height={220}
            alt="logo"
            priority
            quality={100}
          ></Image>
        </div>

        <div className="cloud-container-left">
          <div className="home-left-cloud-container">
            <Image
              className="home-cloud-left"
              src="/images/hello_cloud11.png"
              height={498}
              width={278}
              quality={100}
              objectFit="contain"
              alt="cloud"
            ></Image>
            <p className="home-cloud-left-text">
              Welcome to taste of goodness!! <br></br>Never before has sauce
              tasted so <br></br>
              Let us take you on a saucey journey and <br></br>
              tell you a little more about ourselves
            </p>
          </div>
        </div>

        <div className="cloud-container-right">
          <div className="home-right-cloud-container">
            <Image
              className="home-cloud-right"
              src="/images/hello_cloud22.png"
              height={398}
              width={278}
              quality={100}
              objectFit="contain"
              alt="cloud"
            ></Image>
            <p className="home-cloud-right-text">
              Produced In<br></br>
              Ireland <br></br>
            </p>
          </div>
        </div>
        <div className="basket-container">
          <Image
            src="/images/hello_basket.png"
            width={542}
            height={460}
            alt="basket"
            objectFit="contain"
          ></Image>
        </div>
        <Footer
          footerImageFront="/images/fields_front_1.png"
          footerImageBack="/images/fields_back_1.png"
          footerTabletFront="/images/footerTablet/fields_front_1_tablet.png"
          footerTabletBack="/images/footerTablet/fields_back_1_tablet.png"
          footerMobileFront="/images/footerMobile/fields_front1_mobile.png"
          footerMobileBack="/images/footerMobile/fields_back1_mobile.png"
          mobileBottom={"30px"}
          tabletBottom={"35px"}
        />
      </div>
    </div>
  )
}
