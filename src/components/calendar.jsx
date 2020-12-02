import React, { useRef, useState } from "react"
import anime from "animejs/lib/anime.es.js"
import Title from "../components/title"
import Typer from "../components/typer"
import styles from "./calendar.module.scss"

const data = [
  { number: 3 },
  { number: 16 },
  { number: 23 },
  { number: 1 },
  { number: 5 },
  { number: 19 },
  { number: 11 },
  { number: 12 },
  { number: 13 },
  { number: 7 },
  { number: 14 },
  { number: 8 },
  { number: 24 },
  { number: 10 },
  { number: 22 },
  { number: 15 },
  { number: 9 },
  { number: 21 },
  { number: 18 },
  { number: 6 },
  { number: 20 },
  { number: 2 },
  { number: 17 },
  { number: 4 },
  { number: 25 },
]

const presents = {
  1: "Your present is to be delivered by a white in fake Barbour",
  2: "Get it before the Moths do",
  3: "If you were to be bent over",
  4: "In the Servants' quarters ",
  5: "Just seeking some phototropism",
  6: "On my way to Narnia",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "Have you ever felt like a plastic bag",
  25: "Chicken on top",
}

const PAST_DOOR = "past-door"
const ACTIVE_DOOR = "active-door"
const FUTURE_DOOR = "future-door"

const Calendar = ({ day }) => {
  const activeRef = useRef()
  const [displayTyper, setDisplayTyper] = useState(false)
  const [displayTitle, setDisplayTitle] = useState(true)
  const [doorOpened, setDoorOpened] = useState(false)

  const startAnimation = () => {
    setDisplayTyper(false)
    setDisplayTitle(false)

    const tl = anime.timeline({
      easing: "easeOutExpo",
    })

    tl.add({
      targets: "#calendar",
      opacity: 1,
      duration: 1200,
    })
    tl.add({
      targets: `#${PAST_DOOR}`,
      backgroundColor: "#acc0ad",
      borderColor: "#b1afa9",
      color: "#e5e3dd",
      duration: 1000,
    })
  }

  const handleOnClick = isActive => {
    if (isActive && !doorOpened) {
      const timeline = anime.timeline({ easing: "easeOutExpo" })

      timeline.add({
        targets: [`#${PAST_DOOR}`, `#${FUTURE_DOOR}`],
        opacity: 0,
        duration: 1500,
      })
      timeline.add({
        targets: `#${ACTIVE_DOOR}`,
        top: `${activeRef.current.getBoundingClientRect().top - 32}px`,
        left: `${activeRef.current.getBoundingClientRect().left - 32}px`,
        complete: () => {
          activeRef.current.style.setProperty("position", "absolute")
          activeRef.current.style.setProperty("margin", "auto")
          activeRef.current.style.setProperty("cursor", "not-allowed")
        },
        duration: 1,
      })
      timeline.add({
        targets: `#${ACTIVE_DOOR}`,
        translateY: "-50%",
        translateX: "-50%",
        top: "50%",
        left: "50%",
        duration: 1000,
      })
      timeline.add({
        targets: `#${ACTIVE_DOOR}`,
        translateY: "0%",
        translateX: "0%",
        complete: () => {
          activeRef.current.style.setProperty("top", "unset")
          activeRef.current.style.setProperty("left", "unset")
        },
        duration: 1,
      })
      timeline.add({
        targets: `#${ACTIVE_DOOR}`,
        scale: "20",
        color: "#0f6235",
        duration: 1500,
      })
      timeline.add({
        targets: "#present-text",
        opacity: 1,
        translateX: [300, 0],
        translateY: [400, 0],
        duration: 1500,
        complete: () => {
          setDoorOpened(true)
        },
      })
    }
  }

  return (
    <div>
      {displayTitle && <Title onMount={() => setDisplayTyper(true)} />}
      {displayTyper && (
        <Typer
          content={[
            `Cody, my love`,
            "It has now been",
            "three nights without you.",
            "Please come home",
          ]}
          onEnd={startAnimation}
        />
      )}

      <div id="calendar" className={styles.calendar}>
        {data.map(door => {
          const isActiveDay = door.number === day
          const isPastDay = day >= door.number ? PAST_DOOR : FUTURE_DOOR
          const doorId = isActiveDay && !doorOpened ? ACTIVE_DOOR : isPastDay
          console.log({ doorId, number: door.number })
          return (
            <div
              key={`door ${door.number}, ${day}`}
              id={doorId}
              ref={isActiveDay ? activeRef : null}
              className={`${styles.door} ${isActiveDay ? styles.active : ""}`}
              onClick={() => handleOnClick(isActiveDay)}
            >
              {door.number}
            </div>
          )
        })}
        <div id="present-text" className={styles.present}>
          {presents[day]}
        </div>
      </div>
    </div>
  )
}

export default Calendar
