import React, { useEffect, useState } from "react"
import { countdown } from "../countdown"
import anime from "animejs/lib/anime.es.js"
import * as styles from "./countdown.module.scss"
import Title from "../components/title"

const Countdown = ({ today, start }) => {
  const [timeLeft, setTimeLeft] = useState(countdown(start).toString())
  const [displayTimer, setDisplayTimer] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(countdown(start).toString()))
    return () => clearInterval(timer)
  }, [start])

  const onDisplayTimer = () => {
    setDisplayTimer(true)
    anime({
      targets: "#timer",
      opacity: 1,
      translateY: [500, "-50%"],
      translateX: ["-50%", "-50%"],
      easing: "easeOutQuad",
      duration: 1200,
    })
    anime({
      targets: "#time",
      delay: 1200,
      duration: 1000,
      easing: "linear",
      opacity: 1,
    })
  }

  const str1 = timeLeft.split("and ")
  const seconds =
    str1[1] &&
    ((str1[1].split(" seconds")[1] && str1[1].split(" seconds")[0]) ||
      (str1[1].split(" second")[1] && str1[1].split(" second")[0]))

  return (
    <>
      <Title onMount={onDisplayTimer} />
      {displayTimer && (
        <div id="timer" className={styles.timeLeft}>
          <div className={styles.name}>Dad,</div>
          <div>Your Christmas Experience begins in:</div>
          <div id="time" className={styles.timer}>
            {str1[0]}
            {seconds && (
              <span>
                and <span className={styles.seconds}>{seconds}</span> seconds
              </span>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Countdown
