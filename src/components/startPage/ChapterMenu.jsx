import React from "react";
import ChapterButton from "./ChapterButton";

const chapters = [
  { label: "", number: 1, text: "Main and Print" },
  { label: "", number: 2, text: " Variables & Expressions" },
  { label: "", number: 3, text: "Scanning" },
  { label: "", number: 4, text: "If-else & Switch" },
  { label: "", number: 5, text: "Functions" },
  { label: "", number: 6, text: "While loops" },
  { label: "", number: 7, text: "For Loops" },
  { label: "", number: 8, text: "Arrays" },
  { label: "", number: 9, text: "Pointers" },
  { label: "", number: 10, text: " Enumerate" },
  { label: "", number: 11, text: " Strings" },
  { label: "", number: 12, text: " Structures" },
  { label: "", number: 13, text: " File I/O " },
  { label: "", number: 14, text: " Sample Programs" },
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
