import React, { useEffect } from "react"
import anime from "animejs/lib/anime.es.js"
import styles from "./title.module.scss"

const Title = ({ onMount, text = "Merry Christmas" }) => {
  useEffect(() => {
    anime({
      targets: "#merry",
      opacity: 1,
      duration: 1000,
      delay: 1200,
      translateY: [-200, 0],
      complete: onMount,
    })
    return () => {
      anime({
        targets: "#merry",
        opacity: 0,
        duration: 1000,
        translateY: -200,
      })
    }
  }, [])

  return (
    <svg className={styles.titleSvg} viewBox="0 0 500 500">
      <path id="curve" d="M 50 150 C 150 50 350 50 450 150" />
      <text id="merry" width="500">
        <textPath xlinkHref="#curve">{text}</textPath>
      </text>
    </svg>
  )
}

export default Title
