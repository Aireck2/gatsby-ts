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
