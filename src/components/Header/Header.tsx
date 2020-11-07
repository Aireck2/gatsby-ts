import { Navbar } from "@components/Header"
import { Link } from "gatsby"
import React from "react"
import "./header.scss"

export const Header: React.FC = () => (
  <header className="Header">
    <div className="Header__container">
      <h1 className="Header__logo">
        <Link className="Logo" to="/">
          Erick.
        </Link>
      </h1>
      <Navbar />
    </div>
  </header>
)
