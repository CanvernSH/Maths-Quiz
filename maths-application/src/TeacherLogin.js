import react, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function TeacherLogin () {
    const navigate = useNavigate();

    const [teacherID, setTeacherID] = useState('');
    const [password, setPassword] = useState('');

    const [accessDetails, setAccessDetails] = useState(true);

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

            <br></br> <br></br> <br></br><br></br>
            <div style={{textAlign: 'center'}}>
                <button style={{backgroundColor: 'grey'}} onClick={() => {setAccessDetails(!accessDetails)}}>Show access details</button>
                {accessDetails && <p style={{display:'flex', margin: '15px auto', width: 'fit-content', border: '1px solid black'}}>
                    Access for Teacher account:
                    <br></br>
                    Teacher ID: 20 | Password: teacher123
                </p>}
            </div>

        </div>
    )
};

export default TeacherLogin;