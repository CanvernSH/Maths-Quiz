import react, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const moment = require('moment');

function StudentRegister() {
    const navigate = useNavigate()

    const [idLoaded, setIdLoaded] = useState(false)
    const [studentID, setStudentID] = useState('(Loading...)')
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setdob] = useState('');
    const [classID, setClassID] = useState();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const loadStudentID = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/loadstudentid`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({})
        });
        const response1 = await response.json();
        setStudentID(parseInt(response1.message, 10)+1);
    };

    if (idLoaded === false) {
        loadStudentID();
        setIdLoaded(true);
    }

    const handleRegister = async () => {
        if (password == confirmPassword && isNaN(parseInt(classID, 10)) === false && moment(dob, 'YYYY-MM-DD', true).isValid()) {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({firstName, surname, dob, classID, password}),
            });
            alert('New Student Added');
            navigate('/');
        } else if (!moment(dob, 'YYYY-MM-DD', true).isValid()) {
            alert('Date of Birth must be in the format: YYYY-MM-DD');
        } else if (isNaN(parseInt(classID, 10)) === true) {
            alert('Class ID must be an integer');
        } else {
            alert('Passwords must match');
        }
    };


    return(
        <div>
            <div className='center-container'>

            </div>
            <div className='flex-container'>
                Student ID:
                <textarea disabled value={studentID}></textarea>
            </div>
            <div className='flex-container'>
                First Name:
                <textarea onChange={(e) => {setFirstName(e.target.value)}}></textarea>
            </div>
            <div className='flex-container'>
                Surname:
                <textarea onChange={(e) => {setSurname(e.target.value)}}></textarea>
            </div>
            <div className='flex-container'>
                Date of Birth:
                <textarea onChange={(e) => {setdob(e.target.value)}} placeholder='yyyy-mm-dd'></textarea>
            </div>
            <div className='flex-container'>
                Class ID:
                <textarea onChange={(e) => {setClassID(e.target.value)}}></textarea>
            </div>
            <div className='flex-container'>
                Password:
                <textarea onChange={(e) => {setPassword(e.target.value)}}></textarea>
            </div>
            <div className='flex-container'>
                Confirm Password:
                <textarea onChange={(e) => {setConfirmPassword(e.target.value)}}></textarea>
            </div>
            <br></br>
            <div className='flex-container'>
                <button onClick={handleRegister}>Register</button>
            </div>
            <br></br><br></br><br></br>

            <div className='flex-container'>
                <button onClick={() => {navigate('/')}}>Exit</button>
            </div>

        </div>
    );
}

export default StudentRegister;