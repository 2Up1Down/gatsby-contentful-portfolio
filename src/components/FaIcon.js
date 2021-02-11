import React from "react"
import * as FontAwesome from "react-icons/fa"

const FaIcon = ({ iconName, className }) => {
  const icon = React.createElement(FontAwesome[iconName])
  // return <div style={{ fontSize: size, color: color }}>{icon}</div>
  return <span className={className}>{icon}</span>
}

export default FaIcon
