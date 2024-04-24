import React, { useState, useEffect } from "react";
import girl from "./../../assets/girl.jpeg";
import boy from "./../../assets/character.png";
import { useDispatch } from "react-redux";
import { submitSubmission } from "../../actions/submissionActions";
import check from "./../../assets/check.png";
import { useNavigate } from "react-router-dom";

const DragAndDropChallenge = ({ question }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [codeLines, setCodeLines] = useState(
    Array(question.solution_code_lines.length).fill(null)
  );
  const [previewContent, setPreviewContent] = useState([]);
  const [shuffledSnippets, setShuffledSnippets] = useState([]);
  const [usedSnippets, setUsedSnippets] = useState([]);
  const [incorrectLines, setIncorrectLines] = useState([]);
  const [solved, setSolved] = useState(false); // State to track if the code is solved
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [studentIdError, setStudentIdError] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    const allCodeLines = [
      ...question.solution_code_lines,
      ...question.distraction_code_lines,
    ];
    const shuffled = shuffleArray(allCodeLines);
    setShuffledSnippets(shuffled);
  }, [question]);

  useEffect(() => {
    const currentPreviewContent = formatCodeWithIndentation(
      codeLines,
      shuffledSnippets
    );
    setPreviewContent(currentPreviewContent);

    const resetIncorrectLines = Array(codeLines.length).fill(false);
    setIncorrectLines(resetIncorrectLines);
    setSolved(false);
  }, [codeLines, shuffledSnippets]);

  const formatCodeWithIndentation = (codeLines, snippets) => {
    const formattedContent = [];
    let indentationLevel = 0;

    codeLines.forEach((lineId) => {
      const snippet = snippets.find((s) => s._id === lineId);
      if (snippet) {
        const { line_code } = snippet;
        if (line_code.includes("}") && indentationLevel > 0) {
          indentationLevel--;
        }
        formattedContent.push("  ".repeat(indentationLevel) + line_code);
        if (line_code.includes("{")) {
          indentationLevel++;
        }
      }
    });

    return formattedContent;
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id.toString());
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    const droppedSnippetId = e.dataTransfer.getData("text/plain");

    const updatedCodeLines = [...codeLines];
    const draggedSnippetIndex = updatedCodeLines.findIndex(
      (lineId) => lineId === droppedSnippetId
    );

    if (draggedSnippetIndex !== -1) {
      // Existing snippet is dragged within codeLines area
      // Swap the positions of draggedSnippet and replacedSnippet within codeLines
      const draggedSnippet = updatedCodeLines[draggedSnippetIndex];
      updatedCodeLines[draggedSnippetIndex] = updatedCodeLines[newIndex];
      updatedCodeLines[newIndex] = draggedSnippet;

      setCodeLines(updatedCodeLines);
    } else {
      // Snippet is dragged from available snippets to codeLines area
      const replacedSnippet = updatedCodeLines[newIndex];

      // Check if replacedSnippet is a valid snippet (not null)
      if (replacedSnippet !== null) {
        // Add replacedSnippet back to available snippets if it was used
        setUsedSnippets((prevUsed) =>
          prevUsed.filter((snippetId) => snippetId !== replacedSnippet)
        );
      }

      // Place the dropped snippet at the new index in codeLines
      updatedCodeLines[newIndex] = droppedSnippetId;

      // Mark snippet as used
      setUsedSnippets((prevUsed) => [...prevUsed, droppedSnippetId]);

      setCodeLines(updatedCodeLines);
    }
  };

  const handleSnippetReturn = (id) => {
    const updatedCodeLines = codeLines.map((lineId) =>
      lineId === id ? null : lineId
    );
    setCodeLines(updatedCodeLines);

    // Remove snippet from usedSnippets
    setUsedSnippets((prevUsed) =>
      prevUsed.filter((snippetId) => snippetId !== id)
    );
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const testCode = () => {
    const correctLines = question.solution_code_lines;
    const userLines = codeLines.map((lineId) => {
      const snippet = shuffledSnippets.find(
        (snippet) => snippet._id === lineId
      );
      return snippet ? snippet : { _id: null, line_code: null }; // Return a placeholder if lineId is null
    });

    const incorrectLineIndices = userLines.reduce(
      (incorrectIndices, userLine, index) => {
        const correctLine = correctLines[index];

        if (userLine.line_code === null || correctLine.line_code === null) {
          // If either line has a null line_code, match based on _id
          if (userLine._id !== correctLine._id) {
            incorrectIndices.push(index + 1); // 1-based line number
          }
        } else {
          // Both lines have non-null line_code, match based on line_code
          if (userLine.line_code !== correctLine.line_code) {
            incorrectIndices.push(index + 1); // 1-based line number
          }
        }

        return incorrectIndices;
      },
      []
    );

    setIncorrectLines(incorrectLineIndices);

    // Check if code is solved (no incorrect lines)
    if (incorrectLineIndices.length === 0) {
      setSolved(true);
    }
  };

  const handleSubmit = async () => {
    if (!userName.trim()) {
      setUserNameError("Username is required");
      return;
    }
    if (!studentId.trim()) {
      setStudentIdError("Student ID is required");
      return;
    }

    try {
      await dispatch(submitSubmission(userName, studentId, question._id));
      setShowSaveModal(false);
      setSubmissionSuccess(true);
      setUserName("");
      setStudentId("");
      console.log("success");
    } catch (error) {
      console.error("Error submitting submission:", error);
      // Handle error if submission fails
    }
  };

  const handleCancel = () => {
    setSolved(true); // Mark the challenge as solved
    setShowSaveModal(false); // Hide the save confirmation modal
  };

  const navigateToAllChallanges = () => {
    navigate("/");
  };

  // Filter out used snippets from shuffledSnippets
  const availableSnippets = shuffledSnippets.filter(
    (snippet) => !usedSnippets.includes(snippet._id)
  );

  return (
    <div>
      <div className="drag-and-drop-container">
        <div className="code-snippets">
          {availableSnippets.map((snippet) => (
            <div
              key={snippet._id}
              className="code-snippet"
              draggable
              onDragStart={(e) => handleDragStart(e, snippet._id)}
            >
              {snippet.line_code}
            </div>
          ))}
        </div>
        <div className="code-lines">
          {codeLines.map((lineId, index) => (
            <div
              key={index}
              className="code-line"
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
            >
              {lineId !== null && (
                <div key={lineId} className="dropped-snippet">
                  <div>
                    {
                      shuffledSnippets.find((snippet) => snippet._id === lineId)
                        ?.line_code
                    }
                  </div>
                </div>
              )}
              <div className="delete-error-container">
                {/* Display incorrect lines next to this snippet */}
                {lineId !== null && incorrectLines.includes(index + 1) && (
                  <div className="incorrect-lines">Incorrect</div>
                )}
                {lineId !== null && (
                  <button
                    className="delete-button"
                    onClick={() => handleSnippetReturn(lineId)}
                  >
                    x
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div>
        <h6>Code Preview</h6>
        <div className="code-preview">
          {previewContent.map((formattedLine, index) => (
            <pre key={index}>{formattedLine}</pre>
          ))}
        </div>
      </div>
      <br />
      <div>
        <button className="start-button" onClick={testCode}>
          Test Your Code
        </button>
        {/* Display confirmation modal when code is solved */}
        {solved && (
          <div className="modal">
            <div className="modal-content">
              <p>Congratulations! You solved the challenge successfully.</p>
              <div className="modal-img-container">
                <img src={girl} alt="" />
                <img src={boy} alt="" />
              </div>
              <div>
                <button
                  className="back-button"
                  onClick={() => setSolved(false)}
                >
                  Close
                </button>
                <button
                  className="start-button"
                  onClick={() => setShowSaveModal(true)}
                >
                  Submit Confirmation
                </button>
              </div>
            </div>
          </div>
        )}

        {showSaveModal && (
          <div className="modal">
            <div className="modal-content">
              <div className="">
                <h4>Submit Confirmation</h4>
                <h6>
                  The completion confirmation will be unique, allowing Dr.
                  Redfield to view each student's confirmation upon completion.
                </h6>
                <div className="input-field">
                  Enter your full name: <br />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {userNameError && (
                    <div className="error-modal">{userNameError}</div>
                  )}
                </div>
                <div className="input-field">
                  Enter your StudentId: <br />
                  <input
                    type="text"
                    placeholder="Enter your student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                  />
                  {studentIdError && (
                    <div className="error-modal">{studentIdError}</div>
                  )}
                </div>
              </div>
              <div className="modal-button-container">
                <button className="back-button" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="start-button" onClick={handleSubmit}>
                  Submit Confirmation
                </button>
              </div>
            </div>
          </div>
        )}

        {submissionSuccess && (
          <div className="modal">
            <div className="modal-content height">
              <div>
                <h4>Your submission was successful!</h4>
              </div>
              <img
                style={{ margin: "0 auto" }}
                width="150px"
                src={check}
                alt=""
              />
              <div className="modal-button-container">
                <button
                  className="start-button"
                  onClick={navigateToAllChallanges}
                >
                  Go back to all challenges
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragAndDropChallenge;
