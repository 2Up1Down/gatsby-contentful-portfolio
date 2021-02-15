import React from "react"

const Title = ({ title, subtitle = "" }) => {
  return (
    <div className="section-title">
      <h2 className="title">{title || "default title"}</h2>
      <div className="underline"></div>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  )
}

export default Title
