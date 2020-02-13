import React from "react"
import Loadable from "@loadable/component"
import Block from "../components/Block"
import "../styles/global.css"
// React loadable will only load the magic component in the browser because this component doesn't work on the server (dependent on the window)
const Magic = Loadable(() => import("../components/Magic"))

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
