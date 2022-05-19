const db = require('../database/database.js');
const axios = 'axios';
module.exports = {
  getPlayerInfo: (playerName) => {
    const sqlString = `SELECT * FROM player WHERE playerName = '${playerName}'`;
    return db.query(sqlString)
  },
  addNewPlayer: (playerName) => {
    const sqlString = `INSERT INTO player (playerName) VALUES ('${playerName}') ON CONFLICT DO NOTHING`;
    return db.query(sqlString);
  },
  addPlayerGames: (playerName, totalWins, totalGames) => {
    const sqlString = `UPDATE player SET totalWins = ${totalWins}, totalGames = ${totalGames} WHERE playerName = '${playerName}'`;
     return db.query(sqlString);
  }
}