import react, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import profileImg from './img/profileImg2.png';
import './Home.css';

function TeacherHome () {
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInCheck = async () => {
            const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pro2`, {
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({ temp: 'temp' })
            })
            if (result.ok === true) {
                console.log("succes");
            } else {
                alert("No success");
                navigate('/teacherportal');
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
        navigate('/teacherportal');
    }

    return (
        <div>
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
                    <li><a href="">Home</a></li>
                    <li><a href="" onClick={() => {navigate('/createquiz')}}>Create Quiz</a></li>
                    <li><a href="" onClick={() => {navigate('/selectoramendquiz')}}>Amend Quiz</a></li>
                    <li><a href="" onClick={handleExit}>Log Out</a></li>
                </ul>
                </nav>
                </div>
                <div>
                    <img src={profileImg} onClick={() => {navigate('/user')}} style={{width: '30px', height: 'auto', cursor: 'pointer'}}></img>
                </div>
            </header>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '93vh', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', color: '#333', textAlign: 'center'}}>
            <h1 style={{fontSize: '3rem', marginBottom: '10px'}}>Teacher Account</h1>
            <p style={{fontSize: '1.2rem', marginBottom: '40px'}}>Create and amend Quizzes as well as view the leaderboard!</p>

            <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                <button className="btn start" onClick={() => {navigate('/createquiz')}}>Create Quiz</button>
                <button className="btn start" style={{color: 'white', backgroundColor: 'blueviolet'}} onClick={() => {navigate('/selectoramendquiz')}}>Select or Amend Quiz</button>
                <button className="btn leaderboard" onClick={() => {navigate('/leaderboard')}}>Leaderboard</button>
            </div>
            <br></br><br></br>

            <button className="btn exit" onClick={handleExit}>Exit</button>
        </div>

        </div>
    )
}

export default TeacherHome;