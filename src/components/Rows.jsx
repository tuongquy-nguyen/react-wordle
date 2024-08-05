import React from "react";

export default function Rows({ guess, currentGuess }) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, index) => (
          <div key={index} className={letter.color}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    const currentGuessArray = currentGuess.split("");
    return (
      <div className="row current">
        {currentGuessArray.map((letter, index) => (
          <div key={index} className="filled">
            {letter}
          </div>
        ))}
        
        {[...Array(5 - currentGuessArray.length)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  }
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
