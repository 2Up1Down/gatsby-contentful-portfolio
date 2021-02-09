import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, showLink, title }) => {
  const tempBlogs = blogs.map(blog => <Blog key={blog.id} {...blog} />)

  return (
    <section className="section">
      <div className="section-center">
        <Title title={title} />
        <div className="blogs-center">{tempBlogs}</div>
        {showLink && (
          <Link className="btn center-btn" to="/blog">
            Blog
          </Link>
        )}
      </div>
    </section>
  )
}
export default Blogs
