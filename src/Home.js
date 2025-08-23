import {useNavigate} from 'react-router-dom';

function Home () {

    const navigate = useNavigate();

    const handleQuizButton = () => {
        navigate('/quiz');
    }

    return (
        <div>
            <div className='center-container'>
                This is the Student home page
            </div>
            
            <div className='flex-container'>
                <div>
                    <button onClick={handleQuizButton} className='question-format'>Start quiz</button>
                </div>
                <div>
                    <button className='question-format'> Leaderboard </button>
                </div>
                <div>
                    <button className='question-format' onClick={() => {navigate('/')}}> Exit </button>
                </div>
            </div>
        </div>
    )
}

export default Home;