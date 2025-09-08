import {useNavigate} from 'react-router-dom';
import react, {useState} from 'react';

function StudentLogin() {
    const navigate = useNavigate();

    const [studentID, setStudentID] = useState('');
    const [password, setPassword] = useState('');

    const [accessDetails, setAccessDetails] = useState(true);

    const handleLogin = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({studentID, password}),
        });
        if (response.ok) {
            navigate('/home');
        } else {
            const response1 = await response.json()
            console.log(response1);
            alert(response1.error);
            
        }
    };

    return (
        <div>
            <div className='center-container'></div>
            <div className='flex-container'>
                Student ID:
                <textarea onChange={(e) => {setStudentID(e.target.value)}}></textarea>
            </div>
            <br></br>
            <div className='flex-container'>
                Password:
                <textarea onChange={(e) => {setPassword(e.target.value)}}></textarea>
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
                <button style={{backgroundColor: 'lightgreen'}} onClick={() => {navigate('/teacherlogin')}}>Teacher account?</button>
            </div>

            <br></br> <br></br> <br></br><br></br>
            <div style={{textAlign: 'center'}}>
                <button style={{backgroundColor: 'grey'}} onClick={() => {setAccessDetails(!accessDetails)}}>Show access details</button>
                {accessDetails && <p style={{display:'flex', margin: '15px auto', width: 'fit-content', border: '1px solid black'}}>
                    Access for Student account:
                    <br></br>
                    Student ID: 10 | Password: student123
                </p>}
            </div>
        </div>
    );
}

export default StudentLogin;