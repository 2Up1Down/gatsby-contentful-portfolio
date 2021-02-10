import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xjvpzqzz" method="POST">
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                placeholder="Name"
                type="text"
              ></input>
              <input
                className="form-control"
                name="email"
                placeholder="Email"
                type="email"
              ></input>
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                rows="5"
              ></textarea>
              <button type="submit" className="btn submit-btn">
                Submit here
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
