import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "./Title"
import Subtitle from "./Subtitle"
import Card from "./Card"

const query = graphql`
  {
    sectionMethodology: contentfulSectionMethodology {
      title
      subtitle
      cards {
        id
        image {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        title
        body {
          body
        }
      }
    }
  }
`

const Methodology = () => {
  const data = useStaticQuery(query)
  const {
    sectionMethodology: { title, subtitle, cards },
  } = data

  return (
    <section className="section section-center methodology">
      <Title title={title} />
      {subtitle && <Subtitle subtitle={subtitle} />}
      <div className="methodology-center">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}

export default Methodology
