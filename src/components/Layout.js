import React, { useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { useDocumentTitle } from "./../hooks/useDocumentTitle"

const Layout = ({ children, title }) => {
  const [isVisible, setIsVisible] = useState(false)
  useDocumentTitle(title || "Digital Project Management")

  const toggleSidebar = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isVisible={isVisible} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
