import react, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './Leaderboard.css';
import profileImg from './img/profileImg2.png';

function Leaderboard() {
  const navigate = useNavigate();

    const leaderboardData = [
        { firstname: 'Loading', score: 0}
    ];

    const [sortedData, setSortedData] = useState(leaderboardData);
    

    const [user, setUser] = useState(0)

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
                setUser(1);
            } else {
                const result2 = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pro2`, {
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({ temp: 'temp' })
            });
            if (result2.ok) {
              setUser(2);
            } else {
              navigate('/portal')
            }
            }
        };

        loggedInCheck();

    }, []);

    useEffect(() => {
      const collectScores = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/collectscores`, {
          method: 'POST',
          credentials: 'include',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({})
        });
        const result = await response.json();
        console.log(result);
        const sortedData1 = [...result].sort((a,b) => b.score - a.score);
        console.log("test")
        setSortedData(sortedData1)
      }
        collectScores();

    }, []);

    const handleExit = async () => {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
          method: 'POST',
          credentials: 'include',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({})
      });
      if (user===1) {
        navigate('/portal');
      } else {
        navigate('/teacherportal')
      }
  }
  



    const handleQuizButton = () => {
        navigate('/quiz');
    }

    return (
    <div>
      {user===1 ? <div>
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
                <li><a href="" onClick={() => {navigate('/home')}}>Home</a></li>
                <li><a href="" onClick={handleQuizButton}>Quiz</a></li>
                <li><a href="">Leaderboard</a></li>
                <li><a href="" onClick={handleExit}>Log Out</a></li>
            </ul>
            </nav>
            </div>
            <div>
                <img src={profileImg} style={{width: '30px', height: 'auto', cursor: 'pointer'}}></img>
            </div>
        </header>
        </div> : <div>

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
                    <li><a href="" onClick={() => {navigate('/teacherhome')}}>Home</a></li>
                    <li><a href="" onClick={() => {navigate('/createquiz')}}>Create Quiz</a></li>
                    <li><a href="" onClick={() => {navigate('/selectoramendquiz')}}>Amend Quiz</a></li>
                    <li><a href="" onClick={handleExit}>Log Out</a></li>
                </ul>
                </nav>
                </div>
                <div>
                    <img src={profileImg} style={{width: '30px', height: 'auto', cursor: 'pointer'}}></img>
                </div>
            </header>
        </div>}






        <div className="leaderboard-container">





      <h2>Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.firstname}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    );
}

export default Leaderboard;