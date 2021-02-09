import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ ...blog }) => {
  const { category, date, description, image, slug, title } = blog

  return (
    <Link to={`/blog/${slug}`}>
      <article className="blog">
        {image && (
          <Image className="blog-img" fluid={image.childImageSharp.fluid} />
        )}
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

Blog.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Blog
