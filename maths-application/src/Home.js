import {useNavigate} from 'react-router-dom';

function Home () {

    const navigate = useNavigate();

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
                <button className='question-format' onClick={() => {navigate('/')}}> Exit </button>
            </div>
        </div>
    )
}

export default Home;