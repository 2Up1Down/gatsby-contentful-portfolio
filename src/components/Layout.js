import React, { useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import SidebarContext from "./../context/sidebarContext"

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <SidebarContext.Provider value={{ isVisible, setIsVisible }}>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </SidebarContext.Provider>
  )
}

export default Layout
