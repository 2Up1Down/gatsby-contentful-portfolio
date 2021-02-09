import React from "react"
import { FaTimes } from "react-icons/fa"

import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isVisible ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isVisible ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isVisible ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
