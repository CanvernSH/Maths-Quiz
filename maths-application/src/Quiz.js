import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';



export function Quiz() {
    const navigate = useNavigate('');

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

    const [quizLoaded, setQuizLoaded] = useState(false);

    const [questionArray, setQuestionArray] = useState([0]);
    const [answerArray, setAnswerArray] = useState([0]);

    const handleLoadQuiz = async () => {
        const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/quizload`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({})
        });
        const response = await result.json();
        const json = response.rows[0];

        setQuestionArray([json.q1.trim(), json.q2.trim(), json.q3.trim(), json.q4.trim(), json.q5.trim(), json.q6.trim(), json.q7.trim(),json.q8.trim() ,json.q9.trim() ,json.q10.trim()]);
        setAnswerArray([json.a1.trim(), json.a2.trim(), json.a3.trim(), json.a4.trim(), json.a5.trim(), json.a6.trim(), json.a7.trim(),json.a8.trim() ,json.a9.trim() ,json.a10.trim()]);
        setQuestionText(json.q1.trim());    
    };


    if (quizLoaded === false) {
        handleLoadQuiz();
        setQuizLoaded(true);
    };



    const [response, setResponse] = useState();
    const [points, setPoints] = useState(0);

    let [questionNumber, setQuestionNumber] = useState(0);
    const [questionText, setQuestionText] = useState('(Loading...)');

    const [correctAlready, setCorrectAlready] = useState(false);

    const handleNextQuestion = () => {
        setQuestionNumber(questionNumber + 1);
        if (questionNumber + 1 < questionArray.length) {
          setQuestionText(questionArray[questionNumber + 1]);
          setCorrectAlready(false);
        } else{
            navigate('/home');
        }
    };

    const handleSubmit = () => {
        if (response == answerArray[questionNumber]) {
            alert('Correct. You now have one point');
            if (correctAlready === false) {
                setPoints(points+1);
                setCorrectAlready(true);
            }
        } else{
            alert('Incorrect, please try again')
        };
    };



    return (
        <div>
            <div style={{marginTop: '27vh', textAlign: 'center'}}>
                <h2>This is the quiz</h2>
                <br></br>
                <p style={{fontSize: '20px'}}>Q{questionNumber+1}: {questionText}</p>
            </div>
            <div style={{transform: 'translate(60px, 0px)', marginTop: '32px'}} className='flex-container'>
                <textarea onChange={(e) => setResponse(e.target.value)} className='text-area1'></textarea>
                <button style={{marginLeft: '35px', height: '30px', width: '80px', fontSize: 'large'}} onClick={handleSubmit}>Submit</button>
            </div>
            <div style={{marginTop: '20px'}} className='flex-container'>
                <button onClick={handleNextQuestion} className='question-format2'>Next Question</button>
            </div>
            <div style={{transform: 'translate(0px, 40px'}} className='flex-container'>
                <p style={{fontSize: '16px'}}>Points = {points}</p>
            </div>
        </div>
    )
};

export default Quiz;