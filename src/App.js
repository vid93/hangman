import { useEffect, useState } from "react";
import "./App.css";

import Word from "./components/Word";
import Hangman from "./components/Hangman";
import WrongTries from "./components/WrongTries";

function App() {
  const [word, setWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const keyPress = (event) => {
      const { key, keyCode } = event;

      if (keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (word.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((current) => [...current, letter]);
          } else {
            // notify user already used that letter
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((current) => [...current, letter]);
          } else {
            // notify user already used that letter
          }
        }
      }
    };
    window.addEventListener("keydown", keyPress);
    return () => window.removeEventListener("keydown", keyPress);
  }, [correctLetters, wrongLetters, word]);

  return (
    <div className="App">
      <h1>Hangman</h1>
      <Hangman />
      <Word setWord={setWord} word={word} correctLetters={correctLetters} />
      <WrongTries />
    </div>
  );
}

export default App;
