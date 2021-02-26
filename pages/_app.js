import { Burger } from "../components/Burger"
import Clouds from "../components/Cloud"
import Header from "../components/Header"
import Sun from "../components/Sun"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "-999",
        backgroundImage:
          "-webkit-gradient(linear, left top, left bottom, color-stop(0, #90C1FC), color-stop(0.33, #A3D5FE), color-stop(0.66, #B0DEFD), color-stop(1, #C1E8FE))",
        backgroundImage:
          "-webkit-linear-gradient(top, #90C1FC 0%, #A3D5FE 33%, #B0DEFD 66%, #C1E8FE 100%)",
        backgroundImage:
          " linear-gradient(to bottom, #90C1FC 0%, #A3D5FE 33%, #B0DEFD 66%, #C1E8FE 100%)",
        maxWidth: "2410px",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
      }}
    >
      <Header />
      <Burger />
      <Sun />
      <Clouds />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
