import Head from "next/head"
import React, { useState } from "react"
import Footer from "../components/Footer"
import ProductRow from "../components/ProductRow"
import Swiper from "react-id-swiper"
import { products } from "../data/products"
import ScrollContainer from "react-indiana-drag-scroll"

const title = "Taste of Goodness"
const description = "Taste of Goodness"

function ourfamily() {
  const [productShow, setProductShow] = useState(0)

  const clickHandler = (productID) => {
    setProductShow(productID)
    console.log(productShow)
  }

  const params = {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 3,
    centeredSlides: false,
    freeMode: true,
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: {
      clickable: true,
    },
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
          <div className="product-details-container">
            <div className="product-details">
              <img src="/images/piri_bottle.png" alt="" />
            </div>
            <div className="product-details-cloud">
              <img src="/images/piri_bottle.png" alt="" />
            </div>
          </div>
        ) : productShow === 2 ? (
          <div className="product-details-container">
            <div className="product-details">
              <img src="/images/piri_textboard_full.png" alt="" />
            </div>
            <div className="product-details-cloud">
              <img src="/images/piri_cloud.png" alt="" />
            </div>
          </div>
        ) : productShow === 3 ? (
          <div className="product-details-container">
            <div className="product-details">
              <img src="/images/garlic_textboard_full.png" alt="" />
            </div>
            <div className="product-details-cloud">
              <img src="/images/garlic_cloud.png" alt="" />
            </div>
          </div>
        ) : productShow === 4 ? (
          <div className="product-details-container">
            <div className="product-details">
              <img src="/images/southwest_textboard_full.png" alt="" />
            </div>
            <div className="product-details-cloud">
              <img src="/images/southwest_cloud.png" alt="" />
            </div>
          </div>
        ) : productShow === 5 ? (
          <div className="product-details-container">
            <div className="product-details">
              <img src="/images/sweet_textboard_full.png" alt="" />
            </div>
            <div className="product-details-cloud">
              <img src="/images/sweet_cloud.png" alt="" />
            </div>
          </div>
        ) : productShow === 6 ? (
          <div className="product-details-container">
            <div className="product-details">
              <img src="/images/bbq_textboard_full.png" alt="" />
            </div>
            <div className="product-details-cloud">
              <img src="/images/bbq_cloud.png" alt="" />
            </div>
          </div>
        ) : productShow === 7 ? (
          <div className="product-details-container">
            <div className="product-details">
              <img src="/images/taco_textboard_full.png" alt="" />
            </div>
            <div className="product-details-cloud">
              <img src="/images/taco_cloud.png" alt="" />
            </div>
          </div>
        ) : productShow === 8 ? (
          <div className="product-details-container">
            <div className="product-details">
              <img src="/images/pepper_textboard_full.png" alt="" />
            </div>
            <div className="product-details-cloud">
              <img src="/images/pepper_cloud.png" alt="" />
            </div>
          </div>
        ) : productShow === 9 ? (
          <div className="product-details-container">
            <div className="product-details">
              <img src="/images/garlic_textboard_full.png" alt="" />
            </div>
            <div className="product-details-cloud">
              <img src="/images/garlic_cloud.png" alt="" />
            </div>
          </div>
        ) : productShow === 10 ? (
          <div className="product-details-container">
            <div className="product-details">
              <img src="" alt="" />
            </div>
            <div className="product-details-cloud">
              <img src="" alt="" />
            </div>
          </div>
        ) : (
          <>
            <div className="family-top">
              <div className="family-title">
                <img src="/images/family_title.png" alt="" />
              </div>
              <div className="family-board">
                <img src="/images/family_textboard.png" alt="" />
              </div>
            </div>
          </>
        )}

        <div className="family-bottom">
          <div className="product-row">
            {products.map((product) => (
              <ProductRow
                key={product._id}
                product={product}
                clickHandler={clickHandler}
              />
            ))}
          </div>

          <ScrollContainer vertical={false} className="mobile-product-row">
            {/* <Swiper {...params}> */}
            {products.map((product) => (
              <div key={product._id} onClick={() => clickHandler(product._id)}>
                {" "}
                <img src={product.productFamilyImage} alt="" />{" "}
              </div>
            ))}
            {/* </Swiper> */}
          </ScrollContainer>
        </div>
        <Footer
          footerImageFront="/images/fields_front_4.png"
          footerImageBack="/images/fields_back_4.png"
          bottom={"-5px"}
        />
      </div>
    </div>
  )
}

export default ourfamily
