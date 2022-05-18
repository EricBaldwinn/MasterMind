export const displayHints = (results, guesses, answers) => {
  const lastResult = results[results.length - 1];
  const lastGuess = guesses[guesses.length - 1];
  if (lastResult[0] === 'correct') {
    for (let i = 0; i < lastGuess.length; i++) {
      const guess = lastGuess[i];
      if (answers[i] === guess) {
        return guess + ' is correct';
      }
    }
  }
  if (lastResult[0] === 'half') {
    console.log('hitting half')
    for (let i = 0; i < lastGuess.length; i++) {
      const guess = lastGuess[i];
      if (answers.includes(guess)) {
        return guess + ' is half right';
      }
    }
  }
  if (lastResult[0] === 'wrong') {
    return answers[0] + ' is a correct number';
  }
}




