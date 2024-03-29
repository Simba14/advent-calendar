import React, { useEffect, useState } from "react"

import Calendar from "../components/calendar"
import Countdown from "../components/countdown"
import GameOver from "../components/gameOver"

const getContent = today => {
  const startDate = new Date(2023, 11, 1)
  const christmas = new Date(2023, 11, 31)

  const day = today.getDate()

  if (today < startDate) {
    return <Countdown today={today} start={startDate} />
  }

  if (today >= startDate && today <= christmas) return <Calendar day={day} />

  return <GameOver />
}

export default function Content() {
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

  return <>{getContent(today)}</>
}
