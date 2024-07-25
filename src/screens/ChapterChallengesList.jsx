import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../actions/questionActions";
import ChallengeButton from "../components/chapterChallanges/ChallengeButton";
import BackButton from "../components/common/BackButton";

const ChapterChallengesList = () => {
  const { id, text } = useParams(); // Accessing the chapter ID parameter from the URL
  const dispatch = useDispatch();
  const { loading, error, questionsByChapter } = useSelector(
    (state) => state.questionsReducer
  );

  useEffect(() => {
    // Fetch questions for the specified chapter when component mounts
    dispatch(fetchQuestions(id));
  }, [dispatch, id]);

  return (
    <div className="chapter-challenges-list-container">
      <h2>{`Chapter ${id} ${text}`}</h2>
      <div className="chapter-challenges-buttons-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : questionsByChapter[id]?.length === 0 ? (
          <p>Currently no challenges listed for this chapter.</p>
        ) : (
          questionsByChapter[id]?.map((question) => (
            <ChallengeButton
              key={question._id}
              label={question.name}
              id={question._id}
            />
          ))
        )}
        <BackButton />
      </div>
    </div>
  );
};

export default ChapterChallengesList;
