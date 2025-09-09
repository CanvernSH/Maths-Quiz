import react, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

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
                navigate('/teacherlogin');
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
        navigate('/teacherlogin');
    }

    return (
        <div>
            <div className='center-container'>This is the Teacher Home page</div>
            <br></br>

            <div className='flex-container'>
                <button onClick={() => {navigate('/createquiz')}}>Create New Quiz</button>
                <button onClick={() => {navigate('/selectoramendquiz')}}>Select or Amend Quiz</button>
                <button>Amend Student Details</button>
            </div>
            <br></br>

            <div className='flex-container'>
                <button>View Class Results</button>
                <button>View Specific Student Results</button>
                <button>Leaderboard</button>
            </div>
            <br></br>

            <div className='flex-container'>
                <button onClick={handleExit}>Log out</button>
            </div>
            
        </div>
    )
}

export default TeacherHome;