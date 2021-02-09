import React, { useState } from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(true)

  return (
    <aside className={`sidebar ${sidebarVisibility ? "show-sidebar" : ""}`}>
      <button
        className="close-btn"
        onClick={() => setSidebarVisibility(!sidebarVisibility)}
      >
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass="sidebar-links" />
        <SocialLinks styleClass="sidebar-icons" />
      </div>
    </aside>
  )
}

export default Sidebar
