const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: process.env.DB_PASS,
    port: 5432
})

pool.connect()
.then(() => console.log("Database connected"))
.catch(() => console.error("Error occured while connecting to database"))

module.exports = pool;  