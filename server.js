const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const path = require('path');
const controllers = require('./controllers/controllers.js');


// Serving static files
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.json());

// Connecting on the port
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});


const getAnswer = (req, res) => {
  let randomUrl = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new';
  axios.get(randomUrl)
  .then((response) => {
    let answer = response.data;
    answer = response.data.split(/\n/);
    answer.pop();
    res.status(200).send(answer);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
}

app.get('/setAnswer', getAnswer);
app.get('/playerInfo', controllers.getPlayerInfo);
app.post('/playerInfo', controllers.addNewPlayer);
app.patch('/playerInfo', controllers.addPlayerGames);


module.exports = app;
