import React, { useRef } from "react"

import * as styles from "./typer.module.scss"

const Typer = ({ content, onEnd, maintainLastSentence = false }) => {
  const cursorRef = useRef()
  const textRef = useRef()

  // Current sentence being processed
  let part = 0

  // Character number of the current sentence being processed
  let partIndex = 0

  // Holds the handle returned from setInterval
  let intervalVal

  const Type = () => {
    if (!textRef.current) return
    // Get substring with 1 characater added
    const text = content[part].substring(0, partIndex + 1)
    textRef.current.innerHTML = text
    partIndex++

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === content[part]) {
      // Hide the cursor
      cursorRef.current.style.display = "none"

      clearInterval(intervalVal)

      // only delete if maintainLastSentence is false
      if (!(maintainLastSentence && part === content.length - 1)) {
        setTimeout(function () {
          intervalVal = setInterval(Delete, 50)
        }, 1000)
      }
    }
  }

  const Delete = () => {
    // Get substring with 1 characater deleted
    const text = content[part].substring(0, partIndex - 1)

    textRef.current.innerHTML = text
    partIndex--
    if (part === content.length - 1 && text === "") {
      clearInterval(intervalVal)
      onEnd()
    }
    // If sentence has been deleted then start to display the next sentence
    if (text === "" && part !== content.length - 1) {
      clearInterval(intervalVal)

      part++
      partIndex = 0

      // Start to display the next sentence after some time
      setTimeout(function () {
        cursorRef.current.style.display = "inline-block"
        intervalVal = setInterval(Type, 100)
      }, 200)
    }
  }

  intervalVal = setInterval(Type, 100)

  return (
    <div className={styles.container}>
      <div className={styles.text} id={"text"} ref={textRef}></div>
      <span className={styles.cursor} id={"cursor"} ref={cursorRef}></span>
    </div>
  )
}

export default Typer
