import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./screens/StartPage";
import NotFoundPage from "./screens/NotFoundPage";
import Home from "./screens/Home";
import ChapterChallengesList from "./screens/ChapterChallengesList";
import ChapterChallenge from "./screens/ChapterChallenge";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/chapter/:id/challenge/:challengeId"
          element={<ChapterChallenge />}
        />
        <Route path="/chapter/:id" element={<ChapterChallengesList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<StartPage />} />
        <Route path="" element={<StartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
