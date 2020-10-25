import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <h1 className="app" style={{ margin: 0 }}>
        <Link className="app" to="/">
          Erick
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
