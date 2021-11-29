import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"

import Calendar from "../components/calendar"
import Countdown from "../components/countdown"
import GameOver from "../components/gameOver"

// const DATE = new Date(2021, 10, 29, 16, 50, 0, 0)

const getContent = today => {
  const startDate = new Date(2021, 11, 1)
  const christmas = new Date(2021, 11, 25)

  const day = today.getDate()

  if (today < startDate) {
    return <Countdown today={today} start={startDate} />
  }

  if (today >= startDate && today <= christmas) return <Calendar day={day} />

  return <GameOver />
}

export default function Home() {
  const [today, setToday] = useState(new Date())
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setToday(new Date())
  }, [])

  useEffect(() => {
    if (counter) setToday(new Date())
  }, [counter])

  useEffect(() => {
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)

    const timeTilTomorrow = Math.abs(today.getTime() - tomorrow.getTime())

    const timeout = setTimeout(() => {
      setCounter(counter + 1)
    }, timeTilTomorrow)

    return () => clearTimeout(timeout)
  }, [today])

  return (
    <div className={styles.wrapper}>
      <div className={styles.moreSnow} />
      {getContent(today)}
    </div>
  )
}
