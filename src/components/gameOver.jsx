import React, { useState } from "react"
import anime from "animejs/lib/anime.es.js"
import Title from "../components/title"
import Typer from "../components/typer"

const GameOver = () => {
  const [displayTyper, setDisplayTyper] = useState(false)

  return (
    <div>
      <Title onMount={() => setDisplayTyper(true)} text="The Game Is Over" />
      {displayTyper && (
        <Typer
          content={["Till Next Year", "If you're lucky"]}
          maintainLastSentence
        />
      )}
    </div>
  )
}

export default GameOver
