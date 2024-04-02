import React from "react";
import { Link } from "react-router-dom";

const ChapterButton = ({ label, number }) => {
  return (
    <Link to={`/chapter/${number}`} className="start-button">
      {`${label} 
      ${number}`}
    </Link>
  );
};

export default ChapterButton;
