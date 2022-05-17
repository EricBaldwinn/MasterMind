require('dotenv').config({path:__dirname+'../.env'});
const { Client } = require('pg');
const client = new Client({
  user: process.env.USER,
  database: 'players',
  port: process.env.PORT
})

const db = client.connect();

db
  .then(db => console.log('Connect to Postgres'))
  .catch(err => {
    console.log('There was a problem connecting to Postgres', err);
  });


  module.exports = client;


