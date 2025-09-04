import {React, useState} from "react";
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
        console.log(result.json());
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}> Select or Amend Quiz</h1>

            <div style={{textAlign: 'center'}}>
                Search Quiz ID: <textarea onChange={(e) => {setQuizID(e.target.value)}}></textarea> <button onClick={handleSearchQuizID}>Search</button>
            </div>





            <div style={{textAlign: 'center', marginTop:'10vh'}}>
                Q1 <textarea onChange={(e) => {setQ1(e.target.value)}}></textarea> A1 <textarea style={{width: '50px'}} onChange={(e) => {setA1(e.target.value)}}></textarea>
                <br></br>
                Q2 <textarea onChange={(e) => {setQ2(e.target.value)}}></textarea> A2 <textarea style={{width: '50px'}} onChange={(e) => {setA2(e.target.value)}}></textarea>
                <br></br>
                Q3 <textarea onChange={(e) => {setQ3(e.target.value)}}></textarea> A3 <textarea style={{width: '50px'}} onChange={(e) => {setA3(e.target.value)}}></textarea>
                <br></br>
                Q4 <textarea onChange={(e) => {setQ4(e.target.value)}}></textarea> A4 <textarea style={{width: '50px'}} onChange={(e) => {setA4(e.target.value)}}></textarea>
                <br></br>
                Q5 <textarea onChange={(e) => {setQ5(e.target.value)}}></textarea> A5 <textarea style={{width: '50px'}} onChange={(e) => {setA5(e.target.value)}}></textarea>
                <br></br>
                Q6 <textarea onChange={(e) => {setQ6(e.target.value)}}></textarea> A6 <textarea style={{width: '50px'}} onChange={(e) => {setA6(e.target.value)}}></textarea>
                <br></br>
                Q7 <textarea onChange={(e) => {setQ7(e.target.value)}}></textarea> A7 <textarea style={{width: '50px'}} onChange={(e) => {setA7(e.target.value)}}></textarea>
                <br></br>
                Q8 <textarea onChange={(e) => {setQ8(e.target.value)}}></textarea> A8 <textarea style={{width: '50px'}} onChange={(e) => {setA8(e.target.value)}}></textarea>
                <br></br>
                Q9 <textarea onChange={(e) => {setQ9(e.target.value)}}></textarea> A9 <textarea style={{width: '50px'}} onChange={(e) => {setA9(e.target.value)}}></textarea>
                <br></br>
                Q10 <textarea onChange={(e) => {setQ10(e.target.value)}}></textarea> A10 <textarea style={{width: '50px'}} onChange={(e) => {setA10(e.target.value)}}></textarea>

            </div>






        </div>
    )
}



export default SelectOrAmendQuiz;