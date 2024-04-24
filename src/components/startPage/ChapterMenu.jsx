import React from "react";
import ChapterButton from "./ChapterButton";

const chapters = [
  { label: "Week", number: 1 },
  { label: "Week", number: 2 },
  { label: "Week", number: 3 },
  { label: "Week", number: 4 },
  { label: "Week", number: 5 },
  { label: "Week", number: 6 },
  { label: "Week", number: 7 },
  { label: "Week", number: 8 },
  { label: "Week", number: 9 },
  { label: "Week", number: 10 },
  { label: "Week", number: 11 },
  { label: "Week", number: 12 },
  { label: "Week", number: 13 },
  { label: "Week", number: 14 },
];

const ChapterMenu = () => {
  return (
    <div className="chapter-menu-container">
      {chapters.map((item) => {
        return (
          <div>
            <ChapterButton
              key={item.number}
              label={item.label}
              number={item.number}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChapterMenu;
