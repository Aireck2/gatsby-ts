import { Header } from "@components/Header"
import { Email, Social } from "@components/SideActions"
import React from "react"
import "./layout.scss"

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="Layout">
        <Email />
        <Social />
        <>{children}</>
      </main>
    </>
  )
}
