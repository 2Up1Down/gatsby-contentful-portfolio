import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "./Title"
import Partner from "./Partner"

const query = graphql`
  {
    sectionPartner: contentfulSectionPartner {
      title
      subtitle
      partners {
        id
        name
        description {
          description
        }
        logo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        url
      }
    }
  }
`

const Partners = () => {
  const data = useStaticQuery(query)
  const {
    sectionPartner: { title, subtitle, partners },
  } = data

  return (
    <section className="section section-center partners">
      <Title title={title} subtitle={subtitle} />

      <div className="partners-center">
        {partners.map(partner => (
          <Partner partner={partner} />
        ))}
      </div>
    </section>
  )
}

export default Partners
