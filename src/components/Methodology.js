import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "./Title"
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
            ...GatsbyContentfulFluid
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
    <section className="section methodology bg-grey">
      <div className="section-center">
        <Title title={title} subtitle={subtitle} />

        <div className="methodology-center">
          {cards.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Methodology
