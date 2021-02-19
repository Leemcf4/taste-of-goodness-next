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
            srcSet={}
            width={441}
            height={220}
            alt="logo"
            priority
            quality={100}
          ></Image>
          {/* <img src="\images\tog_logo_full.png" alt="" /> */}
        </div>

        <div className="cloud-container-left">
          <img src="\images\hello_cloud1.png" alt="" />
        </div>

        <div className="cloud-container-right">
          <img src="\images\hello_cloud2.png" alt="" />
        </div>
        <div className="home-awards-container">
          <Awards />
        </div>
        <div className="basket-container">
          <Image
            src="/images/hello_basket.png"
            width={542}
            height={460}
            alt="basket"
          ></Image>
          {/* <img src="\images\hello_basket.png" alt="" /> */}
        </div>
        <Footer
          footerImageFront="/images/fields_front_1.png"
          footerImageBack="/images/fields_back_1.png"
        />
      </div>
    </div>
  )
}
