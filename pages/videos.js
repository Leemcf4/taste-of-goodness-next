import Head from "next/head"
import React from "react"

const title = "Taste of Goodness"
const description = "Taste of Goodness"

function videos() {
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
      Videos
    </div>
  )
}

export default videos
