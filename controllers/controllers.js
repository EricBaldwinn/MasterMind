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
    if (req.body.playerName !== undefined) {
      models.addNewPlayer(req.body.playerName)
    }
  },
  addPlayerGames: (req, res) => {
    if (req.body.playerName !== undefined) {
      models.addPlayerGames(req.body.playerName, req.body.totalWins, req.body.totalGames)
    }
  }
}