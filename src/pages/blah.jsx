import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blah = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="text-2xl">
        Hey there! You found a sort of secret thing!
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Blah: Some other place" />

export default Blah

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
