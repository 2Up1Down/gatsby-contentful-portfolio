import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Projects" description="" />
      <Projects projects={projects} title="All Projects" />
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    allStrapiProjects {
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
    site {
      siteMetadata {
        title
        description
        author
        twitterUsername
        image
        siteUrl
      }
    }
  }
`
