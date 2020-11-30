import React from "react"
import styles from "./index.module.scss"

import Calendar from "../components/calendar"
import Countdown from "../components/countdown"

const getContent = () => {
  const startDate = new Date(2020, 11, 1)
  const christmas = new Date(2020, 11, 25)

  const today = new Date()
  const day = today.getDate()

  if (today < startDate) {
    return <Countdown today={today} start={startDate} />
  }

  if (today >= startDate && startDate <= christmas)
    return <Calendar day={day} />

  return <div>Till Next Year (If you're lucky)</div>
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.moreSnow} />
      {getContent()}
    </div>
  )
}
