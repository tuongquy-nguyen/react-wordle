import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import KeyPad from "./KeyPad";
import Modal from "./Modal";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 1500);
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 1500);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  useEffect(() => {}, [guesses, turn, isCorrect]);

  const onClickReset = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>WORDLE</h1>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <KeyPad usedKeys={usedKeys} />
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          solution={solution}
          onClickReset={onClickReset}
        />
      )}
    </div>
  );
}
