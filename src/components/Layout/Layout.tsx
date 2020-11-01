import { Header } from "@components/Header"
import React from "react"
import "./layout.scss"

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          padding: `0 150px`,
          height: "100vh",
        }}
      >
        <>{children}</>
      </main>
    </>
  )
}
// div padding 100px
// main padding 100px
// section padding 100px maxwidth
