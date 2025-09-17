import react, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import profileImg from './img/profileImg2.png';
import './Home.css'

function User () {
    const navigate = useNavigate();

    const [id, setId] = useState('Loading...')
    const [isStudent, setIsStudent] = useState();
    const [userDetails, setUserDetails] = useState('Loading');
    const [result, setResult] = useState({id: 'Loading', firstname: 'loading', surname: 'loading', dob: 'loading', classid: 'loading'});

    useEffect(() => {
        const loggedInCheck = async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pro3`, {
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({})
            })
            if (response.ok === true) {
                const result1 = await response.json();
                setResult(result1);

                if (result1.classid) {
                    setIsStudent(true);
                } else {
                    setIsStudent(false);
                }
            } else {
                navigate('/portal');
            }
        };

        loggedInCheck();

    }, []);
    
    const handleExit = async () => {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
          method: 'POST',
          credentials: 'include',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({})
      });
      if (isStudent===true) {
        navigate('/portal');
      } else {
        navigate('/teacherportal')
      }
  }
  



    const handleQuizButton = () => {
        navigate('/quiz');
    }

    return (
        <div>
      {isStudent===true ? <div>
        <header style={{
            backgroundColor: 'white',
            padding: '10px 20px',
            color: 'black',
            fontWeight: '600',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
        }}>
            <div style={{width: 'fit-content'}}>🧠 MathAbility</div>
            <div style={{marginLeft: '5vw', marginRight: '10vw'}}>
            <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '3rem', padding: '0'}}>
                <li><a href="" onClick={() => {navigate('/home')}}>Home</a></li>
                <li><a href="" onClick={handleQuizButton}>Quiz</a></li>
                <li><a href="" onClick={() => {navigate('/leaderboard')}}>Leaderboard</a></li>
                <li><a href="" onClick={handleExit}>Log Out</a></li>
            </ul>
            </nav>
            </div>
            <div>
                <img src={profileImg} style={{width: '30px', height: 'auto', cursor: 'pointer'}}></img>
            </div>
        </header>
        </div> : <div>

            <header style={{
                backgroundColor: 'white',
                padding: '10px 20px',
                color: 'black',
                fontWeight: '600',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '30px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}>
                <div style={{width: 'fit-content'}}>🧠 MathAbility</div>
                <div style={{marginLeft: '5vw', marginRight: '10vw'}}>
                <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '3rem', padding: '0'}}>
                    <li><a href="" onClick={() => {navigate('/teacherhome')}}>Home</a></li>
                    <li><a href="" onClick={() => {navigate('/createquiz')}}>Create Quiz</a></li>
                    <li><a href="" onClick={() => {navigate('/selectoramendquiz')}}>Amend Quiz</a></li>
                    <li><a href="" onClick={handleExit}>Log Out</a></li>
                </ul>
                </nav>
                </div>
                <div>
                    <img src={profileImg} style={{width: '30px', height: 'auto', cursor: 'pointer'}}></img>
                </div>
            </header>
        </div>}


        
        <div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '16vh'}}></div>
            <h2 style={{textAlign: 'center'}}>{isStudent ? 'Student' : 'Teacher'} Account</h2>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5vh'}}></div>

            <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <b>{isStudent ? 'Student ID' : 'Teacher ID'}: {result.id}</b>
            </div>
            <br></br>

            <div>
                First Name
                <br></br>
                <input value={result.firstname.trim()} readOnly style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>    
            </div>


            <div>
                Surname
                <br></br>
                <input value={result.surname.trim()} readOnly style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
            </div>

            {isStudent && <div> 
            <div>
                Date of Birth:
                <br></br>
                <input value={result.dob.slice(0,10)} readOnly style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
            </div>

            <div>
                Class ID:
                <br></br>
                <input value={result.classid} readOnly style={{borderRadius: '10px', resize: 'none', height: '30px'}}></input>
            </div>
            </div> }

            <br></br><br></br><br></br><br></br>

            <button className="btn exit" onClick={handleExit}>Log out</button>
        </div>
        </div>









        </div>
    )
}

export default User;