import Image from "next/image"

function Sun() {
  return (
    <div className="sun-container">
      <Image
        src="/images/sun_small.png"
        height={92}
        width={92}
        alt="sun"
      ></Image>
    </div>
  )
}

export default Sun
