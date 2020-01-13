import React from "react"

const Block = props => {
  return (
    <div style={{ background: props.bg, minHeight: "500px" }}>
      {props.headline}
    </div>
  )
}

export default Block
