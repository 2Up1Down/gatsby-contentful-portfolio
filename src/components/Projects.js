import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Title from "./Title"
import Project from "./Project"
import Subtitle from "./Subtitle"

const query = graphql`
  {
    sectionProjects: contentfulSectionProjects {
      title
      subtitle
      projects {
        id
        title
        url
        stack
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        description {
          description
        }
      }
    }
  }
`

const Projects = ({ showLink }) => {
  const data = useStaticQuery(query)
  const {
    sectionProjects: { title, subtitle, projects },
  } = data

  return (
    <section className="section projects">
      <Title title={title} />
      <Subtitle subtitle={subtitle} />

      <div className="section-center projects-center">
        {projects.map((project, index) => (
          <Project key={project.id} index={index} {...project} />
        ))}
      </div>

      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
