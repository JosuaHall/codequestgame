import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BackButton from "../components/common/BackButton";
import DragAndDropChallenge from "../components/chapterChallanges/DragAndDropChallenge";

const ChapterChallenge = () => {
  const { id, challengeId, challengeName } = useParams();

  // Retrieve challenge details from Redux store based on challengeId
  const { loading, error, question } = useSelector((state) => {
    const questionsByChapter = state.questionsReducer.questionsByChapter[id];
    const question = questionsByChapter.find((q) => q._id === challengeId);
    return {
      loading: state.questionsReducer.loading,
      error: state.questionsReducer.error,
      question,
    };
  });

  useEffect(() => {
    // Fetch specific challenge data if not available in Redux store
    // You can dispatch an action here to fetch the challenge by challengeId
    // Example: dispatch(fetchSpecificChallenge(challengeId));
  }, [challengeId]); // Trigger fetch when challengeId changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!question) {
    return <p>Challenge not found</p>;
  }

  return (
    <div className="challenge-container">
      <h2>{`Chapter ${id} - ${challengeName}`}</h2>
      <h5>Problem:</h5>
      <p>{question.description}</p>
      <br />
      <h6>Drag and drop the code snippets in the right order</h6>
      {/* Render the challenge component (e.g., DragAndDropChallenge) here */}
      <DragAndDropChallenge question={question} />
      <br />
      <BackButton />
    </div>
  );
};

export default ChapterChallenge;
