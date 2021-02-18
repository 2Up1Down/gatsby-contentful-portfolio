import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import SocialLinks from "./SocialLinks"

// ...GatsbyContentfulFluid
// ...GatsbyContentfulFluid_withWebp
const query = graphql`
  {
    sectionHero: contentfulSectionHero {
      title
      subtitle
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
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
          <h4 className="hero-pretitle">{subtitle}</h4>
          <div className="underline"></div>
          <h1 className="hero-title">{title}</h1>
          <SocialLinks styleList="hero-social" />
          <AnchorLink className="btn btn-hero" to="/#contact">
            Get in touch
          </AnchorLink>
        </article>
        <div className="hero-img-container">
          <Image fluid={image.fluid} className="hero-img" />
        </div>
      </div>
    </header>
  )
}

export default Hero
