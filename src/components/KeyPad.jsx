import React, { useEffect, useState } from "react";

export default function KeyPad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3100/letters")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setLetters(json);
      });
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];

          return (
            <div key={letter.key} className={color}>
              {letter.key.toUpperCase()}
            </div>
          );
        })}
    </div>
  );
}
