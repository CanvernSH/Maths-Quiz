import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

let total = 0;

export function Quiz() {
    const navigate = useNavigate('');

    const [newQuiz, setNewQuiz] = useState(true);
    if (newQuiz == true) {
        total = 0;
        setNewQuiz(false);
    }

    const [response, setResponse] = useState();
    const [points, setPoints] = useState(total);

    const handleSubmit = () => {
        if (response == 56) {
            alert('Correct. You now have one point')
            setPoints(1);
            total = 1;
        } else{
            alert('Incorrect, please try again')
        };
    };

    return (
        <div>
            <div style={{marginTop: '27vh', textAlign: 'center'}}>
                <h2>This is the quiz</h2>
                <br></br>
                <p style={{fontSize: '20px'}}>Q1: What is 7*8?</p>
            </div>
            <div style={{transform: 'translate(60px, 0px)', marginTop: '32px'}} className='flex-container'>
                <textarea onChange={(e) => setResponse(e.target.value)} className='text-area1'></textarea>
                <button style={{marginLeft: '35px', height: '30px', width: '80px', fontSize: 'large'}} onClick={handleSubmit}>Submit</button>
            </div>
            <div style={{marginTop: '20px'}} className='flex-container'>
                <button onClick={() => {navigate('/quizQ2')}} className='question-format2'>Q2</button>
            </div>
            <div style={{transform: 'translate(0px, 40px'}} className='flex-container'>
                <p style={{fontSize: '16px'}}>Points = {points}</p>
            </div>
        </div>
    )
};


export function QuizQ2() {
    const navigate = useNavigate('');

    const [updated, setUpdated] = useState(false);
    const [response, setResponse] = useState();
    const [points, setPoints] = useState(total);

    const handleSubmit = () => {
        if (response == 100) {
            alert('Correct. You have gained a point');
            if (updated == false) {
                setPoints(total+1);
                total = total+1;
                setUpdated(true);
            }
        } else{
            alert('Incorrect, please try again');
        };
    };

    return (
        <div>
            <div className='center-container'>
                Q2: What is 10*10?
            </div>
            <div style={{transform: 'translate(40px, 0px)'}} className='flex-container'>
                <textarea onChange={(e) => setResponse(e.target.value)}></textarea>
                <button style={{marginLeft: '20px'}} onClick={handleSubmit}>Submit</button>
            </div>
            <div className='flex-container'>
                <button onClick={() => navigate('/quizQ3')} className='question-format'>Q3</button>
            </div>
            <div style={{transform: 'translate(0px, 40px'}} className='flex-container'>
                Points = {points}
            </div>
            
        </div>
    )
};


export function QuizQ3() {
    const navigate = useNavigate('');

    const [updated, setUpdated] = useState(false);
    const [response, setResponse] = useState();
    const [points, setPoints] = useState(total);


    const handleSubmit = () => {
        if (response == 8) {
            alert('Correct. You have gained a point');
            if (updated == false) {
                setPoints(total+1);
                total = total+1;
                setUpdated(true);
            }
        } else{
            alert('Incorrect, please try again');
        };
    };

    
    
    return (
        <div>
            <div className='center-container'>
                Q3: What is 72/9?
            </div>
            <div style={{transform: 'translate(40px, 0px)'}} className='flex-container'>
                <textarea onChange={(e) => {setResponse(e.target.value)}}></textarea>
                <button style={{marginLeft: '20px'}} onClick={handleSubmit}>Submit</button>
            </div>
            <div className='flex-container'>
                <button onClick={() => navigate('/home')} className='question-format'>Finish quiz</button>
            </div>
            <div style={{transform: 'translate(0px, 40px'}} className='flex-container'>
                Points = {points}
            </div>
        </div>
    )
}




