import {React, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

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

    return (
        <div>
            <h1 style={{textAlign: 'center'}}> Select or Amend Quiz</h1>

            <div style={{textAlign: 'center'}}>
                Search Quiz ID: <textarea onChange={(e) => {setQuizID(e.target.value)}}></textarea> <button onClick={handleSearchQuizID}>Search</button>
            </div>





            <div style={{textAlign: 'center', marginTop:'10vh'}}>
                Q1 <textarea onChange={(e) => {setQ1(e.target.value)}} value={q1}></textarea> A1 <textarea style={{width: '50px'}} onChange={(e) => {setA1(e.target.value)}} value={a1}></textarea>
                <br></br>
                Q2 <textarea onChange={(e) => {setQ2(e.target.value)}} value={q2}></textarea> A2 <textarea style={{width: '50px'}} onChange={(e) => {setA2(e.target.value)}} value={a2}></textarea>
                <br></br>
                Q3 <textarea onChange={(e) => {setQ3(e.target.value)}} value={q3}></textarea> A3 <textarea style={{width: '50px'}} onChange={(e) => {setA3(e.target.value)}} value={a3}></textarea>
                <br></br>
                Q4 <textarea onChange={(e) => {setQ4(e.target.value)}} value={q4}></textarea> A4 <textarea style={{width: '50px'}} onChange={(e) => {setA4(e.target.value)}} value={a4}></textarea>
                <br></br>
                Q5 <textarea onChange={(e) => {setQ5(e.target.value)}} value={q5}></textarea> A5 <textarea style={{width: '50px'}} onChange={(e) => {setA5(e.target.value)}} value={a5}></textarea>
                <br></br>
                Q6 <textarea onChange={(e) => {setQ6(e.target.value)}} value={q6}></textarea> A6 <textarea style={{width: '50px'}} onChange={(e) => {setA6(e.target.value)}} value={a6}></textarea>
                <br></br>
                Q7 <textarea onChange={(e) => {setQ7(e.target.value)}} value={q7}></textarea> A7 <textarea style={{width: '50px'}} onChange={(e) => {setA7(e.target.value)}} value={a7}></textarea>
                <br></br>
                Q8 <textarea onChange={(e) => {setQ8(e.target.value)}} value={q8}></textarea> A8 <textarea style={{width: '50px'}} onChange={(e) => {setA8(e.target.value)}} value={a8}></textarea>
                <br></br>
                Q9 <textarea onChange={(e) => {setQ9(e.target.value)}} value={q9}></textarea> A9 <textarea style={{width: '50px'}} onChange={(e) => {setA9(e.target.value)}} value={a9}></textarea>
                <br></br>
                Q10 <textarea onChange={(e) => {setQ10(e.target.value)}} value={q10}></textarea> A10 <textarea style={{width: '50px'}} onChange={(e) => {setA10(e.target.value)}} value={a10}></textarea>

            </div>

            <br></br><br></br><br></br>
            
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button style={{marginLeft: '20px'}}>Amend Quiz Details</button>
                <button style={{marginLeft: '20px'}} onClick={handleMakeCurrentQuiz}>Make current quiz</button>
            </div>
            




        </div>
    )
}



export default SelectOrAmendQuiz;