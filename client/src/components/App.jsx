import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Inputs } from './Inputs.jsx';
import { Attempts } from './Attempts.jsx';
import { AppDiv } from '../../dist/styling/app.styling.js';

const App = () => {
  const [answer, setAnswer] = useState([]);
  const [results, setResults] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [winner, setWinner] = useState(false);


  useEffect(() => {
    axios.get('/setAnswer')
    .then((data) => {
      setAnswer(data.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const checkGuess = (guess) => {
    let winner = true;
    let result = [null, null, null, null];
    let missed = {};
    for (let i = 0; i < guess.length; i++) {
      const currAnswer = answer[i];
      if (currAnswer === guess[i]) {
        result[i] = 'right';
      } else if (missed[currAnswer] === undefined) {
        missed[currAnswer] = 1;
      } else {
        missed[currAnswer]++;
      }
    }

    for (let x = 0; x < result.length; x++) {
      if (result[x] === null) {
        winner = false;
        if (missed[guess[x]] && missed[guess[x]] > 0) {
          result[x] = 'half';
          if (missed[guess[x]] > 1) {
            missed[guess[x]]--;
          }
        } else {
          result[x] = 'wrong';
        }
      }
    }
    setWinner(winner);
    setResults([...results, result.sort()]);
    setGuesses([...guesses, guess]);
  }


  console.log('answer', answer)
  console.log('guesses', guesses)
  return (
    <AppDiv>
      <h1>MasterMind</h1>
      <h2>Total Wins: </h2>
      <Inputs checkGuess={checkGuess} />
      <Attempts results={results} guesses={guesses} />
      {guesses.length === 10 ?  <div>Answer: {answer}</div> : ''}
      {winner ? <div>Congratz ur amazing</div> : ''}
    </AppDiv>
  )
};

export default App;