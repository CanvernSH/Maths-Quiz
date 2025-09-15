import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import profileImg from './img/profileImg2.png'

function CreateQuiz () {
    const navigate = useNavigate('');

    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');
    const [q6, setQ6] = useState('');
    const [q7, setQ7] = useState('');
    const [q8, setQ8] = useState('');
    const [q9, setQ9] = useState('');
    const [q10, setQ10] = useState('');

    const [a1, setA1] = useState('');
    const [a2, setA2] = useState('');
    const [a3, setA3] = useState('');
    const [a4, setA4] = useState('');
    const [a5, setA5] = useState('');
    const [a6, setA6] = useState('');
    const [a7, setA7] = useState('');
    const [a8, setA8] = useState('');
    const [a9, setA9] = useState('');
    const [a10, setA10] = useState('');

    const handleSubmit = async () => {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/createquiz`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10})
        })
        alert('New quiz has been created')
        
    };

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


            <h1 style={{textAlign: 'center', marginTop: '10vh'}}>Create New Quiz</h1>

            <div style={{textAlign: 'center', marginTop:'3vh'}}>
                Q1 <input onChange={(e) => {setQ1(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}}></input> A1 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA1(e.target.value)}}></input>
                <br></br>
                Q2 <input onChange={(e) => {setQ2(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}}></input> A2 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA2(e.target.value)}}></input>
                <br></br>
                Q3 <input onChange={(e) => {setQ3(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}}></input> A3 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA3(e.target.value)}}></input>
                <br></br>
                Q4 <input onChange={(e) => {setQ4(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}}></input> A4 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA4(e.target.value)}}></input>
                <br></br>
                Q5 <input onChange={(e) => {setQ5(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}}></input> A5 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA5(e.target.value)}}></input>
                <br></br>
                Q6 <input onChange={(e) => {setQ6(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}}></input> A6 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA6(e.target.value)}}></input>
                <br></br>
                Q7 <input onChange={(e) => {setQ7(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}}></input> A7 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA7(e.target.value)}}></input>
                <br></br>
                Q8 <input onChange={(e) => {setQ8(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}}></input> A8 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA8(e.target.value)}}></input>
                <br></br>
                Q9 <input onChange={(e) => {setQ9(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}}></input> A9 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA9(e.target.value)}}></input>
                <br></br>
                Q10 <input onChange={(e) => {setQ10(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}}></input> A10 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh', transform: 'translate(-4px,0px'}} onChange={(e) => {setA10(e.target.value)}}></input>

            </div>

            <br></br><br></br><br></br>
            <button className="btn start" style={{display: 'flex', margin: '0 auto'}} onClick={handleSubmit}>Submit</button>

            <br></br><br></br><br></br>
            <button className="btn exit" style={{display: 'flex', margin: '0 auto'}} onClick={() => {navigate('/teacherhome')}}>Exit</button>

        </div>
    )
}

export default CreateQuiz;