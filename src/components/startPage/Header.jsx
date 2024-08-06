import React from "react";
import { Link } from "react-router-dom";
import character from "../../assets/character.png";
import character2 from "../../assets/girl.jpeg";

const Header = () => {
  return (
    <div className="start-screen-header">
      <h1>Code Quest Game</h1>
      <h3>Programming I in C Practice</h3>
      <div className="header-text-image-area">
        <p>
          Welcome to the Code Quest Game. Each section below has one or more
          quests that are small programs or lines of code for you to put
          together. The sections correspond to topics in the Programming 1 in C
          course. Piece the lines of code together in the correct order to solve
          the quest. Just select a topic that we have covered, and then select a
          problem to solve. Drag over lines from the Select Code Lines to the
          Build a Code Solution lines. You can see the text you put together in
          the Code Preview. Try out the code solution with the Test Your Code
          button to see what lines are correct and what you need to change. You
          can submit when you have done a correct response. <br />
          <br />
          Ready, set, go do a programming quest!
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
