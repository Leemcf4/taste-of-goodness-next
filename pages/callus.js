import Head from "next/head"
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
        <img src="/images/callme_title.png" alt="" />
      </div>

      <div className="call-text-left">
        <img src="/images/callus_textboard1.png" alt="" />
      </div>

      <div className="call-text-right">
        <img src="/images/callus_textboard2.png" alt="" />
      </div>
      <Footer
        footerImageFront="/images/fields_front_6.png"
        footerImageBack="/images/fields_back_6.png"
        bottom={"-5px"}
      />
    </div>
  )
}

export default callus
