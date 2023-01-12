import React, { useRef, useState } from "react"
import anime from "animejs/lib/anime.es.js"
import Title from "../components/title"
import Typer from "../components/typer"
import LeftArrow from "../assets/left-arrow.svg"
import * as styles from "./calendar.module.scss"

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
    present:
      "I’ve been thinking about taking up meditation. I figure it’s better than sitting around and doing nothing.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  2: {
    present: "Did you hear about the kidnapping? They woke her up.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  3: {
    present: "Did you hear about the kidnapping? They woke her up.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  4: {
    present:
      "Introducing me to Arsenal and the first true love of my love, Thierry.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  5: {
    present:
      "I lost my job at the bank on my first day. A woman asked me to check her balance, so I pushed her over.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  6: {
    present: "I once read a book about glue. I couldn’t put it down.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  7: {
    present:
      "Two goldfish are in a tank. One says to the other, “Do you know how to drive this thing?”",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  8: {
    present:
      "I know a lot of jokes about retired people, but none of them work.",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  9: {
    present: "What do you call a man with a rubber toe? Roberto!",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  10: {
    present: "Humpty Dumpty had a great fall. Summer wasn’t bad either.",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  11: {
    present: "Did you hear about the kidnapping? They woke her up.",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  12: {
    present:
      "My wife asked me to stop singing “Wonderwall” to her. I said maybe...",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  13: {
    present: "Simple strolls up to Cockfosters with you",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  14: {
    present: "Showing me what healthy masculinity looks like.",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  15: {
    present:
      "Fully backing and encouraging every decision I have made. Trusting in me",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  16: {
    present: "Embracing the Blundell's, even when it might not be the easiest.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  17: {
    present:
      "Disney Land and all the other wonderful holidays, but mainly Disney Land. I still refuse to believe mum didn't enjoy it.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  18: {
    present:
      "Your genuine passion and enthusiam with whomever and whatever you are discussing",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  19: {
    present: `Knowing that I can come to you with any problem and that I will always receive thoughtful advice.`,
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  20: {
    present: "Proof reading all my Uni work! I haven't forgotten!",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  21: {
    present:
      "Teaching me the cultural significance of Cinema and Theatre, and allowing me to view it as art rather than just pure entertainment.",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  22: {
    present:
      "The relationship you share with mum. You've both shown me what a good love looks like",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  23: {
    present:
      "Teaching me what acceptance is and what inclusion looks like. And for letting me know when I was younger what language or views were unacceptable.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  24: {
    present:
      "For always wanting to spend time with me and do cute things (like building the Emirates).",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  25: {
    present:
      "25 reasons why I feel so grateful to have you as an ever-present role model in my life. A tiny sample of a huge, expanding list.",
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
        <Typer
          content={["25 rubbish jokes, nothing more"]}
          onEnd={startAnimation}
        />
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
