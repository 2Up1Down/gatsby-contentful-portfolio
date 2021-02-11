import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"

import Title from "./Title"
import FaIcon from "./FaIcon"
import Subtitle from "./Subtitle"

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
    <section className="about-page">
      <div className="section-center about-center">
        <article className="about-text">
          <Title title={title} />
          {subtitle && <Subtitle subtitle={subtitle} />}

          <p>{name}</p>
          <p>{jobTitle}</p>
          <Image fluid={image.fluid} className="about-img" />
          <ReactMarkdown children={description} />
          <div className="about-stack">
            {social.map(item => (
              <div className="">
                <FaIcon iconName={item.icon} key={item.id} />
                {item.label}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
