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
      "You're the strongest person I know and my biggest inspiration. And that will never change. From day one to forever.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  2: {
    present:
      "Driving me to the arse end of London for all my football games. Supporting me even though you hated football and were surrounded by shitty parents. You always put me first, even on your days off.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  3: {
    present:
      "Never holding back your opinions and always standing up for yourself and those you care about.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  4: {
    present:
      "For using swear words like no one else. The word 'Cunt' has never been uttered with such vigour.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  5: {
    present: "Falling in love with the best Dad I could have ever hoped for.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  6: {
    present:
      "For knowing that whatever happens, I can rely on your care and support. The freedom of thought and expression that comes from that reassurance is priceless.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  7: {
    present:
      "For being the best cook alive. I don't know how the fuck you do it, but not only can you whip something up in 20 minutes, it's always absolutely delicious",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  8: {
    present:
      "Seeing you shine on stage. Whichever character, whatever the role, you always stole the show",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  9: {
    present:
      "Your sense of humour and teaching me to never take myself too seriously",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  10: {
    present:
      "For saving me from a life of heroin addiction and chronic depression by convincing me to sing Michael Buble at my X-factor audition",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  11: {
    present:
      "For being such a great mum to Gulli and giving me a wonderful big brother",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  12: {
    present:
      "Curling up on the sofa with you and watching trashy tv. The time where I feel most at home",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  13: {
    present:
      "For always picking me up and dropping me off. Whatever the time I knew you'd always be there.",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  14: {
    present:
      "Writing all my essays in school for me and getting me A*s. Probably only got into Owens because of you.",
    animation: {
      translateY: ["-25%", "-50%"],
      translateX: ["-50%"],
      top: ["25%", "50%"],
      left: "50%",
    },
  },
  15: {
    present:
      "Fully backing and encouraging every decision I have made. You always made me feel safe and sane.",
    animation: {
      translateY: ["-50%", "-50%"],
      translateX: ["-50%"],
      top: ["50%", "50%"],
      left: "50%",
    },
  },
  16: {
    present:
      "Being a key part of this whacky and wonderful Blundell family. I'm so priveleged to be a part of it.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  17: {
    present: "Making me a feminist from day one!",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  18: {
    present:
      "For being the most hardworking, competent person I know. Whatever you choose to do, you always smash it.",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  19: {
    present:
      "Showing me what true love looks like. Your relationship and devotion to Dad is inspiring and I'm so grateful to be a constant witness to it.",
    animation: {
      translateY: "-50%",
      translateX: "-50%",
      top: "50%",
      left: "50%",
    },
  },
  20: {
    present:
      "For giving me great genes. I think it's fair to say you can take full credit for all the good parts of my genetics",
    animation: {
      translateY: ["-75%", "-50%"],
      translateX: ["-50%"],
      top: ["75%", "50%"],
      left: "50%",
    },
  },
  21: {
    present:
      "Teaching me the cultural significance of the Arts, and allowing me to view it as so much more than just pure entertainment.",
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
          content={[
            "25 reasons why I am extremely grateful to have you as my mum",
          ]}
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
