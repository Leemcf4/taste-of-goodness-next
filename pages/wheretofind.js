import Head from "next/head"
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
        <img src="/images/where_magnifying_glass.png" alt="" />

        <div className="where-title">
          <img src="/images/where_title.png" alt="" />
        </div>
      </div>
      <div className="where-news">
        <img src="/images/where_news.png" alt="" />
      </div>
      <div className="where-fsdu">
        <img src="/images/where_fsdu_full.png" alt="" />
      </div>
      <Footer
        footerImageFront="/images/fields_front_5.png"
        footerImageBack="/images/fields_back_5.png"
      />
    </div>
  )
}

export default wheretofind
