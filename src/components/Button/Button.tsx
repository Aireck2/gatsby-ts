import React from "react"
import "./button.scss"

interface IProps {
  children: React.ReactNode
  href: string
}
export const Button: React.FC<IProps> = ({ children, href }) => {
  return (
    <a href={href} className="Button__link">
      {children}
    </a>
  )
}
