const db = require('../database/database.js');

module.exports = {
  getPlayerInfo: (playerName) => {
    const sqlString = `SELECT totalWins, totalGames FROM player WHERE name = '${playerName}`;
    return db.query(sqlString);
  },
  addNewPlayer: (playerName) => {
    console.log('in model', playerName)
    const sqlString = `INSERT INTO player (playerName) VALUES ('${playerName}')`;
    db.query(sqlString);
  }
}