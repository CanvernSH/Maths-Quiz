/*import mathsboard from './img/maths-board.jpg'
import './homepage.css';
import react, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function MathsQuiz () {
    const navigate = useNavigate();

    const loadServer = async () => {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/loadserver`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({})
        })
        console.log("Server Loaded")
    };
    loadServer();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);


    return(
        <div>
            <header>
                MathsAbility
            </header>
            <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
                <h1 style={{textAlign: 'center', marginTop: '10vh'}}>
                    Develop your Maths knowledge
                </h1>
                <p style={{textAlign: 'center'}}>
                    With 100+ Quizzes to build foundational problem solving skills
                </p>

                <img src={mathsboard} style={{display: 'flex', margin: '0 auto'}}></img>
            </div>

            <div style={{display: 'flex', marginTop: '10vh', justifyContent: 'center'}}>
                <div style={{marginLeft: '5vh', marginRight: '5vw'}}>
                    test
                </div>
                <div style={{marginLeft: '5vh', marginRight: '5vw'}}>
                    test
                </div>
                <div style={{marginLeft: '5vh', marginRight: '5vw'}}>
                    test
                </div>
            </div>

            <div style={{marginTop: '10vh', textAlign: 'center'}}>
                <button onClick={() => navigate('/portal')} style={{width: '200px', height: '50px', borderRadius: '35px'}}><h4>Sign up</h4></button>
                <br></br><br></br>
                <a>Login</a>
            </div>
        </div>
    )
}

export default MathsQuiz;


*/


import React from 'react';
import './homepage.css';
import mathsImage from './img/maths-image.png'
import {useNavigate} from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();
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
            <li><a href="#home">Home</a></li>
            <li><a href="#code">Code</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#creator">Creator</a></li>
          </ul>
        </nav>
        </div>
      </header>

      <div className="homepage-container">
        <div className="homepage-content">
          
          <div className="text-section">
            <h1 className="title">✏️ Test Your Math Skills!</h1>
            <p className="subtitle">
              Ready to challenge your brain with fun and fast paced math quizzes?
              Track your progress, compete with friends, and become a math master.
            </p>
            <button className="signup-button" onClick={() => {navigate('/portal')}}>Sign Up Today</button>
          </div>

          <div className="image-section">
            <img src={mathsImage} alt="Math quiz illustration" className="hero-image"></img>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HomePage;