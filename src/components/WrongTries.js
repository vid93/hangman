import React from "react";

const WrongTries = ({ wrongLetters }) => {
  return (
    <div className="wrongTries">
      <h2>WrongTries</h2>
      {wrongLetters.map((letter, index) => {
        return(
            <span key={index}>{letter}, </span>
        )
      })}
    </div>
  );
};

export default WrongTries;
