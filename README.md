## Game Overview
---
1. This is a MasterMind game which is a strategy game where the player acts as a code breaker, and must guess the correct number sequence within 10 attempts to win the game. In addition, players have the option of increasing difficulty by using the 3 minute timer. Below is an image of the overview of the game.
2. First time players will want to enter their player name in the top right corner and press the new player button.
3. Feedback will be given every attempt and duplicate numbers are possible within the answer/attempts\
4. Click the top left icon for indepth rules/feed back guide

<img width="1435" alt="MasterMindSS" src="https://user-images.githubusercontent.com/81985980/169103113-7f671820-ee7f-418a-a421-77a00f6513fc.png">

## Setup
---
1. Install dependencies: `npm install`
2. Install Postgres: https://www.postgresql.org/download/ (You will need Postgres installed locally to run this game)
3. Run the Node(Express) Server: `npm run start`
4. Run WebPack: `npm run build`
5. Open the MasterMind game at http://localhost:3000

## Keeping Track of Score
---
This MasterMind Game uses a Postgres Database to keep track of local player scores. [^1]
[^1]: Note: You will need Postgres installed on your local machine
### First Time Setup
1. Enter Postgres Shell: `psql postgres`
2. Run the schema file: `\i schema.sql`
- Note: You will need to create a .env file similar to the env.example in the database folder

## Design Process
---
1. I wanted to conceptualize my MasterMind game design, so I started by diagramming a layout on Excalidraw.com and planning out the components I would need and how the UI would look.

2. I then decided on the tech stack which I ended up using React.js and Node.js. After my initial requirements were fullfilled I decided to use Postgres as the database to keep track of scores.

3. I started by cloning a template of an Express server and Webpack setup [^2]. After that I wanted to create my route to Random.org, which I first tested by hitting the API on Postman to visualize the data sent back. I realized I would need to manipulate the data sent back into the format I wanted, which I did inside my Express route to expedite the process of sending correct data to the frontend.

4. I then created a basic App.jsx component to be able to see what I'm rendering on my localhost:3000. I knew I would need to then create my Inputs component because I would need the player's guess to create the game logic, by comparing the player's guess to the correct answer. The Inputs.jsx component handles the player's guesses and allows the user to use number buttons or enter manually into the input field.

5. After creating the Inputs.jsx component I wrote the game logic inside my App.jsx, because I would need to be able to have this logic once I start building my Attempts.jsx component. The feedback would be reliant on the player's guess vs answer. In addition, after writing my game logic I was able to build two modals inside App.jsx to appear when the player won or lost.

6. Once my game logic was working I created my Attempts.jsx component which shows the player's previous attempts and the feedback per attempt using the dots associated with each outcome. I created a child component for Attempts.jsx which is the Dots.jsx component which displays my feedback dots.

## Extra Features
---

1. Hints: I built the hints extension by looking at the first feedback dot, and rendering a different hint for each option (correct, half, wrong) which appears after clicking the question mark icon. I included logic to only allow hints to appear after the player's first attempt.

2. Timer: My timer lives in the Timer.jsx component. I used a setinterval function to count down the time, subtracting 1 every second. This timer is initialized on button click, and will reset on a second click.

3. Score Keeper: My first thought was to build a database to record new player data. Using a database would allow me to save a variety of player data such as average attempts, player with the most wins, and more. Currently I record the players' name, total wins, and total games played. I built the PlayerInputs.jsx component because I need the player to be able to enter their name and on button click decide to record a new entry in my database if they are a new player, or if they are a returning player send back their game history. Everytime a game concludes on the modale button to play again I update the player's total wins and total games based on their playerName. Currently the database is local only, if I had more time I would have liked to deploy the database to an EC2 instance which would be able to record all players' data and I could implement features such as a leaderboard that would be open to all players.

## Tech Stack
---
- React.js
- Node.js (Express.js)
- Postgres
- Styled Components

[^2]: Note: Webpack/Express template taken from here https://github.com/jjhuang417/react-webpack-template (consists of initial Webpack setup and Express Server without routes)
