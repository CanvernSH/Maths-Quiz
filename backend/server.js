require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
});


app.use(cors({ 
    origin: 'http://localhost:3000', 
    credentials: true
}));

app.use(express.json());

app.use(session( {
    secret: 'secret', 
    resave: false, 
    saveUninitialized: false,
}));


app.post('/pro', (req, res) => {
    //req.session.user=true;
    console.log("test");
    if (true===true) res.json({message: 'private'});
    else res.sendStatus(401);
});




app.post('/loadstudentid', async (req, res) => {
    try {
        const result = await pool.query('SELECT id FROM users ORDER BY id DESC LIMIT 1');
        res.json({ message: result.rows[0].id});
        console.log(result.rows)
    } catch (err) {
        console.error(err);
    }
})

app.post('/api/users', async (req, res) => {
    const {firstName, surname, dob, classID, password} = req.body;
    try{
        await pool.query('INSERT INTO users (FirstName, Surname, DOB, ClassID, Password) VALUES ($1, $2, $3, $4, $5)', [firstName, surname, dob, parseInt(classID,10), password]);
        res.send('User added');
    } catch (err) {
        console.error(err);
        res.send('database error');
    }
});

app.post('/api/login', async(req, res) => {
    const {studentID, password} = req.body;
    try{
        const result = await pool.query(`SELECT Password FROM users WHERE id=${studentID}`);
        if (password.trim() == result.rows[0].password.trim()) {
            res.json(true);
        } else {

            res.status(401).json({ error: "Incorrect password" });
        };
    } catch (err) {
        console.error(err);
        res.status(404).json( {error: 'User does not exist'} );
    }
});


app.post('/teacherregister', async (req, res) => {
    const {firstName, surname, password, registerCode} = req.body;
    if (registerCode == process.env.REGISTER_CODE) {
        try {
            await pool.query('INSERT INTO teacherdetails (firstName, surname, password) VALUES ($1, $2, $3)', [firstName, surname, password]);
            res.send('good');

        } catch (err) {
            console.error(err);
        }

    };
});

app.post('/teacherlogin', async (req, res) => {
    const {teacherID, password} = req.body;

    try {
        const result = await pool.query(`SELECT password FROM teacherdetails WHERE id=${teacherID}`);
        if (password.trim() == result.rows[0].password.trim()) {
            res.send('good');
        }
    } catch (err) {
        console.error(err);
    }
});

app.post('/quizload', async (req, res) => {
    try {
      const currentquiz = await pool.query('SELECT quizid FROM currentquiz');
      const currentquizid = currentquiz.rows[0].quizid;
      const result = await pool.query(`SELECT * FROM quizdetails WHERE id=${currentquizid}`);
      res.json(result);
    } catch (err) {
    console.error(err);
    }
})

app.post('/createquiz', async (req, res) => {
    const {q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10} = req.body;
    try {
        await pool.query('INSERT INTO quizdetails (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)', [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10]);
        res.send("good");
    } catch (err) {
        console.error(err);
    }
});


app.post('/searchquizid', async (req, res) => {
    const {quizID} = req.body;
    try {
        const result = await pool.query(`SELECT (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) FROM quizdetails WHERE id=${parseInt(quizID, 10)}`);
        res.json(result.rows[0].row);
    } catch (err) {
    console.error(err);
    }
});

app.post('/makecurrentquiz', async (req, res) => {
    const {quizID} = req.body;
    try {
        await pool.query(`UPDATE currentquiz SET quizid=${quizID} WHERE id=1`);
        res.send("good");
    } catch (err) {
        console.error(err)
    }
})




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
