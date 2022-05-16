import React from 'react';


export const displayHints = (results, guesses, answers) => {
  const lastResult = results[results.length - 1];
  const lastGuess = guesses[guesses.length - 1];
  console.log(results)
  console.log(lastResult)
  if (lastResult[0] === 'correct') {
    for (let i = 0; i < lastGuess.length; i++) {
      const guess = lastGuess[i];
      if (answers[i] === guess) {
        return <p>{guess} is correct</p>
      }
    }
  }
  if (lastResult[0] === 'half') {
    console.log('hitting half')
    for (let i = 0; i < lastGuess.length; i++) {
      const guess = lastGuess[i];
      if (answers.includes(guess)) {
        return <p>{guess} is half right</p>
      }
    }
  }
  if (lastResult[0] === 'wrong') {
    return <p>{answers[0]} is a correct number</p>
  }
}