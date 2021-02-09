import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ ...blog }) => {
  const {
    category,
    date,
    description,
    image: {
      childImageSharp: { fluid: image },
    },
    slug,
    title,
  } = blog

  return (
    <Link to={`/blogs/${slug}`}>
      <article className="blog">
        <Image className="blog-img" fluid={image} />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
