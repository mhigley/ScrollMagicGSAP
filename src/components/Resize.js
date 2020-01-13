// import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import React, { useRef, useEffect } from "react"
// import Measure from "react-measure"

import ScrollMagic from "scrollmagic"
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

const Resize = () => {
  useEffect(() => {
    let measureDiv = measure.current.clientHeight.toString()

    new ScrollMagic.Scene({
      triggerElement: trigger.current,
      duration: measureDiv,
      //offset: -160
    })
      .addIndicators({
        name: "scene",
      })
      .on("enter", event => {
        console.log("entered")
      })
      .on("leave", event => {
        console.log("left")
      })
      .addTo(controller)
  }, [controller])

  return (
    <section>
      <div ref={trigger}></div>
      <div ref={measure}>
        <h1 ref={pinned}>Headline</h1>
        <p>
          I can do cool things with my dimensions now Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Earum dolorem neque praesentium sit iste
          minus similique perspiciatis blanditiis hic suscipit. Cupiditate nihil
          aliquid enim? A?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          facilis reiciendis mollitia alias odit corrupti aspernatur. Nam,
          adipisci voluptatum quod facilis deleniti aut ex sequi ab repellendus
          error, libero iste obcaecati explicabo culpa ullam incidunt, nostrum
          quis ipsum deserunt voluptates eligendi. Architecto temporibus odio
          aperiam unde vero quidem, saepe sint!
        </p>
      </div>
    </section>
  )
}

export default Resize
