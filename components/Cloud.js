import Image from "next/image"
import React from "react"

function Clouds() {
  return (
    <div className="cloud-bg-container">
      <div className="cloud1">
        <Image
          src="/images/cloud1.png"
          width={200}
          height={109}
          alt="cloud"
        ></Image>
      </div>
      <div className="cloud2">
        <Image
          src="/images/cloud2.png"
          width={200}
          height={116}
          alt="cloud"
        ></Image>
      </div>
      <div className="cloud3">
        <Image
          src="/images/cloud3.png"
          width={200}
          height={115}
          alt="cloud"
        ></Image>
      </div>
      <div className="cloud4">
        <Image
          src="/images/cloud4.png"
          width={200}
          height={139}
          alt="cloud"
        ></Image>
      </div>
    </div>
  )
}

export default Clouds
