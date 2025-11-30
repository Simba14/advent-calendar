import React, { useEffect, useState } from "react"

import Calendar from "../components/calendar"
import Countdown from "../components/countdown"
import GameOver from "../components/gameOver"

// Mock date for testing - set to null to use real date
// Example: new Date(2025, 11, 1) for December 1, 2025 (month is 0-indexed, so 11 = December)
const MOCK_DATE = new Date(2025, 11, 3)

const getContent = today => {
  const startDate = new Date(2025, 11, 1)
  const christmas = new Date(2025, 11, 31)

  const day = today.getDate()

  if (today < startDate) {
    return <Countdown today={today} start={startDate} />
  }

  if (today >= startDate && today <= christmas) return <Calendar day={day} />

  return <GameOver />
}

export default function Content() {
  const [today, setToday] = useState(MOCK_DATE || new Date())
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // Only update to real date if not using mock date
    if (!MOCK_DATE) {
      setToday(new Date())
    }
  }, [])

  useEffect(() => {
    // Only update to real date if not using mock date
    if (counter && !MOCK_DATE) {
      setToday(new Date())
    }
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
