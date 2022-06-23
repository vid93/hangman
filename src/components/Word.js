import React, { useEffect } from "react";
import axios from "axios";

const Word = ({ setWord, word, correctLetters }) => {
  const length = Math.floor(Math.random() * 5) + 4
  useEffect(() => {
    axios.get(`https://random-word-api.herokuapp.com/word?length=${length}`).then((res) => {
      setWord(res.data[0]);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="word">
      {word.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
