import React from "react";
import { useParams } from "react-router-dom";

const challanges = [
  {
    name: "For Loops",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis voluptatum, quisquam, amet quo velit, eligendi consequatur sequi inventore aperiam ad quis. Reiciendis in, qui alias quis aliquam pariatur maiores?",
    solution_code: [{ line: 1, code: "public void" }],
  },
  {
    name: "While Loops",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis voluptatum, quisquam, amet quo velit, eligendi consequatur sequi inventore aperiam ad quis. Reiciendis in, qui alias quis aliquam pariatur maiores?",
    solution_code: [{ line: 1, code: "{" }],
  },
  {
    name: "Do-While's Loops",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis voluptatum, quisquam, amet quo velit, eligendi consequatur sequi inventore aperiam ad quis. Reiciendis in, qui alias quis aliquam pariatur maiores?",
    solution_code: [{ line: 1, code: "public void" }],
  },
];

const ChapterChallengesList = () => {
  // Accessing the id parameter from the URL
  const { id } = useParams();
  return (
    <div className="chapter-challanges-list-container">
      <h2>{`Chapter ${id}`}</h2>
      {challanges.map((item) => (
        <button>{item.name}</button>
      ))}
    </div>
  );
};

export default ChapterChallengesList;
