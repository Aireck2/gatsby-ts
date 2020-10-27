import React from "react"
import { Link } from "gatsby"
import "./header.scss"
import { Navbar } from "@components/Header"

export const Header: React.FC = () => (
  <header className="Header">
    <div className="Header__container">
      <h1 className="Header__logo">
        <Link className="app" to="/">
          Erick
        </Link>
      </h1>
      <Navbar />
    </div>
  </header>
)
