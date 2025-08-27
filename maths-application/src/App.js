import React from "react";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import {Quiz, QuizQ2, QuizQ3} from './Quiz.js';
import StudentLogin from './StudentLogin.js';
import StudentRegister from './StudentRegister.js';
import TeacherLogin from './TeacherLogin.js';
import TeacherRegister from './TeacherRegister.js';
import TeacherHome from './TeacherHome.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentLogin></StudentLogin>} />
        <Route path='/register' element={<StudentRegister></StudentRegister>} />
        <Route path='/teacherlogin' element={<TeacherLogin></TeacherLogin>} />
        <Route path='/teacherregister' element={<TeacherRegister></TeacherRegister>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='teacherhome' element={<TeacherHome></TeacherHome>} />
        <Route path='/quiz' element={<Quiz></Quiz>} />
        <Route path='/quizQ2' element={<QuizQ2></QuizQ2>} />
        <Route path='/quizQ3' element={<QuizQ3></QuizQ3>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
