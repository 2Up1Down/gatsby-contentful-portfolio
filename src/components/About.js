import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"

import Title from "./Title"
import SocialLinks from "./SocialLinks"

// ...GatsbyContentfulFluid_withWebp
// ...GatsbyContentfulFluid
const query = graphql`
  {
    about: contentfulSectionAbout {
      title
      subtitle
      person {
        name
        jobTitle
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        social {
          icon
          id
          url
          label
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  const {
    about: {
      title,
      subtitle,
      person: {
        name,
        jobTitle,
        description: { description },
        image,
      },
    },
  } = data

  return (
    <section className="section about-section" id="about">
      <div className="section-center about-center">
        <Title title={title} />
        <article className="about-content">
          <Image fluid={image.fluid} className="about-img" />
          <div className="about-description">
            <h3 className="about-name">{name}</h3>
            <ReactMarkdown children={description} />
            <SocialLinks styleIcon="about-icon" styleList="about-list" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
