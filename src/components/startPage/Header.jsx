import React from "react";
import { Link } from "react-router-dom";
import character from "../../assets/character.png";
import character2 from "../../assets/girl.jpeg";

const Header = () => {
  return (
    <div className="start-screen-header">
      <h1>Code Quest Game</h1>
      <h3>Welcome to Programming I with Dr. Redfield</h3>
      <div className="header-text-image-area">
        <p>
          Welcome to 'CodeQuest: The Beginner's Journey'! Step into the shoes of
          Alex and Emma, two bright-eyed university students embarking on the
          exciting adventure of learning programming. <br />
          As students in Programming 1, Alex and Emma are eager to dive into the
          world of C programming language. But like any new endeavor, the path
          ahead seems daunting. That's where you come in. Join Alex and Emma on
          this journey of discovery as you guide and mentor them through the
          fundamentals of coding. Together, you'll unravel the mysteries of
          loops, functions, and variables, all while tackling engaging
          challenges and unraveling the secrets of programming. <br />
          <br />
          Are you ready to embark on this thrilling quest with Alex and Emma?
          Let's begin!
        </p>

        <div className="header-img">
          <img src={character} alt="" />
          <img src={character2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
