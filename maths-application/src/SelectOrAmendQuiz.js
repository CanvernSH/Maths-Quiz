import {React, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import profileImg from './img/profileImg2.png'

function SelectOrAmendQuiz () {
    const navigate = useNavigate('');

    const [quizID, setQuizID] = useState();

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


    const handleSearchQuizID = async () => {
        const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/searchquizid`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({quizID})
        });

        const resultloaded = await result.json();

        let quizArray = resultloaded.split(',');
        quizArray[0] = quizArray[0].substring(1);
        quizArray[19] = quizArray[19].slice(0, -1);
        
        function func1 (letter) {
            return ((letter.substring(1)).slice(0, -1)).trim();
        }

        const qarr = quizArray.map(func1);

        setQ1(qarr[0]);
        setQ2(qarr[1]);
        setQ3(qarr[2]);
        setQ4(qarr[3]);
        setQ5(qarr[4]);
        setQ6(qarr[5]);
        setQ7(qarr[6]);
        setQ8(qarr[7]);
        setQ9(qarr[8]);
        setQ10(qarr[9]);

        setA1(qarr[10]);
        setA2(qarr[11]);
        setA3(qarr[12]);
        setA4(qarr[13]);
        setA5(qarr[14]);
        setA6(qarr[15]);
        setA7(qarr[16]);
        setA8(qarr[17]);
        setA9(qarr[18]);
        setA10(qarr[19]);
    }

    const handleMakeCurrentQuiz = async () => {
        if (quizID.trim() != '') {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/makecurrentquiz`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({quizID})
            })
            alert(`Current Quiz updated to quiz id: ${quizID}`)
        } else {
            alert("Search for valid a quiz ID")
        }
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


            <h1 style={{textAlign: 'center', marginTop: '6vh'}}> Select or Amend Quiz</h1>

            <div style={{textAlign: 'center', marginLeft: '3vw', marginTop: '5vh'}}>
                Search Quiz ID: <input onChange={(e) => {setQuizID(e.target.value)}} style={{borderRadius: '1px', resize: 'none', height: '30px', width: '50px', marginLeft: '1vw', marginBottom: '1vh'}}></input> 
                <button onClick={handleSearchQuizID} className="btn" style={{width: '70px', padding: '3px 3px', marginLeft: '3vw', color: 'white', backgroundColor: 'blue'}}>Search</button>
            </div>





            <div style={{textAlign: 'center', marginTop:'3vh'}}>
                Q1 <input onChange={(e) => {setQ1(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}} value={q1}></input> A1 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA1(e.target.value)}} value={a1}></input>
                <br></br>
                Q2 <input onChange={(e) => {setQ2(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}} value={q2}></input> A2 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA2(e.target.value)}} value={a2}></input>
                <br></br>
                Q3 <input onChange={(e) => {setQ3(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}} value={q3}></input> A3 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA3(e.target.value)}} value={a3}></input>
                <br></br>
                Q4 <input onChange={(e) => {setQ4(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}} value={q4}></input> A4 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA4(e.target.value)}} value={a4}></input>
                <br></br>
                Q5 <input onChange={(e) => {setQ5(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}} value={q5}></input> A5 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA5(e.target.value)}} value={a5}></input>
                <br></br>
                Q6 <input onChange={(e) => {setQ6(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}} value={q6}></input> A6 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA6(e.target.value)}} value={a6}></input>
                <br></br>
                Q7 <input onChange={(e) => {setQ7(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}} value={q7}></input> A7 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA7(e.target.value)}} value={a7}></input>
                <br></br>
                Q8 <input onChange={(e) => {setQ8(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}} value={q8}></input> A8 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA8(e.target.value)}} value={a8}></input>
                <br></br>
                Q9 <input onChange={(e) => {setQ9(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}} value={q9}></input> A9 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh'}} onChange={(e) => {setA9(e.target.value)}} value={a9}></input>
                <br></br>
                Q10 <input onChange={(e) => {setQ10(e.target.value)}} style={{borderRadius: '10px', resize: 'none', height: '30px', marginBottom: '1vh', marginRight: '3vh'}} value={q10}></input> A10 <input style={{borderRadius: '10px', resize: 'none', height: '30px', width: '50px', marginBottom: '1vh', transform: 'translate(-4px,0px'}} onChange={(e) => {setA10(e.target.value)}} value={a10}></input>

            </div>

            <br></br><br></br>
            
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className="btn start" style={{marginLeft: '20px'}}>Amend Quiz Details</button>
                <button className="btn" style={{marginLeft: '20px', color: 'white', backgroundColor: 'blueviolet'}} onClick={handleMakeCurrentQuiz}>Make current quiz</button>
            </div>

            <br></br><br></br><br></br>
            <button className="btn exit" style={{display: 'flex', margin: '0 auto'}} onClick={() => {navigate('/teacherhome')}}>Exit</button>

            




        </div>
    )
}



export default SelectOrAmendQuiz;