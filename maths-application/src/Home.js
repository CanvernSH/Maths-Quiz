import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Home () {

    const navigate = useNavigate();

    useEffect(() => {
        const loggedInCheck = async () => {
            const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pro`, {
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({ temp: 'temp' })
            })
            if (result.ok === true) {
                console.log("succes");
            } else {
                alert("No success");
                navigate('/');
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
        navigate('/');
    }



    const handleQuizButton = () => {
        navigate('/quiz');
    }

    return (
        <div>
            <h2 style={{marginTop: '27vh', textAlign: 'center'}}>This is the Student home page</h2>
            
            <div style={{marginTop: '13vh'}} className='flex-container'>
                <div>
                    <button onClick={handleQuizButton} className='question-format'>Start quiz</button>
                </div>
                <div>
                    <button className='question-format'> Leaderboard </button>
                </div>
            </div>

            <div style={{marginTop: '2vh'}} className='flex-container'>
                <button className='question-format' onClick={handleExit}> Exit </button>
            </div>
        </div>
    )
}

export default Home;