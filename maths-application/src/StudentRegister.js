import react, {useState} from 'react';

function StudentRegister() {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setdob] = useState('');
    const [classID, setClassID] = useState();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (password == confirmPassword) {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({firstName, surname, dob, classID, password}),
            });
            alert('33')
        } else {
            alert('Passwords must match')
        }
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
                <textarea onChange={(e) => {setSurname(e.target.value)}}></textarea>
            </div>
            <div className='flex-container'>
                Date of Birth:
                <textarea onChange={(e) => {setdob(e.target.value)}}></textarea>
            </div>
            <div className='flex-container'>
                Class ID:
                <textarea onChange={(e) => {setClassID(e.target.value)}}></textarea>
            </div>
            <div className='flex-container'>
                Password:
                <textarea onChange={(e) => {setPassword(e.target.value)}}></textarea>
            </div>
            <div className='flex-container'>
                Confirm Password:
                <textarea onChange={(e) => {setConfirmPassword(e.target.value)}}></textarea>
            </div>
            <br></br>
            <div className='flex-container'>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}

export default StudentRegister;