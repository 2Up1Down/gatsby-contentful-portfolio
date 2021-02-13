import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    sectionHero: contentfulSectionHero {
      title
      subtitle
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  const {
    sectionHero: { title, subtitle, image },
  } = data

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          {/* TODO: change order of h1 and h4 for SEO reasons */}
          <h1>{title}</h1>
          <h4>{subtitle}</h4>
          <AnchorLink className="btn" to="/#contact">
            Get in touch
          </AnchorLink>
          <SocialLinks />
        </article>
        <Image fluid={image.fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
