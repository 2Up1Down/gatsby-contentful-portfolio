import React from "react"

import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  const tempServices = services.map(service => {
    const { id, icon, title, text } = service
    return (
      <article className="service" key={id}>
        {icon}
        <h3>{title}</h3>
        <div className="underline"></div>
        <p>{text}</p>
      </article>
    )
  })

  return (
    <section className="section bg-grey">
      <div className="section-center">
        <Title title="Services"></Title>

        <div className="services-center">{tempServices}</div>
      </div>
    </section>
  )
}

export default Services
