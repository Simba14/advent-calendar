import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"

import Calendar from "../components/calendar"
import Countdown from "../components/countdown"
import GameOver from "../components/gameOver"

const getContent = today => {
  const startDate = new Date(2020, 11, 1)
  const christmas = new Date(2020, 11, 25)

  const day = today.getDate()

  if (today < startDate) {
    return <Countdown today={today} start={startDate} />
  }

  if (today >= startDate && today <= christmas) return <Calendar day={day} />

  return <GameOver />
}

export default function Home() {
  const [today, setToday] = useState(new Date())

  useEffect(() => {
    setToday(new Date())
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.moreSnow} />
      {getContent(today)}
    </div>
  )
}
