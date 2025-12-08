import React, { useRef, useState, useLayoutEffect } from "react"
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
      "1. Letting you know every day how much I love you, and constantly finding new ways to express it - to show you how much I care, to show you how much you mean.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  2: {
    present:
      "2. Coming up with 1000’s of nicknames for you - All needed to capture the depth of your beautiful, sweet & silly personality.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  3: {
    present: "3. You riding me on every piece of furniture possible",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  4: {
    present:
      "Designing our home together, making it the most beautiful, thoughtful, cozy space for us, filling it with our own art and creations and knowing that it's truly ours.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  5: {
    present:
      "Visiting Kvaløya with you, getting to hold your hand as you show me where you grew up, the places that shaped you, getting to hear all the memories kept safely tucked away in its landscape.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  6: {
    present:
      "Being at parties or events with you, catching your eye from across the room, and smiling, because whatever room we're in, you'll always be the most wonderful person in it",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  7: {
    present:
      "Witnessing your constant creativity and giving you the space and time for you to keep your wonderful imagination and curiosity alive.",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  8: {
    present:
      "Cooking for you, cooking beside you, cooking for others, telling you off for stealing things from my chopping board, watching you become a shrimp on the kitchen floor, falling in love with you more each time",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  9: {
    present: "Coming inside of you, over and over and over and over again",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  10: {
    present:
      "Getting to kiss you as the first thing I do each day, getting to kiss you whilst we cook, getting to kiss you on trains or as we wait for trains, or planes or buses, or the light to go green, or in supermarkets, or on the walk to supermarkets, in museums, in cafes, at parties, getting to kiss you everywhere - and always getting to kiss you goodnight.",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  11: {
    present:
      "Getting lost in Italy with you, taking romantic train rides, deepending your love for Tiramisu, doing silly Italian accents, turning into pasta",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  12: {
    present:
      "Getting a dog together, giving it silly names, training it to become a cheeky sock thief.",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  13: {
    present: "Learning salsa with you (but your salsa face is not invited)",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  14: {
    present:
      "Lære norsk for og med deg. Forhåpentligvis komme til et punkt hvor du kan kommunisere dypt med meg og jeg forstår. Og jeg kan være sammen med dine venner og familie og la dem snakke fritt, være seg selv og delta i diskusjonene og latteren.",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  15: {
    present: "Meeting your family",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  16: {
    present: "Dog",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  17: {
    present: "Meeting my family",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  18: {
    present: "",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  19: {
    present: "",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  20: {
    present: "",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  21: {
    present: "",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  22: {
    present: "",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  23: {
    present: "",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  24: {
    present: "",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  25: {
    present:
      "25 reasons. A tiny sample of a huge, expanding list. You're the most important person in this world to me. Everything I am is you.",
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
  const presentTextRef = useRef(null)
  const backBtnRef = useRef(null)
  const presentContainerRef = useRef(null)
  const currentTargetRef = useRef(null)
  const [displayTyper, setDisplayTyper] = useState(false)
  const [displayTitle, setDisplayTitle] = useState(true)
  const [doorOpened, setDoorOpened] = useState(false)
  const [displayPresent, setDisplayPresent] = useState(false)
  const [displayCalendar, setDisplayCalendar] = useState(true)
  const [animating, setAnimating] = useState(false)
  const [currentDoorNumber, setCurrentDoorNumber] = useState(null)

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

  const presentAnimation = (doorNumber, targetElement) => {
    const timeline = anime.timeline({ easing: "easeOutExpo" })

    if (presentTextRef.current) {
      timeline.add({
        targets: presentTextRef.current,
        opacity: 1,
        translateX: [300, 0],
        translateY: [400, 0],
        duration: 1500,
      })
    }

    if (targetElement) {
      timeline.add(
        {
          targets: targetElement,
          opacity: 0,
          duration: 2500,
        },
        "-=1500",
      )
      timeline.add({
        targets: targetElement,
        scale: "1",
        duration: 1,
        complete: () => {
          if (doorNumber === day) setDoorOpened(true)
          setDisplayCalendar(false)
        },
      })
    }

    if (backBtnRef.current) {
      timeline.add({
        targets: backBtnRef.current,
        opacity: 1,
        duration: 1000,
      })
    }
  }

  // Use useLayoutEffect to animate present when it's displayed
  useLayoutEffect(() => {
    if (
      displayPresent &&
      currentDoorNumber &&
      presentTextRef.current &&
      backBtnRef.current
    ) {
      presentAnimation(currentDoorNumber, currentTargetRef.current)
    }
  }, [displayPresent, currentDoorNumber])

  const handleOnClick = (e, doorClass, door) => {
    currentTargetRef.current = e.currentTarget
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
      "-=1500",
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
        setCurrentDoorNumber(door)
        setDisplayPresent(door)
      },
    })
  }

  const onBack = () => {
    const timeline = anime.timeline({ easing: "easeOutExpo" })
    setDisplayCalendar(true)

    // Reset present text and back button animation states to initial values
    if (presentTextRef.current) {
      anime.set(presentTextRef.current, {
        opacity: 0,
        translateX: 300,
        translateY: 400,
      })
    }

    if (backBtnRef.current) {
      anime.set(backBtnRef.current, {
        opacity: 0,
      })
    }

    if (presentContainerRef.current) {
      timeline.add({
        targets: presentContainerRef.current,
        opacity: 0,
        duration: 1500,
        complete: () => {
          setAnimating(false)
          setDisplayPresent(false)
          setCurrentDoorNumber(null)
          currentTargetRef.current = null
          startAnimation()
        },
      })
    } else {
      // Fallback if refs aren't available
      setAnimating(false)
      setDisplayPresent(false)
      setCurrentDoorNumber(null)
      currentTargetRef.current = null
      startAnimation()
    }
  }

  return (
    <div key={day}>
      {displayTitle && <Title onMount={() => setDisplayTyper(true)} />}
      {displayTyper && (
        <Typer
          content={["25 things I can't wait to do with you!"]}
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
        <div ref={presentContainerRef} className={styles.present} id="present">
          <div
            ref={presentTextRef}
            className={styles.presentText}
            id="present-text"
          >
            {presents[displayPresent].present}
          </div>
          <button
            ref={backBtnRef}
            className={styles.backBtn}
            id="back-btn"
            onClick={onBack}
          >
            <img alt="back arrow" src={LeftArrow} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Calendar
