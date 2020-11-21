import { Layout } from "@components/Layout"
import SEO from "@components/seo"
import React from "react"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <section className="Banner">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout>
)

export default NotFoundPage
