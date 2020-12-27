/* eslint-disable react/no-unescaped-entities */
import React from "react"
import "./banner.scss"

export const Banner: React.FC = () => (
  <section className="Banner">
    <div className="Banner__container">
      <h2 className="Banner__green">Hi, my name is</h2>
      <h2 className="Banner__name">Erick Escriba.</h2>
      <h2 className="Banner__main__text">I build things for the web.</h2>
      <p className="Banner__main__description">
        I'm a front-end developer based in Lima, Peru . I'm currently into web
        development and I'm passionate in building exceptional websites
      </p>
      <div className="Banner__contact-btn">
        <a href="mailto:erickescribaa@gmail.com">Get In Touch</a>
      </div>
    </div>
  </section>
)
