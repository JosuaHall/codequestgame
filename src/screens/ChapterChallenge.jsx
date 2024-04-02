import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/common/BackButton";

const ChapterChallenge = () => {
  const { challengeId } = useParams();
  return (
    <div>
      <h2>{`Chapter Challenge ${challengeId}`}</h2>
      <BackButton />
    </div>
  );
};

export default ChapterChallenge;
