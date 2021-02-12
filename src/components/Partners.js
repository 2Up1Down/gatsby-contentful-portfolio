import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "./Title"
import Subtitle from "./Subtitle"
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
            src
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
    <section className="section partners">
      <Title title={title} />
      {subtitle && <Subtitle subtitle={subtitle} />}
      <div className="section-center">
        {partners.map(partner => (
          <Partner partner={partner} />
        ))}
      </div>
    </section>
  )
}

export default Partners
