import { Link } from "gatsby"
import React, { useState } from "react"
import "./menu.scss"
import "./navbar.scss"

export const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <div className="Menu">
      <button
        type="button"
        onClick={toggleMenu}
        className={`MenuIcon${isMenuOpen ? " active" : ""}`}
      >
        <div className="ham-box">
          <div className="ham-box-inner" />
        </div>
      </button>
      <aside className={`Aside${isMenuOpen ? " active" : ""}`}>
        <nav>
          <ul className="">
            <li className="">
              <Link to="/#about">About</Link>
            </li>
            <li className="">
              <Link to="/#work">Work</Link>
            </li>
            <li className="">
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}
