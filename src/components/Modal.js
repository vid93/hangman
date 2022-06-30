import React, { useEffect } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const NewGame = ({
  correctLetters,
  wrongLetters,
  gameDone,
  setGameDone,
  setCorrectLetters,
  setWrongLetters,
  word,
  setWord,
}) => {
  const checkWin = (correct, wrong, word) => {
    let status = "win";

    word.split("").forEach((letter) => {
      if (!correct.includes(letter)) {
        status = "";
      }
    });

    if (wrong.length === 6) status = "lose";

    return status;
  };

  let message = "";
  let correctWord = "";
  let show = false;

  if (checkWin(correctLetters, wrongLetters, word) === "win") {
    message = "Congratulations! You won!";
    show = true;
  } else if (checkWin(correctLetters, wrongLetters, word) === "lose") {
    message = "Unfortunately you lost.";
    correctWord = `Correct word was: ${word}`;
    show = true;
  }

  useEffect(() => {
    setGameDone(show);
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "25%",
    width: "45%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  const newWord = () => {
    const length = Math.floor(Math.random() * 5) + 4;
    axios
      .get(`https://random-word-api.herokuapp.com/word?length=${length}`)
      .then((res) => {
        setWord(res.data[0]);
      });
  };

  const playAgain = () => {
    setGameDone(false);
    setCorrectLetters([]);
    setWrongLetters([]);
    newWord();
  };

  return (
    <div>
      <Modal
        open={gameDone}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {correctWord}
          </Typography>
          <Button onClick={playAgain}>Play Again</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default NewGame;
