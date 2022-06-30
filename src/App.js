import { useEffect, useState } from "react";
import "./App.css";

import Word from "./components/Word";
import Hangman from "./components/Hangman";
import WrongTries from "./components/WrongTries";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Message from "./components/Message";

function App() {
  const [word, setWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [gameDone, setGameDone] = useState(false);
  const [show, setShow] = useState(false)

  const showMessage = (setShow) => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2000);
  }

  useEffect(() => {
    const keyPress = (event) => {
      const { key, keyCode } = event;

      if (keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (word.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((current) => [...current, letter]);
          } else {
            showMessage(setShow)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((current) => [...current, letter]);
          } else {
            showMessage(setShow)
          }
        }
      }
    };
    window.addEventListener("keydown", keyPress);
    return () => window.removeEventListener("keydown", keyPress);
  }, [correctLetters, wrongLetters, word]);

  return (
    <div className="App">
      <Header/>
      <Hangman wrongLetters={wrongLetters} />
      <Word setWord={setWord} word={word} correctLetters={correctLetters} />
      <WrongTries wrongLetters={wrongLetters} />
      <Modal
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        gameDone={gameDone}
        setGameDone={setGameDone}
        setCorrectLetters={setCorrectLetters}
        setWrongLetters={setWrongLetters}
        word={word}
        setWord={setWord}
      />
      <Message show={show}/>
    </div>
  );
}

export default App;
