import react, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function TeacherRegister () {
    const navigate = useNavigate()

    return (
        <div>
            <div className='center-container'></div>

            <div className='flex-container'>
                Teacher ID:
                <textarea></textarea>
            </div>

            <div className='flex-container'>
                First Name:
                <textarea></textarea>
            </div>

            <div className='flex-container'>
                Surname:
                <textarea></textarea>
            </div>

            <div className='flex-container'>
                Password:
                <textarea></textarea>
            </div>

            <div className='flex-container'>
                Confirm Password:
                <textarea></textarea>
            </div>
            <br></br>

            <div className='flex-container'>
                Teacher Registration Code:
                <textarea></textarea>
            </div>
            <br></br>

            <div className='flex-container'>
                <button>Register</button>
            </div>
            <br></br><br></br><br></br>

            <div className='flex-container'>
                <button onClick={() => {navigate('/teacherlogin')}}>Exit</button>
            </div>

        </div>
    )
};

export default TeacherRegister;