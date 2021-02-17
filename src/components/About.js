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
    <section className="about-page" id="about">
      <div className="section-center about-center">
        <article className="about-text">
          <Title title={title} subtitle={subtitle} />

          <p>{name}</p>
          <p>{jobTitle}</p>
          <Image fluid={image.fluid} className="about-img" />
          <ReactMarkdown children={description} />
          <SocialLinks styleIcon="about-icon" />
        </article>
      </div>
    </section>
  )
}

export default About
