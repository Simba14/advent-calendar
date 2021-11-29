import React, { useRef, useState } from "react"
import anime from "animejs/lib/anime.es.js"
import Title from "../components/title"
import Typer from "../components/typer"
import LeftArrow from "../assets/left-arrow.svg"
import styles from "./calendar.module.scss"

const data = [
  { number: 3 },
  { number: 16 },
  { number: 23 },
  { number: 1 },
  { number: 5 },
  { number: 19 },
  { number: 11 },
  { number: 13 },
  { number: 7 },
  { number: 12 },
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
  1: {
    present: "Holding your butt in public places",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  2: {
    present: "Waking up with you and our non-verbal check-ins",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  3: {
    present: "Watching and reacting to love related content",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  4: {
    present: "Painting in my room and sneaking a frequent glance at you",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  5: {
    present: "Bending you over all the furniture in reach",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  6: {
    present: "Pastries, particularly those Panas",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  7: {
    present: "Lying with you in the hammock in your parent's garden",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  8: {
    present: "Creamy",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  9: {
    present: "Getting told how smug I am after telling friends about you",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  10: {
    present:
      "That feeling a dog has, after a nice long walk, tip bits during the cooking, and the whole family in the living room, safe and sound.",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  11: {
    present: "Monica's eggs and the way you cooked them",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  12: {
    present:
      "Thinking about you lots during the day, the reassuring feeling of our next meeting, not being too far away",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  13: {
    present:
      "Bowling with you and my family (In parellel, you bowling them away)",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  14: {
    present: "BTIB",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  15: {
    present: "Walking around, holding your hand",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  16: {
    present:
      "Laying by your side in a tent with no mat; You telling me how shit I put it up",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  17: {
    present: "Reading to you as the day reaches its end",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  18: {
    present:
      "The way you affectionately hold on to me for that extra moment longer",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  19: {
    present: `When you shrug, tilt your head to the side and tell me 'That's nice', and how you're always right`,
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  20: {
    present: "Your constant affection and affirmations.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  21: {
    present: "Snugging and hugging",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  22: {
    present: "Bringing Cody into my life",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  23: {
    present: "When we're in sync",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  24: {
    present: "Dancing with you, watching the way you move",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  25: {
    present:
      "25 reasons why it's more than nice, a tiny sample of a huge, expanding list. My best mate, the love of my life",
    animation: {
      translateY: ["-100%", "-50%"],
      translateX: ["-50%", "-50%"],
      top: ["100%", "50%"],
      left: ["50%", "50%"],
    },
  },
}

const PAST_DOOR = "past-door"
const ACTIVE_DOOR = "active-door"
const FUTURE_DOOR = "future-door"

const Calendar = ({ day }) => {
  const activeRef = useRef()
  const [displayTyper, setDisplayTyper] = useState(false)
  const [displayTitle, setDisplayTitle] = useState(true)
  const [doorOpened, setDoorOpened] = useState(false)
  const [displayPresent, setDisplayPresent] = useState(false)
  const [displayCalendar, setDisplayCalendar] = useState(true)
  const [animating, setAnimating] = useState(false)
  let currentTarget

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

  const presentAnimation = doorNumber => {
    const timeline = anime.timeline({ easing: "easeOutExpo" })

    timeline.add({
      targets: "#present-text",
      opacity: 1,
      translateX: [300, 0],
      translateY: [400, 0],
      duration: 1500,
    })
    timeline.add(
      {
        targets: currentTarget,
        opacity: 0,
        duration: 2500,
      },
      "-=1500"
    )
    timeline.add({
      targets: currentTarget,
      scale: "1",
      duration: 1,
      complete: () => {
        if (doorNumber === day) setDoorOpened(true)
        setDisplayCalendar(false)
      },
    })
    timeline.add({
      targets: "#back-btn",
      opacity: 1,
      duration: 1000,
    })
  }

  const handleOnClick = (e, doorClass, door) => {
    currentTarget = e.currentTarget
    const timeline = anime.timeline({ easing: "easeOutExpo" })
    setAnimating(true)

    timeline.add({
      targets: [`#${PAST_DOOR}`, `#${FUTURE_DOOR}`, `#${ACTIVE_DOOR}`],
      opacity: 0,
      duration: 1500,
    })
    timeline.add(
      {
        targets: e.currentTarget,
        opacity: 1,
        borderColor: "#a58c24",
        backgroundColor: "#0f6235",
        color: "#fff",
        duration: 1500,
      },
      "-=1500"
    )
    timeline.add({
      targets: e.currentTarget,
      duration: 3000,
      ...presents[door].animation,
    })
    timeline.add({
      targets: e.currentTarget,
      scale: "20",
      color: "#0f6235",
      duration: 1500,
      complete: () => {
        setDisplayPresent(door)
        presentAnimation(door)
      },
    })
  }

  const onBack = () => {
    const timeline = anime.timeline({ easing: "easeOutExpo" })
    setDisplayCalendar(true)
    timeline.add({
      targets: "#present",
      opacity: 0,
      duration: 1500,
      complete: () => {
        setAnimating(false)
        setDisplayPresent(false)
        startAnimation()
      },
    })
  }

  return (
    <div key={day}>
      {displayTitle && <Title onMount={() => setDisplayTyper(true)} />}
      {displayTyper && (
        <Typer content={["25 reasons why it's nice"]} onEnd={startAnimation} />
      )}
      {displayCalendar && (
        <div id="calendar" className={styles.calendar}>
          {data.map(door => {
            const isActiveDay = door.number === day
            const notFuture = day >= door.number
            const isPastDay = notFuture ? PAST_DOOR : FUTURE_DOOR
            const doorId = isActiveDay && !doorOpened ? ACTIVE_DOOR : isPastDay
            const doorNumber = `door${door.number}`

            return (
              <button
                key={`${doorNumber}, ${day}`}
                id={doorId}
                ref={isActiveDay ? activeRef : null}
                className={`${styles.door} ${styles[doorNumber]} ${
                  notFuture ? styles.active : ""
                } ${doorNumber}`}
                onClick={e =>
                  notFuture &&
                  !animating &&
                  handleOnClick(e, doorNumber, door.number)
                }
              >
                {door.number}
              </button>
            )
          })}
        </div>
      )}
      {displayPresent && (
        <div className={styles.present} id="present">
          <div className={styles.presentText} id="present-text">
            {presents[displayPresent].present}
          </div>
          <button className={styles.backBtn} id="back-btn" onClick={onBack}>
            <img alt="back arrow" src={LeftArrow} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Calendar
