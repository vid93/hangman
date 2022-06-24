import React, { useEffect, useState } from "react";

import Img1 from "../images/4.jpg";
import Img2 from "../images/5.jpg";
import Img3 from "../images/6.jpg";
import Img4 from "../images/7.jpg";
import Img5 from "../images/8.jpg";
import Img6 from "../images/9.jpg";
import Img7 from "../images/10.jpg";

const Hangman = ({ wrongLetters }) => {

  
  const [hangImg, setHangImg] = useState(null)
  
  const imgs = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]
  useEffect(() => {
    setHangImg(imgs[wrongLetters.length])
    // eslint-disable-next-line
  }, [wrongLetters])


  return (
    <div className="hangman">
      <img src={hangImg} alt="img" />
    </div>
  );
};

export default Hangman;
