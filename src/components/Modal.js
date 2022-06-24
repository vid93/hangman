import React from 'react'
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const newGame = ({gameDone, setGameDone, setCorrectLetters, setWrongLetters, word, setWord}) => {

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "55%",
        width: "45%",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        textAlign: 'center'
      };

      const newWord = () => {
        const length = Math.floor(Math.random() * 5) + 4
        axios.get(`https://random-word-api.herokuapp.com/word?length=${length}`).then((res) => {
          setWord(res.data[0]);
        });
      }

      const playAgain = () => {
        setGameDone(false)
        setCorrectLetters([])
        setWrongLetters([])
        newWord()
      }

    return (
        <div>
          <Modal
            open={gameDone}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              <Button onClick={playAgain} >Play Again</Button>
            </Box>
          </Modal>
        </div>
      );
}

export default newGame