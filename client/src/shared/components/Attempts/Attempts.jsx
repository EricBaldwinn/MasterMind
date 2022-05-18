import React from 'react';
import { OuterAttempt, InnerAttempt, RowDiv, IconContainer } from './attempts.styling';
import { Dots } from '../Dots/Dots.jsx';

export const Attempts = ({ results, guesses, showHints }) => {

  return (
    <div>
      <IconContainer>
      <img src="https://img.icons8.com/emoji/50/000000/question-mark-emoji.png" onClick={showHints}/>
      <p>Click for a hint</p>
      </IconContainer>
      <h1>Total Attempts: {guesses.length}</h1>
      <OuterAttempt>
        {guesses.map((guess, index) => {
          return (
            <InnerAttempt key={index}>
              {guess}
              {results[index].map((result, idx) => (
                  <RowDiv key={idx}>
                  <Dots result={result}/>
                  </RowDiv>
              ))}
            </InnerAttempt>
          );
        })}
      </OuterAttempt>
    </div>
  )
}