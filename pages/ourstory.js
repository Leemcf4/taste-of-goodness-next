import Head from "next/head"
import React from "react"
import Footer from "../components/Footer"

const title = "Taste of Goodness"
const description = "Taste of Goodness"

function ourstory() {
  return (
    <div>
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
          <img src="/images/story_title.png" alt="" />
        </div>
        <div className="story-book">
          <img src="/images/story_book.png" alt="" />
        </div>
        <div className="story-cloud-container-right">
          <img src="/images/story_cloud.png" alt="" />
        </div>
        <Footer
          footerImageFront="/images/fields_front_2.png"
          footerImageBack="/images/fields_back_2.png"
        />
      </div>
    </div>
  )
}

export default ourstory
