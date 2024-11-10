import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";

function App() {
  return (
    <Router basename="/movie-service">
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
