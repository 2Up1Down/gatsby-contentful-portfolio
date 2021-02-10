import React, { useContext } from "react"
import { FaTimes } from "react-icons/fa"

import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import SidebarContext from "./../context/sidebarContext"

const Sidebar = () => {
  const { isVisible, setIsVisible } = useContext(SidebarContext)

  return (
    <aside className={`sidebar ${isVisible ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={() => setIsVisible(false)}>
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
