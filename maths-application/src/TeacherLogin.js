import react, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function TeacherLogin () {
    const navigate = useNavigate();

    const [teacherID, setTeacherID] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigate('/teacherhome');
    }

    return (
        <div>
            <div className='center-container'></div>
            <div className='flex-container'>
                Teacher ID:
                <textarea></textarea>
            </div>
            <br></br>

            <div className='flex-container'>
                Password:
                <textarea></textarea>
            </div>
            <br></br>

            <div className='flex-container'>
                <button onClick={handleLogin}> Login </button>
            </div>
            <br></br>

            <div className='flex-container'>
                <button onClick={() => {navigate('/teacherregister')}}>Register as a Teacher</button>
            </div>
            <br></br><br></br><br></br>

            <div className='flex-container'>
                <button onClick={() => {navigate('/')}}>Student Account?</button>
            </div>
        </div>
    )
};

export default TeacherLogin;