DROP DATABASE IF EXISTS players;

CREATE DATABASE players;

\c players;

CREATE TABLE player (
  id SERIAL PRIMARY KEY NOT NULL UNIQUE,
  playerName TEXT NOT NULL UNIQUE,
  totalWins INTEGER DEFAULT 0 NOT NULL,
  totalGames INTEGER DEFAULT 0 NOT NULL
);