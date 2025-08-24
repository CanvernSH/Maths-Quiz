require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'studentdetails',
    password: process.env.password,
    port: 5432,
});

app.post('/api/users', async (req, res) => {
    const {firstName} = req.body;
    await pool.query('INSERT INTO users (name) VALUES ($1)', [firstName]);
    res.send('User added');
    console.log("good");
});

app.listen(5000, () => console.log('Server running on port 5000'));