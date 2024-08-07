import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import data from "../../data/db.json";

export default function KeyPad({ usedKeys, solution }) {
  const [firstLetters, setFirstLetters] = useState(null);
  const [secondLetters, setSecondLetters] = useState(null);
  const [thirdLetters, setThirdLetters] = useState(null);

  const { handleKeyUp } = useWordle(solution);

  useEffect(() => {
    setFirstLetters(data.firstLetters);
    setSecondLetters(data.secondLetters);
    setThirdLetters(data.thirdLetters);
  }, []);

  return (
    <div>
      <div className="firstKeypad">
        {firstLetters &&
          firstLetters.map((letter) => {
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

      <div className="secondKeypad">
        {secondLetters &&
          secondLetters.map((letter) => {
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

      <div className="thirdKeypad">
        {thirdLetters &&
          thirdLetters.map((letter) => {
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
    </div>
  );
}
