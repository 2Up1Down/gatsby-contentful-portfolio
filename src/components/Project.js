import React from "react"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import { FaShareSquare } from "react-icons/fa"

const Project = ({ index, ...project }) => {
  const {
    description: { description },
    image,
    stack,
    title,
    url,
  } = project

  const tempStack = stack.map((item, index) => <span key={index}>{item}</span>)

  return (
    <article className="project">
      {image && <Image fluid={image.fluid} className="project-img"></Image>}
      <div className="project-info">
        <p className="project-number">
          {(index + 1).toString().padStart(2, "0")}.
        </p>
        <h3>{title}</h3>
        <ReactMarkdown children={description} className="project-desc" />
        <div className="project-stack">{tempStack}</div>
        <div className="project-links">
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
