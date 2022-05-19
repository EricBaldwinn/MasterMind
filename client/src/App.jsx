import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Inputs } from '../src/shared/components/Inputs/Inputs.jsx';
import { Attempts } from '../src/shared/components/Attempts/Attempts.jsx';
import { Timer } from '../src/shared/components/Timer/Timer.jsx';
import { InputPlayer } from '../src/shared/components/InputPlayer/InputPlayer.jsx';
import { AppDiv, StyledModal, RulesDiv, ModalText, ModalButton, Wins, TitleContainer, Title } from './app.styling.js';
import { ModalProvider } from 'styled-react-modal';
import { displayHints } from './app.utils';


export const App = () => {
  const [answer, setAnswer] = useState([]);
  const [results, setResults] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [totalWins, setTotalWins] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [rules, setRules] = useState(false);
  const [hints, setHints] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [findPlayerGames, setFindPlayerGames] = useState('');



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
    let playerWinner = true;
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
        playerWinner = false;
        if (missed[guess[x]] && missed[guess[x]] > 0) {
          result[x] = 'half';
          missed[guess[x]]--;
        } else {
          result[x] = 'wrong';
        }
      }
    }
    if (guesses.length === 9 && playerWinner === false) {
      setLoser(true);
      setGamesPlayed(gamesPlayed + 1);
    } else if (playerWinner === true) {
      setWinner(playerWinner);
      setTotalWins(totalWins + 1);
      setGamesPlayed(gamesPlayed + 1);
    }
    setResults([...results, result.sort()]);
    setGuesses([...guesses, guess]);
  }


  const playAgain = () => {
    setResetTimer(true);
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
      axios.patch('/playerInfo', { playerName: findPlayerGames, totalWins: totalWins, totalGames: gamesPlayed })
      .then((data) => {
        console.log('players stats were updated')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const toggleRules = () => {
    setRules(!rules);
  }

  const showHints = () => {
    if (results.length > 0) {
      setHints(!hints);
    }
  }

  const showPlayerStats = () => {
    axios.get('/playerInfo', {
      params: {
        playerName: playerName
      }
    })
      .then((response) => {
        setTotalWins(response.data[0].totalwins)
        setGamesPlayed(response.data[0].totalgames)
      })
      .catch((err) => {
        console.log('this is the error', err)
      })
    setFindPlayerGames(playerName);
    setPlayerName('');
  }

  const addNewPlayer = () => {
    axios.post('/playerInfo', { playerName: playerName })
      .then(() => {
       console.log('user added')
      })
      .catch((err) => {
        console.log(err)
      })
    setFindPlayerGames(playerName);
    setPlayerName('');
  }

  const setPlayer = (event) => {
    setPlayerName(event.target.value);
  }


  return (
    <AppDiv>
      <InputPlayer toggleRules={toggleRules} setPlayer={setPlayer} showPlayerStats={showPlayerStats} addNewPlayer={addNewPlayer} playerName={playerName} findPlayerGames={findPlayerGames}/>
      <TitleContainer>
      <Timer resetTimer={resetTimer} setResetTimer={setResetTimer} />
        <Title>MasterMind</Title>
        <Wins>Wins / Games Played: {totalWins} | {gamesPlayed}</Wins>
      </TitleContainer>
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
          <StyledModal isOpen={rules} aria-modal={true} role="dialog" onEscapeKeydown={toggleRules}>
            <RulesDiv>
              <ModalText>
                Goal: Guess the correct numbers in the correct sequence within 10 attempts and 3 minutes
                <br></br>
                (duplicate numbers are possible)
                <br></br>
                You recieve feedback for each attempt
                <br></br>
                Green Dot: correct number in right spot
                <br></br>
                Red Dot: correct number in wrong spot
                <br></br>
                Black Dot: wrong number
              </ModalText>
              <ModalButton type="button" onClick={toggleRules}>Click to close</ModalButton>
            </RulesDiv>
          </StyledModal>
        </ModalProvider> : ''}
      <Inputs checkGuess={checkGuess} />
      <Attempts results={results} guesses={guesses} showHints={showHints} />
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
