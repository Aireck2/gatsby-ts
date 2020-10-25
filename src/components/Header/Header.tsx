import { Link } from "gatsby"
import React from "react"
import "./styles.scss"

export const Header: React.FC = () => (
  <header className="Header">
    <div className="Header__container">
      <h1 className="Header__logo">
        <Link className="app" to="/">
          Erick
        </Link>
      </h1>
    </div>
  </header>
)
