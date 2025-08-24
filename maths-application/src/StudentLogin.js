import {useNavigate} from 'react-router-dom';
import react, {useState} from 'react';

function StudentLogin() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    };

    return (
        <div>
            <div className='center-container'></div>
            <div className='flex-container'>
                <text> Student ID: </text>
                <textarea></textarea>
            </div>
            <br></br>
            <div className='flex-container'>
                <text> Password: </text>
                <textarea></textarea>
            </div>
            <br></br>
            <div className='flex-container'>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default StudentLogin;