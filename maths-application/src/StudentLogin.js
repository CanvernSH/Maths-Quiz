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
                Student ID:
                <textarea></textarea>
            </div>
            <br></br>
            <div className='flex-container'>
                Password:
                <textarea></textarea>
            </div>
            <br></br>
            <div className='flex-container'>
                <button onClick={handleLogin}>Login</button>
            </div>
            <br></br>
            <div style={{textAlign: 'center'}}> 
                <button style={{backgroundColor: 'orange', color: 'blue'}} onClick={() => {navigate('/register')}}> Register a new student </button>
            </div>
            <br></br> <br></br> <br></br>
            <div style={{textAlign: 'center'}}>
                <button style={{backgroundColor: 'lightgreen'}}>Teacher account?</button>
            </div>
        </div>
    );
}

export default StudentLogin;