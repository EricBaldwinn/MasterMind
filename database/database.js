require('dotenv').config({path:__dirname+'../.env'});
const { Pool } = require('pg')
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'players',
  port: process.env.DB_PORT
})

pool.connect()
.then(() => {
  console.log('Connected to postgres')
})
.catch((err) => {
  console.log(err)
})

module.exports = pool;

