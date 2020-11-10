import { IconGitHub, IconLinkedin } from "@components/Icons"
import React from "react"

export const Social = () => {
  return (
    <div className="side left">
      <div className="Social">
        <li>
          <a
            href="https://github.com/Aireck2"
            aria-label="Github"
            target="_blank"
            rel="noreferrer"
          >
            <IconGitHub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/erick-escriba-arango"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedin />
          </a>
        </li>
      </div>
    </div>
  )
}
