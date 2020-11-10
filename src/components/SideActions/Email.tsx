import React from "react"
import "./styles.scss"

export const Email = () => {
  const email = "erickescribaa@gmail.com"
  return (
    <div className="side right">
      <div className="Email">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  )
}
