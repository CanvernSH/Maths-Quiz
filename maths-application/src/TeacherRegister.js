import react, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function TeacherRegister () {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerCode, setRegisterCode] = useState('');

    const handleRegister = async () => {
        if (password == confirmPassword) {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/teacherregister`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({firstName, surname, password, registerCode})
            });
            alert("41")
        };
    };

    return (
        <div>
            <div className='center-container'></div>

            <div className='flex-container'>
                Teacher ID:
                <textarea></textarea>
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
                Password:
                <textarea onChange={(e) => {setPassword(e.target.value)}}></textarea>
            </div>

            <div className='flex-container'>
                Confirm Password:
                <textarea onChange={(e) => {setConfirmPassword(e.target.value)}}></textarea>
            </div>
            <br></br>

            <div className='flex-container'>
                Teacher Registration Code:
                <textarea onChange={(e) => {setRegisterCode(e.target.value)}}></textarea>
            </div>
            <br></br>

            <div className='flex-container'>
                <button onClick={handleRegister}>Register</button>
            </div>
            <br></br><br></br><br></br>

            <div className='flex-container'>
                <button onClick={() => {navigate('/teacherlogin')}}>Exit</button>
            </div>

        </div>
    )
};

export default TeacherRegister;