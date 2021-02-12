import React from "react"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"

const Card = ({ card }) => {
  const {
    image,
    subtitle = "",
    body: { body },
    title,
  } = card
  console.log(card)
  return (
    <article className="card">
      <Image fluid={image.fluid} className="card-img"></Image>
      <div className="card-text">
        <h4 className="card-title">{title}</h4>
        {subtitle && <h5 className="card-subtitle">{subtitle}</h5>}
        <ReactMarkdown children={body} />
      </div>
    </article>
  )
}

export default Card
