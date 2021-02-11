import React from "react"

const Subtitle = ({ subtitle }) => {
  return (
    <div className="section-title">
      <h3>{subtitle || "default subtitle"}</h3>
    </div>
  )
}

export default Subtitle
