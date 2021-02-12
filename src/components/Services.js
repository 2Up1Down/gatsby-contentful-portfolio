import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Title from "./Title"
import FaIcon from "./FaIcon"
import Subtitle from "./Subtitle"

const query = graphql`
  {
    contentfulSectionService {
      title
      subtitle
      services {
        title
        iconName
        description {
          description
        }
        id
        keywords
      }
    }
  }
`

const Services = () => {
  const data = useStaticQuery(query)
  const {
    contentfulSectionService: { title, subtitle, services },
  } = data

  const tempServices = services.map(service => {
    const {
      id,
      iconName,
      title,
      description: { description },
      // TODO: Implement keywords at a later stage
    } = service
    return (
      <article className="service" key={id}>
        <FaIcon iconName={iconName} className="service-icon" />
        <h3>{title}</h3>
        <div className="underline"></div>
        <p>{description}</p>
      </article>
    )
  })

  return (
    <section className="section bg-grey" id="services">
      <div className="section-center">
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
        <div className="services-center">{tempServices}</div>
      </div>
    </section>
  )
}

export default Services
