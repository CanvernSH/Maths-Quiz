import react, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function TeacherHome () {
    const navigate = useNavigate();

    return (
        <div>
            <div className='center-container'>This is the Teacher Home page</div>
            <br></br>

            <div className='flex-container'>
                <button onClick={() => {navigate('/createquiz')}}>Create New Quiz</button>
                <button onClick={() => {navigate('/selectoramendquiz')}}>Select or Amend Quiz</button>
                <button>Amend Student Details</button>
            </div>
            <br></br>

            <div className='flex-container'>
                <button>View Class Results</button>
                <button>View Specific Student Results</button>
                <button>Leaderboard</button>
            </div>
            <br></br>

            <div className='flex-container'>
                <button onClick={() => {navigate('/teacherlogin')}}>Log out</button>
            </div>
        </div>
    )
}

export default TeacherHome;