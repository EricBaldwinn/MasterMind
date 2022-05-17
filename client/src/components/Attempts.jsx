import React, { useState } from 'react';
import { OuterAttempt, InnerAttempt, RowDiv, IconContainer } from '../../dist/styling/attempts.styling';

export const Attempts = ({ results, guesses, showHints }) => {

  const correctDot = <img src="https://img.icons8.com/emoji/48/000000/green-circle-emoji.png" />;
  const halfDot = <img src="https://img.icons8.com/emoji/48/000000/red-circle-emoji.png" />;
  const wrongDot = <img src="https://img.icons8.com/emoji/48/000000/black-circle-emoji.png" />;

  const dots = (result) => {
      if (result === 'correct') {
        return correctDot;
      }
      if (result === 'half') {
        return halfDot;
      }
      if (result === 'wrong') {
        return wrongDot;
      }
  }

  return (
    <div>
      <h1>Total Attempts: {guesses.length}</h1>
      <IconContainer>
      <p>Click for a hint</p>
      <img src="https://img.icons8.com/emoji/50/000000/question-mark-emoji.png" onClick={showHints}/>
      </IconContainer>
      <OuterAttempt>
        {guesses.map((guess, index) => {
          return (
            <InnerAttempt key={index}>
              {guess}
              {results[index].map((result, idx) => (
                  <RowDiv key={idx}>
                  {dots(result)}
                  </RowDiv>
              ))}
            </InnerAttempt>
          );
        })}
      </OuterAttempt>
    </div>
  )
}