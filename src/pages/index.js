import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import About from "../components/About"
import Contact from "../components/Contact"
import Methodology from "../components/Methodology"
import Partners from "./../components/Partners"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="steiner" description="this is our description" />
      <Hero />
      <About />
      <Services />
      <Projects showLink />
      <Methodology />
      <Partners />
      <Blogs blogs={blogs} title="Recent blog posts" showLink />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        github
        strapiId
        title
        description
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featured
        stack {
          id
          name
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        id
        title
        description
        category
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slug
      }
    }
  }
`

// ...GatsbyImageSharpFluid
