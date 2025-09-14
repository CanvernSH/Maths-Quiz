import react, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function TeacherLogin () {
    const navigate = useNavigate()
    const [showTeacherLogin, setShowTeacherLogin] = useState(true);

    // Teacher Login
    const [teacherID, setTeacherID] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [accessDetails, setAccessDetails] = useState(true);

    const handleLogin = async () => {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/teacherlogin`, {
            method: 'POST',
            credentials: 'include',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({teacherID, password})
        });
        navigate('/teacherhome');
    }

    // Teacher Register
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [registerPassword, setRegisterPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerCode, setRegisterCode] = useState('');

    const handleRegister = async () => {
        if (registerPassword == confirmPassword) {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/teacherregister`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({firstName, surname, registerPassword, registerCode})
            });
            alert("41")
        };
    };





    return (
        <div>

            {/* Teacher Login */}
            {showTeacherLogin ? <div>
            
            <div style={{marginTop: '34vh', textAlign: 'center'}}>
                MathAbility
            </div>
            <div style={{marginTop: '6vh'}}></div>

            
            <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                Teacher ID
                <br></br>
                <input onChange={(e) => {setTeacherID(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
                <br></br><br></br>
                Password
                <br></br>
                <div style={{display: 'flex'}}>
                    <input type={showPassword ? '' : 'password'} onChange={(e) => {setPassword(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginRight: '5px'}}></input>
                    <input type='checkbox' onClick={() => {setShowPassword(!showPassword)}}></input>
                </div>
            </div>
            </div>
            <br></br>

            <div className='flex-container'>
            </div>
            <br></br>

            <div className='flex-container'>
                <button onClick={handleLogin} style={{borderRadius: '5px', width: '100px', backgroundColor: 'red', color: 'white'}}> <b>Login</b> </button>
            </div>
            <br></br><br></br>

            </div> : 
            
            // Teacher Registration
            <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25vh'}}></div>
            <h2 style={{textAlign: 'center'}}>Register Teacher Account</h2>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5vh'}}></div>

            <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <b>Teacher ID:</b>
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

            <div style={{display: 'flex', marginLeft: '35px'}}>
                <div>
                    Teacher Registration Code
                    <br></br>
                    <input onChange={(e) => {setRegisterCode(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
                </div>
                <div style={{marginTop: '3vh'}}>
                    <Tooltip title="This code is only known to teachers" arrow><InfoOutlinedIcon style={{fontSize: '16px', marginLeft: '1vh', color: '#555', cursor: 'pointer'}}></InfoOutlinedIcon></Tooltip>
                </div>
            </div>
            </div>

            <br></br>

            <div className='flex-container'>
                <button onClick={handleRegister} style={{borderRadius: '5px', width: '100px', backgroundColor: 'red', color: 'white'}}> <b>Register</b></button>
            </div>
            <br></br><br></br><br></br>


        </div>
            }




            <div className='flex-container'>
                <a href="" onClick={(e) => {e.preventDefault(); setShowTeacherLogin(!showTeacherLogin); setShowPassword(false); setAccessDetails(false)}} style={{marginLeft: '20px', marginRight: '20px'}}>{showTeacherLogin ? 'Register' : 'Login'} as a Teacher</a>
                <a href="" onClick={() => {navigate('/portal')}} style={{marginLeft: '20px', marginRight: '20px'}}>Student Account?</a>
            </div>
            <br></br><br></br><br></br>



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