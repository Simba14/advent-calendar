import React, { useState } from "react"
import * as styles from "./index.module.scss"

import Content from "../components/content"

export default function Home() {
  const [contentEnabled, setContentEnabled] = useState(true)
  const [userInput, setUserInput] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    if (userInput === process.env.GATSBY_URL) {
      setContentEnabled(true)
    }
  }

  const handleOnChange = e => {
    setUserInput(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.moreSnow} />
      {contentEnabled ? (
        <Content />
      ) : (
        <form className={styles.gateway} onSubmit={onSubmit}>
          <input
            autoFocus
            className={styles.password}
            id="password"
            placeholder="Password"
            type="password"
            onChange={handleOnChange}
            value={userInput}
          />
        </form>
      )}
    </div>
  )
}
