import React from "react";

const WrongTries = ({ wrongLetters }) => {
  return (
    <div className="wrongTries">
      <h4>Wrong Tries</h4>
      {wrongLetters.map((letter, index) => {
        return(
            <span key={index}>{letter}, </span>
        )
      })}
    </div>
  );
};

export default WrongTries;
