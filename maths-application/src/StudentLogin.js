import {useNavigate} from 'react-router-dom';
import react, {useState} from 'react';

const moment = require('moment');

function StudentLogin() {
    const navigate = useNavigate();
    const [showStudentLogin, setShowStudentLogin] = useState(true);

    // Student Login
    const [studentID, setStudentID] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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

    // Student Register
    
    const [idLoaded, setIdLoaded] = useState(false)
    const [registerStudentID, setRegisterStudentID] = useState('(Loading...)')
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setdob] = useState('');
    const [classID, setClassID] = useState();
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const loadStudentID = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/loadstudentid`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({})
        });
        const response1 = await response.json();
        setRegisterStudentID(parseInt(response1.message, 10)+1);
    };

    if (idLoaded === false) {
        loadStudentID();
        setIdLoaded(true);
    }

    const handleRegister = async () => {
        if (registerPassword == confirmPassword && isNaN(parseInt(classID, 10)) === false && moment(dob, 'YYYY-MM-DD', true).isValid()) {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({firstName, surname, dob, classID, registerPassword}),
            });
            alert('New Student Added');
        } else if (!moment(dob, 'YYYY-MM-DD', true).isValid()) {
            alert('Date of Birth must be in the format: YYYY-MM-DD');
        } else if (isNaN(parseInt(classID, 10)) === true) {
            alert('Class ID must be an integer');
        } else {
            alert('Passwords must match');
        }
    };

    return (
        <div>
            {/*<header style={{backgroundColor: '#66a6ff', opacity: '0.5', height: '5vh'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{width: '1000px'}}>
                        Maths Quiz
                    </div>

                    <div style={{direction: 'rtl', width: '1'}}>
                        a
                    </div>
                </div>
            </header>
            */}

            {/* Student Login */}
            {showStudentLogin ? <div>
            <div style={{marginTop: '34vh', textAlign: 'center'}}>
                MathAbility
            </div>
            <div style={{marginTop: '6vh'}}></div>

            
            <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                Student ID:
                <br></br>
                <input onChange={(e) => {setStudentID(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
                <br></br><br></br>
                Password
                <br></br>
                <div style={{display: 'flex'}}>
                    <input type={showPassword ? '' : 'password'} onChange={(e) => {setPassword(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginRight: '5px'}}></input>
                    <input type='checkbox' onClick={() => {setShowPassword(!showPassword)}}></input>
                </div>
            </div>
            <br></br>
            </div>

            <div className='flex-container'>
            </div>
            <br></br>

            <div className='flex-container'>
                <button onClick={handleLogin} style={{borderRadius: '5px', width: '100px', backgroundColor: 'blue', color: 'white'}}> <b>Login</b></button>
            </div>
            <br></br><br></br>

            </div> :
            
            // Student Registration
            <div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '16vh'}}></div>
            <h2 style={{textAlign: 'center'}}>Register Student Account</h2>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5vh'}}></div>

            <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <b>Student ID: {registerStudentID}</b>
            </div>
            <br></br>

            <div>
                First Name
                <br></br>
                <input onChange={(e) => {setFirstName(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>    
            </div>


            <div>
                Surname
                <br></br>
                <input onChange={(e) => {setSurname(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
            </div>

            <div>
                Date of Birth:
                <br></br>
                <input onChange={(e) => {setdob(e.target.value)}} placeholder='yyyy-mm-dd' style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
            </div>

            <div>
                Class ID:
                <br></br>
                <input onChange={(e) => {setClassID(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
            </div>

            <div style={{display: 'flex', marginTop: '1vh'}}>
                <div style={{marginRight: ' 5vh'}}>
                    Password
                    <br></br>
                    <input type={showPassword ? '' : 'password'} onChange={(e) => {setRegisterPassword(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
                </div>
                <div>
                    Confirm Password
                    <br></br>
                    <input type={showPassword ? '' : 'password'} onChange={(e) => {setConfirmPassword(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
                </div>
                <div style={{marginTop: '3vh', marginLeft: '1vh'}}>
                    <input type='checkbox' onClick={() => {setShowPassword(!showPassword)}}></input>
                </div>
            </div>
            <br></br>
            </div>

            <div className='flex-container'>
                <button onClick={handleRegister} style={{borderRadius: '5px', width: '100px', backgroundColor: 'blue', color: 'white'}}> <b>Register</b></button>
            </div>
            <br></br><br></br><br></br>

        </div> }







            <div className='flex-container'> 
                <a href="" onClick={(e) => {e.preventDefault(); setShowStudentLogin(!showStudentLogin); setShowPassword(false); setAccessDetails(false)}} style={{marginLeft: '20px', marginRight: '20px'}}>{showStudentLogin ? 'Register' : 'Login'} as a Student </a>
                <a href="" onClick={() => {navigate('/teacherportal')}} style={{marginLeft: '20px', marginRight: '20px'}}>Teacher account?</a>
            </div>
            <br></br> <br></br> <br></br>



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