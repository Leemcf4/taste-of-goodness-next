import React from "react"
import Link from "next/link"
// import "../styles/header.css"

function Header() {
  return (
    <header className="header-container">
      <div className="nav-items">
        <Link href="/">
          <a className="nav-item">HELLO!</a>
        </Link>
        <Link href="/ourstory">
          <a className="nav-item">
            OUR<span>STORY</span>
          </a>
        </Link>
        <Link href="/whatsgood">
          <a className="nav-item">
            WHATS<span>GOOD</span>
          </a>
        </Link>
        <Link href="/ourfamily">
          <a className="nav-item">
            OUR<span>FAMILY</span>
          </a>
        </Link>
        <Link href="/wheretofind">
          <a className="nav-item">
            WHERE<span>TO</span>FIND<span>US</span>
          </a>
        </Link>
        <Link href="/videos">
          <a className="nav-item"> VIDEOS</a>
        </Link>
        <Link href="/callus">
          <a className="nav-item">
            CALL<span>US</span>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
