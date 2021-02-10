import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import Title from "../components/Title"

const About = ({ data }) => {
  const {
    about: { description, image, stack, title },
  } = data

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <ReactMarkdown children={description} />
            <div className="about-stack">
              {stack.map(item => (
                <span key={item.id}>{item.name}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: strapiAbout {
      id
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stack {
        name
        id
      }
      title
    }
  }
`

export default About
