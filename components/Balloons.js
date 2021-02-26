import Image from "next/image"
import React from "react"

function Balloons() {
  return (
    <div className="balloon-container">
      <div className="balloon-1">
        <Image
          src="/images/balloon_lactose.png"
          alt="balloon-lactose"
          width={112}
          height={190}
        ></Image>
      </div>
      <div className="balloon-2">
        <Image
          src="/images/balloon_gluten.png"
          alt="balloon-gluten"
          width={144}
          height={146}
        ></Image>
      </div>
      <div className="balloon-3">
        <Image
          src="/images/balloon_shellfish.png"
          alt="balloon-shell"
          width={114}
          height={194}
        ></Image>
      </div>
      <div className="balloon-4">
        <Image
          src="/images/balloon_suitable.png"
          alt="balloon-suit"
          width={105}
          height={165}
        ></Image>
      </div>
    </div>
  )
}

export default Balloons
