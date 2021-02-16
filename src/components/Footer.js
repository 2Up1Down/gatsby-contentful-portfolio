import React from "react"
import SocialLinks from "./SocialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks className="footer-links" />
      <h4>
        Copyright &#169;{new Date().getFullYear()} <span>Webdev</span> all
        rights reserved
      </h4>
    </footer>
  )
}

export default Footer
