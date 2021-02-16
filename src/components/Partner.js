import React from "react"
import Image from "gatsby-image"

const Partner = ({ partner }) => {
  const { description, logo, name, url } = partner

  return (
    <a href={url}>
      <div className="partner">
        <Image fluid={logo.fluid} className="partner-img" />
        <div className="partner-text">
          <h4 className="partner-title">{name}</h4>
          {description && (
            <p className="partner-partner-description">
              {description.description}
            </p>
          )}
        </div>
      </div>
    </a>
  )
}

export default Partner
