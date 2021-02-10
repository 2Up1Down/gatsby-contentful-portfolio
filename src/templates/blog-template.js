import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const blogTemplate = ({ data }) => {
  const {
    blog: { category, content, date, description, title },
  } = data

  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{title}</h1>
            <ReactMarkdown children={content} />
            <Link to="/blog" className="btn center-btn">
              Blog
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query GetSingleBlog($slug: String) {
//     blog: strapiBlogs(slug: { eq: $slug }) {
//       content

//     }
//   }
// `

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      category
      content
      date
      description
      id
      slug
      title
      image {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  }
`

export default blogTemplate
