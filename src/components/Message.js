import React from "react";

const Message = ({ show }) => {
  return (
    <div className={`message ${show ? "show" : ""}`}>
      You have already tried that letter
    </div>
  );
};

export default Message;
