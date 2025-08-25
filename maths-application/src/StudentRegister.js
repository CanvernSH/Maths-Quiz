import react, {useState} from 'react';

function StudentRegister() {
    const [firstName, setFirstName] = useState('');

    const handleRegister = async () => {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({firstName}),
        });
        alert('33')
    };


    return(
        <div>
            <div className='center-container'>

            </div>
            <div className='flex-container'>
                Student ID:
                <textarea></textarea>
            </div>
            <div className='flex-container'>
                First Name:
                <textarea onChange={(e) => {setFirstName(e.target.value)}}></textarea>
            </div>
            <div className='flex-container'>
                Surname:
                <textarea></textarea>
            </div>
            <div className='flex-container'>
                Date of Birth:
                <textarea></textarea>
            </div>
            <div className='flex-container'>
                Class ID:
                <textarea></textarea>
            </div>
            <div className='flex-container'>
                Password:
                <textarea></textarea>
            </div>
            <div className='flex-container'>
                Confirm Password:
                <textarea></textarea>
            </div>
            <br></br>
            <div className='flex-container'>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}

export default StudentRegister;