import React from 'react'
import Rows from './Rows'

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Rows key={index} currentGuess={currentGuess} />
        }
        return <Rows key={index} guess={guess} />
      })}
    </div>
  )
}
