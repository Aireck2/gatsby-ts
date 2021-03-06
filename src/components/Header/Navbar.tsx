import { Button } from "@components/Button"
import { Menu } from "@components/Header"
import { Link } from "gatsby"
import React from "react"
import "./navbar.scss"

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="Navbar">
        <ul className="Navbar__container">
          <li className="Navbar__item">
            <span className="Navbar__item__number">01.</span>
            <span className="Navbar__item__string">
              <Link to="/#about">About</Link>
            </span>
          </li>
          <li className="Navbar__item">
            <span className="Navbar__item__number">02.</span>
            <span className="Navbar__item__string">
              <Link to="/#work">Work</Link>
            </span>
          </li>
          <li className="Navbar__item">
            <span className="Navbar__item__number">03.</span>
            <span className="Navbar__item__string">
              <Link to="/#contact">Contact</Link>
            </span>
          </li>
        </ul>
        <Button href="/pdf">Resume</Button>
      </div>
      <Menu />
    </>
  )
}
