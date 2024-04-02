import React from "react";
import ChapterButton from "./ChapterButton";

const chapters = [
  { label: "Chapter", number: 1 },
  { label: "Chapter", number: 2 },
  { label: "Chapter", number: 3 },
  { label: "Chapter", number: 4 },
  { label: "Chapter", number: 5 },
  { label: "Chapter", number: 6 },
  { label: "Chapter", number: 7 },
  { label: "Chapter", number: 8 },
  { label: "Chapter", number: 9 },
  { label: "Chapter", number: 10 },
  { label: "Chapter", number: 11 },
  { label: "Chapter", number: 12 },
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
