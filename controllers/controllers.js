const axios = require('axios');
const models = require('../models/models.js');

module.exports = {
  getPlayerInfo: (req, res) => {
    if (req.query.playerName !== undefined) {
      models.getPlayerInfo(req.query.playerName)
      .then((response) => {
        res.status(202).send(response.rows)
      })
      .catch((err) => {
        res.status(400).send(err)
      })
    }
  },
  addNewPlayer: (req,res) => {
    let playerName = req.body.playerName;
    if (playerName !== undefined) {
      models.addNewPlayer(playerName)
      .then(() => {
        console.log('user added')
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  addPlayerGames: (req, res) => {
    if (req.body.playerName !== undefined) {
      models.addPlayerGames(req.body.playerName, req.body.totalWins, req.body.totalGames)
      .then(() => {
        console.log('user games updated')
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}