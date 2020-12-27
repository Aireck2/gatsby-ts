import { Navbar } from "@components/Header"
import { IconLogo } from "@components/Icons"
import useScrollDirection from "@src/hooks/useScrollDirection"
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import "./header.scss"

export const Header: React.FC = () => {
  const scrollDirection = useScrollDirection({ initialDirection: "down" })

  const [scrolledToTop, setScrolledToTop] = useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      // setIsMounted(true)
    }, 100)

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const isUpScrolled = scrollDirection === "up" && !scrolledToTop
  const isDownScrolled = scrollDirection === "down" && !scrolledToTop

  return (
    <header
      className={`Header ${isUpScrolled ? "Header--scrollUp" : ""} ${
        isDownScrolled ? "Header--scrollDown" : ""
      }`}
    >
      <div className="Header__container">
        <h1 className="Header__logo">
          <Link className="Logo" to="/">
            <IconLogo />
          </Link>
        </h1>
        <Navbar />
      </div>
    </header>
  )
}
