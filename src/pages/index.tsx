import { Banner } from "@components/Banner"
import { Layout } from "@components/Layout"
import SEO from "@components/seo"
import React from "react"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
  </Layout>
)

export default IndexPage
