import React from "react"
import Block from "../components/Block"
import Magic from "../components/Magic"
import "../styles/global.css"

export default () => {
  return (
    <div id="divWrap">
      <Block headline={`Block One`} bg="salmon" />
      <Block headline={`Block Two`} bg="dodgerblue" />
      <Block headline={`Block Three`} bg="aqua" />
      <Magic />
      <Block headline={`Block Four`} bg="cadetblue" />
      <Block headline={`Block Five`} bg="darkgoldenrod" />
    </div>
  )
}
