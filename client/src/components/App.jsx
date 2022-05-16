import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Inputs } from './Inputs.jsx';
import { Attempts } from './Attempts.jsx';
import { AppDiv, StyledModal, RulesDiv } from '../../dist/styling/app.styling.js';
import { ModalProvider } from 'styled-react-modal';


const App = () => {
  const [answer, setAnswer] = useState([]);
  const [results, setResults] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [totalWins, setTotalWins] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [rules, setRules] = useState(false);


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
        result[i] = 'correct';
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
    if (guesses.length === 9 && winner === false) {
      setLoser(true);
    }
    setWinner(winner);
    setResults([...results, result.sort()]);
    setGuesses([...guesses, guess]);
  }

  const playAgain = () => {
    if (winner) {
      setTotalWins(totalWins + 1);
    }
    setGamesPlayed(gamesPlayed + 1);
    setGuesses([]);
    setResults([]);
    setWinner(false);
    setLoser(false);
    axios.get('/setAnswer')
      .then((data) => {
        setAnswer(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const showRules = () => {
    setRules(!rules);
  }


  console.log('answer', answer)
  console.log('guesses', guesses)
  return (
    <AppDiv>
      <h1>MasterMind</h1>
      <p>Click for rules</p>
      <img src="https://img.icons8.com/ios/50/000000/rules.png" onClick={showRules} />
      {rules ?
        <ModalProvider>
          <StyledModal isOpen={rules} aria-modal={true} role="dialog" onEscapeKeydown={showRules}>
            <RulesDiv>
              <p>
                Goal: Guess the correct number combination (duplicate numbers are possible)
                <br></br>
                Guess Feedback
                <br></br>
                Green Dot: correct number in right spot
                <br></br>
                Red Dot: correct number in wrong spot
                <br></br>
                Black Dot: wrong number
              </p>
              <button type="button" onClick={showRules}>Click me to close</button>
            </RulesDiv>
          </StyledModal>
        </ModalProvider> : ''}
      <h2>Wins / Games Played: {totalWins} | {gamesPlayed}</h2>
      <Inputs checkGuess={checkGuess} />
      <Attempts results={results} guesses={guesses} />
      {loser ?
        <ModalProvider>
          <StyledModal isOpen={loser} aria-modal={true} role="dialog" onEscapeKeydown={playAgain}>
            <h1>Try Again!</h1>
            <p>Answer: {answer}</p>
            <button type="button" onClick={playAgain}>Click me to play again!</button>
          </StyledModal>
        </ModalProvider> : ''}
      {winner ?
        <ModalProvider>
          <StyledModal isOpen={winner} aria-modal={true} role="dialog" onEscapeKeydown={playAgain}>
            <h1>You're a winner!</h1>
            <button type="button" onClick={playAgain}>Click me to play again!</button>
          </StyledModal>
        </ModalProvider> : ''}
    </AppDiv>
  )
};

export default App;