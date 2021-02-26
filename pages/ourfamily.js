import Head from "next/head"
import React, { useState } from "react"
import Footer from "../components/Footer"
import { products } from "../data/products"
import ScrollContainer from "react-indiana-drag-scroll"
import Image from "next/image"
import ProductDetails from "../components/ProductDetails"

const title = "Taste of Goodness"
const description = "Taste of Goodness"

function ourfamily() {
  const [productShow, setProductShow] = useState(0)

  const clickHandler = (productID) => {
    setProductShow(productID)
    console.log(productShow)
  }

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
      <div className="family-container">
        {productShow === 1 ? (
          <ProductDetails
            detailsImage={"/images/piri_bottle.png"}
            cloudImage={"/images/piri_bottle.png"}
          />
        ) : productShow === 2 ? (
          <ProductDetails
            detailsImage={"/images/piri_textboard_full.png"}
            cloudImage={"/images/piri_cloud.png"}
          />
        ) : productShow === 3 ? (
          <ProductDetails
            detailsImage={"/images/garlic_textboard_full.png"}
            cloudImage={"/images/garlic_cloud.png"}
          />
        ) : productShow === 4 ? (
          <ProductDetails
            detailsImage={"/images/southwest_textboard_full.png"}
            cloudImage={"/images/southwest_cloud.png"}
          />
        ) : productShow === 5 ? (
          <ProductDetails
            detailsImage={"/images/sweet_textboard_full.png"}
            cloudImage={"/images/sweet_cloud.png"}
          />
        ) : productShow === 6 ? (
          <ProductDetails
            detailsImage={"/images/bbq_textboard_full.png"}
            cloudImage={"/images/bbq_cloud.png"}
          />
        ) : productShow === 7 ? (
          <ProductDetails
            detailsImage={"/images/taco_textboard_full.png"}
            cloudImage={"/images/taco_cloud.png"}
          />
        ) : productShow === 8 ? (
          <ProductDetails
            detailsImage={"/images/pepper_textboard_full.png"}
            cloudImage={"/images/pepper_cloud.png"}
          />
        ) : productShow === 9 ? (
          <ProductDetails
            detailsImage={"/images/garlic_textboard_full.png"}
            cloudImage={"/images/garlic_cloud.png"}
          />
        ) : productShow === 10 ? (
          <ProductDetails
            detailsImage={"/images/garlic_textboard_full.png"}
            cloudImage={"/images/garlic_cloud.png"}
          />
        ) : (
          <>
            <div className="family-top">
              <div className="family-title">
                <Image
                  src="/images/family_title.png"
                  alt="familyTitle"
                  height={87}
                  width={238}
                ></Image>
              </div>
              <div className="family-board">
                <Image
                  src="/images/family_textboard.png"
                  alt="family"
                  height={349}
                  width={543}
                ></Image>
              </div>
            </div>
          </>
        )}

        <div className="family-bottom">
          <ScrollContainer vertical={false} className="mobile-product-row">
            {products.map((product) => (
              <div key={product._id} onClick={() => clickHandler(product._id)}>
                <Image
                  src={product.productFamilyImage}
                  height={288}
                  width={134}
                  alt="bottle"
                  quality={100}
                  layout="fixed"
                ></Image>
              </div>
            ))}
          </ScrollContainer>
        </div>
        <Footer
          footerImageFront="/images/fields_front_4.png"
          footerImageBack="/images/fields_back_4.png"
          footerTabletFront="/images/footerTablet/fields_front_4_tablet.png"
          footerTabletBack="/images/footerTablet/fields_back_4_tablet.png"
          footerMobileFront="/images/footerMobile/fields_front4_mobile.png"
          footerMobileBack="/images/footerMobile/fields_back4_mobile.png"
          bottom={"-5px"}
          mobileBottom={"-5px"}
          tabletBottom={"-5px"}
        />
      </div>
    </div>
  )
}

export default ourfamily
