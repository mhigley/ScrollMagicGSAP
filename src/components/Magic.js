import React, { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { ReactComponent as Crush } from "../images/crush.svg"

import { gsap } from "gsap"
import ScrollMagic from "../utils/magic.anim"

import MotionPathPlugin from "gsap/MotionPathPlugin"
gsap.registerPlugin(MotionPathPlugin)

const ScrollMagicComponent = () => {
  const data = useStaticQuery(graphql`
    query IMAGEQUERY {
      imageAlex: file(relativePath: { eq: "alex.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageMatt: file(relativePath: { eq: "matt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTerry: file(relativePath: { eq: "terry.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  let trigger = useRef()
  let measure = useRef()
  let controller = new ScrollMagic.Controller()
  let scene = new ScrollMagic.Scene()
  let tween = gsap.timeline()

  const runTheMagic = (pinned, controller, flightpath) => {
    let measureDiv = measure.current.clientHeight.toString()

    tween = gsap
      .timeline()
      .add(
        gsap.to(`#${pinned} span`, {
          duration: flightpath.section1.duration,
          motionPath: flightpath.section1.motionPath,
          ease: "power2.inOut",
        })
      )
      .add(
        gsap.to(`#${pinned} span`, {
          duration: flightpath.section2.duration,
          motionPath: flightpath.section2.motionPath,
          ease: "power2.inOut",
        })
      )
      .add(
        gsap.to(`#${pinned} span`, {
          duration: flightpath.section3.duration,
          motionPath: flightpath.section3.motionPath,
          ease: "power2.inOut",
        })
      )

    scene = new ScrollMagic.Scene({
      triggerElement: trigger.current,
      duration: measureDiv,
      // loglevel: 3,
    })
      .setPin(`#${pinned}`, { pushFollowers: false })
      .setTween(tween)
      // .addIndicators()
      .addTo(controller)
  }

  return (
    <Section>
      <Avatars>
        <Avatar
          id="pinnedAlex"
          onClick={el => {
            scene.progress(0)
            controller = controller.destroy()
            controller = null
            tween = null
            controller = new ScrollMagic.Controller()
            runTheMagic(el.currentTarget.id, controller, flightpathAlex)
          }}
        >
          <span>
            <Img
              fluid={data.imageAlex.childImageSharp.fluid}
              alt="Alex Gutierrez"
            />
          </span>
        </Avatar>
        <Avatar
          id="pinnedMatt"
          onClick={el => {
            scene.progress(0)
            controller = controller.destroy()
            controller = null
            tween = null
            controller = new ScrollMagic.Controller()
            runTheMagic(el.currentTarget.id, controller, flightpathMatt)
          }}
        >
          <span>
            <Img
              fluid={data.imageMatt.childImageSharp.fluid}
              alt="Matthew Higley"
            />
          </span>
        </Avatar>
        <Avatar
          id="pinnedTerry"
          onClick={el => {
            scene.progress(0)
            controller = controller.destroy()
            controller = null
            tween = null
            controller = new ScrollMagic.Controller()
            runTheMagic(el.currentTarget.id, controller, flightpathTerry)
          }}
        >
          <span>
            <Img
              fluid={data.imageTerry.childImageSharp.fluid}
              alt="Terry Solis"
            />
          </span>
        </Avatar>
      </Avatars>

      <div ref={measure}>
        <div ref={trigger}></div>
        <Crush />
      </div>
    </Section>
  )
}

export default ScrollMagicComponent

const Section = styled.section`
  width: 100%;
`
const Avatars = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Avatar = styled.div`
  --minwidth: 100px;
  --width: 25vw;
  --maxwidth: 150px;
  --minheight: var(--minwidth);
  --height: var(--width);
  --maxheight: var(--maxwidth);

  display: flex;
  margin: 10px;
  min-width: var(--minwidth);
  width: var(--width);
  max-width: var(--maxwidth);
  min-width: var(--minwidth);
  height: var(--height);
  max-height: var(--maxheight);
  span {
    border-radius: 100%;
    overflow: hidden;
  }
  span,
  div {
    min-width: inherit;
    width: inherit;
    max-width: inherit;
    min-height: inherit;
    height: inherit;
    max-height: inherit;
  }
`

const flightpathAlex = {
  section1: {
    duration: 2,
    motionPath: {
      curviness: 1.25,
      autoRotate: false,
      path: [
        { x: 0, y: -20 },
        { x: 0, y: 10 },
      ],
    },
  },
  section2: {
    duration: 5,
    motionPath: {
      curviness: 1.25,
      autoRotate: false,
      path: [
        { x: 510, y: 60 },
        { x: 620, y: -60 },
        { x: 500, y: -100 },
        { x: 380, y: 20 },
        { x: 500, y: 60 },
        { x: 580, y: 20 },
        { x: 620, y: 15 },
      ],
    },
  },
  section3: {
    duration: 1.2,
    motionPath: {
      curviness: 1.25,
      autoRotate: false,
      path: [
        { x: 660, y: 20 },
        { x: 800, y: 130 },
      ],
    },
  },
}

const flightpathMatt = {
  section1: {
    duration: 6,
    motionPath: {
      curviness: 1.25,
      autoRotate: false,
      path: [
        { x: 510, y: 60 },
        { x: 620, y: -60 },
        { x: 500, y: -100 },
        { x: 380, y: 20 },
        { x: 500, y: 60 },
        { x: 580, y: 20 },
        { x: 620, y: 15 },
      ],
    },
  },
  section2: {
    duration: 1,
    motionPath: {
      curviness: 1.25,
      autoRotate: false,
      path: [
        { x: 660, y: 20 },
        { x: 800, y: 130 },
      ],
    },
  },
  section3: {
    duration: 2,
    motionPath: {
      curviness: 1.25,
      autoRotate: false,
      path: [
        { x: 0, y: -20 },
        { x: 0, y: 10 },
      ],
    },
  },
}

const flightpathTerry = {
  section1: {
    duration: 4,
    motionPath: {
      curviness: 1.25,
      autoRotate: false,
      path: [
        { x: 660, y: 20 },
        { x: 800, y: 130 },
      ],
    },
  },
  section2: {
    duration: 1.5,
    motionPath: {
      curviness: 1.25,
      autoRotate: false,
      path: [
        { x: 0, y: -20 },
        { x: 0, y: 10 },
      ],
    },
  },
  section3: {
    duration: 3,
    motionPath: {
      curviness: 1.25,
      autoRotate: false,
      path: [
        { x: 510, y: 60 },
        { x: 620, y: -60 },
        { x: 500, y: -100 },
        { x: 380, y: 20 },
        { x: 500, y: 60 },
        { x: 580, y: 20 },
        { x: 620, y: 15 },
      ],
    },
  },
}
