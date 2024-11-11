<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
>>>>>>> feature/home

function App() {
  return (
    <Router basename="/movie-service">
<<<<<<< HEAD
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
=======
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Home/>} />
      </Routes>
>>>>>>> feature/home
    </Router>
  );
}

export default App;
