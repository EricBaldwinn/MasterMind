const axios = require('axios');
const models = require('../models/models.js');

module.exports = {
  getPlayerInfo: (req, res) => {
    if (req.query.playerName !== undefined) {
      models.getPlayerInfo(req.query.playerName)
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        res.status(400).send(err)
      })
    }
  },
  addNewPlayer: (req,res) => {
    console.log(req.body)
    if (req.body.playerName !== undefined) {
      models.addNewPlayer(req.body.playerName)
    }
  }
}