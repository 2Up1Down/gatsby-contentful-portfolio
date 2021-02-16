import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"

import Title from "./Title"
import FaIcon from "./FaIcon"

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
            ...GatsbyContentfulFluid
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
        social,
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
          <div className="about-stack">
            {social.map(item => (
              <span key={item.id}>
                <FaIcon iconName={item.icon} className="" />
                {item.label}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
