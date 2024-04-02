import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./screens/StartPage";
import NotFoundPage from "./screens/NotFoundPage";
import Home from "./screens/Home";
import ChapterChallengesList from "./screens/ChapterChallengesList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Chapter/:id" element={<ChapterChallengesList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<StartPage />} />
        <Route path="" element={<StartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
