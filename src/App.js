import React from "react";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import {Quiz, QuizQ2, QuizQ3} from './Quiz.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/quiz' element={<Quiz></Quiz>} />
        <Route path='/quizQ2' element={<QuizQ2></QuizQ2>} />
        <Route path='/quizQ3' element={<QuizQ3></QuizQ3>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
