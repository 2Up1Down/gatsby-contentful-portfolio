import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import FaIcon from "./FaIcon"

const query = graphql`
  {
    socialLink: allContentfulSocialLink {
      nodes {
        icon
        id
        label
        url
      }
    }
  }
`

const SocialLinks = ({ styleList, styleIcon }) => {
  const data = useStaticQuery(query)
  const {
    socialLink: { nodes: social },
  } = data

  const links = social.map(link => {
    return (
      <li key={link.id}>
        <a
          href={link.url}
          className={`social-link ${styleIcon ? styleIcon : ""}`}
        >
          <FaIcon iconName={link.icon} className="social-icon" />
        </a>
      </li>
    )
  })

  return (
    <ul className={`social-links ${styleList ? styleList : ""}`}>{links}</ul>
  )
}

export default SocialLinks
