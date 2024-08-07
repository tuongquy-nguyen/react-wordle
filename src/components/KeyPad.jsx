import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import data from "../../data/db.json";

export default function KeyPad({ usedKeys, solution }) {
  const [letters, setLetters] = useState(null);
  const { handleKeyUp } = useWordle(solution);

  useEffect(() => {
    setLetters(data.letters);
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];
          return (
            <div
              key={letter.key}
              data-id={letter.key}
              className={color}
              onClick={() => {
                window.dispatchEvent(
                  new KeyboardEvent("keyup", { key: letter.key })
                );
              }}
            >
              {letter.key.toUpperCase()}
            </div>
          );
        })}
    </div>
  );
}
