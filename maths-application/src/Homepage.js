import React, {useState, useEffect} from 'react';
import './homepage.css';
import mathsImage from './img/maths-image.png'
import {useNavigate} from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();
    const [showHome, setShowHome] = useState(true);

    const [displayText, setDisplayText] = useState(showHome ? "✏️ Test Your Math Skills!" : "🧠 MathAbility");
    const [displayText2, setDisplayText2] = useState(showHome ? "Ready to challenge your brain with fun and fast paced math quizzes? Track your progress, compete with friends, and become a math master." : "MathAbility is software tool designed to sharpen your mathematics. Ready to try it out? Sign up Today.");
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setDisplayText(showHome ? "✏️ Test Your Math Skills!" : "🧠 MathAbility");
        setDisplayText2(showHome ? "Ready to challenge your brain with fun and fast paced math quizzes? Track your progress, compete with friends, and become a math master." : "MathAbility is software tool designed to sharpen your mathematics. Ready to try it out? Sign up Today.");
        setVisible(true);
      }, 300);
      return () => clearTimeout(timeout);
    }, [showHome])




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
            <li><a href="" onClick={(e) => {e.preventDefault(); setShowHome(true)}}>Home</a></li>
            <li><a href="https://github.com/canvernsh/maths-quiz">Code</a></li>
            <li><a href="" onClick={(e) => {e.preventDefault(); setShowHome(false)}}>About</a></li>
            <li><a href="https://github.com/canvernsh">Creator</a></li>
          </ul>
        </nav>
        </div>
      </header>

      <div className="homepage-container">
          <div className="homepage-content">
          
            <div className="text-section">
            <h1 className={`title ${visible ? "fade-in" : "fade-out"}`}>{displayText}</h1>
            <p className={`subtitle ${visible ? "fade-in" : "fade-out"}`}>{displayText2}</p>
            <button className={`signup-button ${visible ? "fade-in" : "fade-out"}`} style={{transition: 'opacity 0.3s ease'}} onClick={() => {navigate('/portal')}}>Sign Up Today</button>
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