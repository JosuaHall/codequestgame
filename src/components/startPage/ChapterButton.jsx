import React from "react";
import { Link } from "react-router-dom";

const ChapterButton = ({ label, number, text }) => {
  return (
    <Link to={`/chapter/${number}/${text}`} className="start-button">
      {`${label} ${number}
      ${text}`}
    </Link>
  );
};

export default ChapterButton;
