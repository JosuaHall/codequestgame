import React from "react";
import { useParams } from "react-router-dom";
import ChallengeButton from "../components/chapterChallanges/ChallengeButton";
import BackButton from "./../components/common/BackButton";

const challanges = [
  {
    _id: "asdasdasd",
    name: "For Loops",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis voluptatum, quisquam, amet quo velit, eligendi consequatur sequi inventore aperiam ad quis. Reiciendis in, qui alias quis aliquam pariatur maiores?",
    solution_code: [{ line: 1, code: "public void" }],
  },
  {
    _id: "asdasdasdsad",
    name: "While Loops",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis voluptatum, quisquam, amet quo velit, eligendi consequatur sequi inventore aperiam ad quis. Reiciendis in, qui alias quis aliquam pariatur maiores?",
    solution_code: [{ line: 1, code: "{" }],
  },
  {
    _id: "asdasdasdasfagag",
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
      {challanges.map((item, index) => (
        <ChallengeButton key={item._id} label={item.name} id={index + 1} />
      ))}
      <BackButton />
    </div>
  );
};

export default ChapterChallengesList;
