import React, { useEffect, useState } from "react"
import countdown from "countdown"
import styles from "./title.module.scss"
import Title from "../components/title"

const Countdown = ({ today, start }) => {
  const [timeLeft, setTimeLeft] = useState(countdown(start).toString())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(countdown(start).toString()))
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Title onMount={() => console.log("")} />
      <div className={styles.timeLeft}>
        <div className={styles.name}>
          <span>Cody</span> Hannah,
        </div>
        <div>Your Christmas Experience begins in:</div>
        <div className={styles.timer}>{timeLeft}</div>
      </div>
    </>
  )
}

export default Countdown
