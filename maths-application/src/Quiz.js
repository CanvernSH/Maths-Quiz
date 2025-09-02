import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';


const questionArray = ['test1', 'test2'];
const answerArray = [10, 20];

export function Quiz() {
    const navigate = useNavigate('');


    const [response, setResponse] = useState();
    const [points, setPoints] = useState(0);

    let [questionNumber, setQuestionNumber] = useState(0);
    const [questionText, setQuestionText] = useState(questionArray[questionNumber]);

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
                <p style={{fontSize: '20px'}}>{`Q${questionNumber+1}: ${questionText}`}</p>
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