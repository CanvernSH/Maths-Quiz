require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
});

app.post('/api/users', async (req, res) => {
    const {firstName} = req.body;
    try{
        await pool.query('INSERT INTO users (FirstName) VALUES ($1)', [firstName]);
        res.send('User added');
    } catch (err) {
        console.error(err);
        res.send('database error');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});