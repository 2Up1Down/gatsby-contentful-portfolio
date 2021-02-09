import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const blogTemplate = ({ data }) => {
  console.log(data)
  const {
    blog: { category, content, date, title },
  } = data

  console.log(content)
  return (
    <Layout>
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
