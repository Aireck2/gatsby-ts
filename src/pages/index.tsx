import { Banner } from "@components/Banner"
import { Layout } from "@components/Layout"
import SEO from "@components/seo"
import React from "react"
import "../style/globalStyles.scss"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Banner />
  </Layout>
)

export default IndexPage
