import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ index, ...rest }) => {
  const { description, github, image, stack, strapiId, title, url } = rest

  const tempStack = stack.map(item => <span key={item.id}>{item.name}</span>)

  return (
    <article className="project">
      {image && (
        <Image
          fluid={image.childImageSharp.fluid}
          className="project-img"
        ></Image>
      )}
      <div className="project-info">
        <p className="project-number">
          {(index + 1).toString().padStart(2, "0")}.
        </p>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">{tempStack}</div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
