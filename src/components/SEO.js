import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title }) => {
  return <Helmet title={title}>SEO Component</Helmet>
}

export default SEO
