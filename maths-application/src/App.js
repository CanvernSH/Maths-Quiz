import React from "react";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MathsQuiz from './Homepage.js';
import Home from './Home.js';
import Quiz from './Quiz.js';
import StudentLogin from './StudentLogin.js';
import StudentRegister from './StudentRegister.js';
import TeacherLogin from './TeacherLogin.js';
import TeacherRegister from './TeacherRegister.js';
import TeacherHome from './TeacherHome.js';
import CreateQuiz from './CreateQuiz.js';
import SelectOrAmendQuiz from './SelectOrAmendQuiz.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MathsQuiz></MathsQuiz>} />
        <Route path='/portal' element={<StudentLogin></StudentLogin>} />
        <Route path='/teacherportal' element={<TeacherLogin></TeacherLogin>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/quiz' element={<Quiz></Quiz>} />
        <Route path='/teacherhome' element={<TeacherHome></TeacherHome>} />
        <Route path='/createquiz' element={<CreateQuiz></CreateQuiz>} />
        <Route path='/selectoramendquiz' element={<SelectOrAmendQuiz></SelectOrAmendQuiz>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
