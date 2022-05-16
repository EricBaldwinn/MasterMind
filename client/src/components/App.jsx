import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Inputs } from './Inputs.jsx';
import { Attempts } from './Attempts.jsx';
import { AppDiv, StyledModal, RulesDiv, ModalText, ModalButton, IconContainer } from '../../dist/styling/app.styling.js';
import { ModalProvider } from 'styled-react-modal';
import { displayHints } from './utils.js';


const App = () => {
  const [answer, setAnswer] = useState([]);
  const [results, setResults] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [totalWins, setTotalWins] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [rules, setRules] = useState(false);
  const [hints, setHints] = useState(false);


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
      console.log('missed in half', missed)
      if (result[x] === null) {
        winner = false;
        if (missed[guess[x]] && missed[guess[x]] > 0) {
          result[x] = 'half';
          missed[guess[x]]--;
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

  const showHints = () => {
    if (results.length > 0) {
      setHints(!hints);
    }
  }




  console.log('answer', answer)
  console.log('results', results)
  return (
    <AppDiv>
      <h1>MasterMind</h1>
      <IconContainer>
      <p>Click for rules</p>
      <img src="https://img.icons8.com/ios/50/000000/rules.png" onClick={showRules} />
      </IconContainer>
      {hints ?
        <ModalProvider>
          <StyledModal isOpen={hints} aria-modal={true} role="dialog" onEscapeKeydown={showHints}>
            <RulesDiv>
              <ModalText>
                {displayHints(results, guesses, answer)}
              </ModalText>
              <ModalButton type="button" onClick={showHints}>Click to close</ModalButton>
            </RulesDiv>
          </StyledModal>
        </ModalProvider> : ''}
      {rules ?
        <ModalProvider>
          <StyledModal isOpen={rules} aria-modal={true} role="dialog" onEscapeKeydown={showRules}>
            <RulesDiv>
              <ModalText>
                Goal: Guess the correct number combination within 10 attempts
                <br></br>
                (duplicate numbers are possible)
                <br></br>
                Attempt Feedback
                <br></br>
                Green Dot: correct number in right spot
                <br></br>
                Red Dot: correct number in wrong spot
                <br></br>
                Black Dot: wrong number
              </ModalText>
              <ModalButton type="button" onClick={showRules}>Click to close</ModalButton>
            </RulesDiv>
          </StyledModal>
        </ModalProvider> : ''}
      <h2>Wins / Games Played: {totalWins} | {gamesPlayed}</h2>
      <Inputs checkGuess={checkGuess} />
      <Attempts results={results} guesses={guesses} showHints={showHints}/>
      {loser ?
        <ModalProvider>
          <StyledModal isOpen={loser} aria-modal={true} role="dialog" onEscapeKeydown={playAgain}>
            <h1>Try Again!</h1>
            <ModalText>Answer: {answer}</ModalText>
            <ModalButton type="button" onClick={playAgain}>Click me to play again!</ModalButton>
          </StyledModal>
        </ModalProvider> : ''}
      {winner ?
        <ModalProvider>
          <StyledModal isOpen={winner} aria-modal={true} role="dialog" onEscapeKeydown={playAgain}>
            <h1>You're a winner!</h1>
            <ModalButton type="button" onClick={playAgain}>Click me to play again!</ModalButton>
          </StyledModal>
        </ModalProvider> : ''}
    </AppDiv>
  )
};

export default App;