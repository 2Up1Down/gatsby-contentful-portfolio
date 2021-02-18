import React from "react"
import SocialLinks from "./SocialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks className="footer-links" />
      <h4>
        &#169;{new Date().getFullYear()} All rights reserved by{" "}
        <span>Wendelin Steiner</span>
      </h4>
    </footer>
  )
}

export default Footer
