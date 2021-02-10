import React, { useContext } from "react"
import { FaAlignRight } from "react-icons/fa"

import logo from "../assets/logo.svg"
import PageLinks from "../constants/links"
import SidebarContext from "./../context/sidebarContext"

const Navbar = () => {
  const { setIsVisible } = useContext(SidebarContext)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo" />
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setIsVisible(true)}
          >
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
