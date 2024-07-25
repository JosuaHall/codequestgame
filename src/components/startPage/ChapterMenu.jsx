import React from "react";
import ChapterButton from "./ChapterButton";

const chapters = [
  { label: "Week", number: 1, text: "–> 1 Main and Print" },
  { label: "Week", number: 2, text: "–> 2 Variables & Expressions" },
  { label: "Week", number: 3, text: "–> 3 Scanning" },
  { label: "Week", number: 4, text: "–> 4 If-else & Switch" },
  { label: "Week", number: 5, text: "–> 5 Functions" },
  { label: "Week", number: 6, text: "–> 6 While loops" },
  { label: "Week", number: 7, text: "–> 7 For Loops" },
  { label: "Week", number: 8, text: "–> 8 Arrays" },
  { label: "Week", number: 9, text: "–> 9 Pointers" },
  { label: "Week", number: 10, text: "–> 10 Enumerate" },
  { label: "Week", number: 11, text: "–> 11 Strings" },
  { label: "Week", number: 12, text: "–> 12 Structures" },
  { label: "Week", number: 13, text: "–> 13 File I/O " },
  { label: "Week", number: 14, text: "–> 14 Sample Programs" },
];

const ChapterMenu = () => {
  return (
    <div className="chapter-menu-container">
      {chapters.map((item) => {
        return (
          <div className="button-chapter" key={item.number}>
            <ChapterButton
              key={item.number}
              label={item.label}
              number={item.number}
              text={item.text}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChapterMenu;
