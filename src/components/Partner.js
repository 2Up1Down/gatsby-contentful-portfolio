import React from "react"
import Image from "gatsby-image"

const Partner = ({ partner }) => {
  const { description, logo, name, url } = partner

  return (
    <div className="partner">
      <a href={url} target="_blank" rel="noreferrer">
        <Image fluid={logo.fluid} className="partner-img" />

        <div className="partner-overlay">
          <div className="partner-description">
            <h4 className="partner-title">{name}</h4>
            {description && (
              <p className="partner-info">{description.description}</p>
            )}
          </div>
        </div>
      </a>
    </div>
  )
}

export default Partner
