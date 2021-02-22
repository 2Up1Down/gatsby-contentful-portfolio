import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import About from "../components/About"
import Contact from "../components/Contact"
import Methodology from "../components/Methodology"
import Partners from "./../components/Partners"
import Citation from "../components/Citation"

export default () => {
  return (
    <Layout>
      <SEO title="steiner" />
      <Hero />
      <Services />
      <Projects showLink />
      <Citation />
      <About />
      <Methodology />
      <Partners />
      <Contact />
    </Layout>
  )
}
