import Document, { Html, Head, Main, NextScript } from "next/document"

const title = "Taste of Goodness"
const description = "Taste of Goodness"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/images/reddit-logo.png" />
          <meta property="og:site_name" content="Taste of Goodness" />
          <meta name="description " content={description} />
          <meta property="og:description" content={description} />
          <meta property="twitter:site" content="@Taste_Goodness" />
          <meta property="twitter:card" content="summary" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={process.env.NEXT_PUBLIC_SERVER_BASE_URL}
          />

          <meta
            property="twitter:image"
            content={process.env.NEXT_PUBLIC_SERVER_BASE_URL}
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
            crossOrigin="anonymous"
          />
        </Head>
        <body
          className="document-body"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: "-100",
            backgroundImage:
              "-webkit-gradient(linear, left top, left bottom, color-stop(0, #90C1FC), color-stop(0.33, #A3D5FE), color-stop(0.66, #B0DEFD), color-stop(1, #C1E8FE))",
            backgroundImage:
              "-webkit-linear-gradient(top, #90C1FC 0%, #A3D5FE 33%, #B0DEFD 66%, #C1E8FE 100%)",
            backgroundImage:
              " linear-gradient(to bottom, #90C1FC 0%, #A3D5FE 33%, #B0DEFD 66%, #C1E8FE 100%)",
            maxWidth: "2410px",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
