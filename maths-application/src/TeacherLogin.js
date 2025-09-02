import react, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function TeacherLogin () {
    const navigate = useNavigate();

    const [teacherID, setTeacherID] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/teacherlogin`, {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({teacherID, password})
        });
        navigate('/teacherhome');
    }

    return (
        <div>
            <div className='center-container'></div>
            <div className='flex-container'>
                Teacher ID:
                <textarea onChange={(e) => {setTeacherID(e.target.value)}}></textarea>
            </div>
            <br></br>

            <div className='flex-container'>
                Password:
                <textarea onChange={(e) => {setPassword(e.target.value)}}></textarea>
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