import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';

var total = 0;

export function Quiz() {
    const navigate = useNavigate('');

    const [response, setResponse] = useState();
    const [points, setPoints] = useState(0);


    const handleSubmit = () => {
        if (response == 56) {
            alert('Correct. You now have one point')
            setPoints(1);
            total = 1;
            console.log(total);
        } else{
            alert('Incorrect, please try again')
        };
    };

    return (
        <div>
            <div className='center-container'>
                This is the quizz
                <br></br><br></br>
                Q1: What is 7*8?
            </div>
            <div style={{transform: 'translate(40px, 0px)'}} className='flex-container'>
                <textarea onChange={(e) => setResponse(e.target.value)}></textarea>
                <button style={{marginLeft: '20px'}} onClick={handleSubmit}>Submit</button>
            </div>
            <div className='flex-container'>
                <button onClick={() => {navigate('/quizQ2')}} className='question-format'>Q2</button>
            </div>
            <div style={{transform: 'translate(0px, 40px'}} className='flex-container'>
                Points = {points}
            </div>
        </div>
    )
};


export function QuizQ2() {
    const navigate = useNavigate('');

    const [response, setResponse] = useState();
    const [points, setPoints] = useState(total);

    var count = 0

    const handleSubmit = () => {
        console.log(total);
        if (response == 100 && count==0) {
            count = -999
            alert('Correct. You have gained a point');
            setPoints(total+1);
            total = total+1;
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
    
    return (
        <div>
            <div className='center-container'>
                Q3: What is 72/9?
            </div>
            <div style={{transform: 'translate(40px, 0px)'}} className='flex-container'>
                <textarea></textarea>
                <button style={{marginLeft: '20px'}}>Submit</button>
            </div>
            <div className='flex-container'>
                <button onClick={() => navigate('/')} className='question-format'>Finish quiz</button>
            </div>
            <div style={{transform: 'translate(0px, 40px'}} className='flex-container'>
                Points = 1
            </div>
        </div>
    )
}






export default Quiz;