import React, { useState } from 'react';
import { OuterAttempt, InnerAttempt, ColDiv, RowDiv } from '../../dist/styling/attempts.styling';

export const Attempts = ({ results, guesses }) => {

  const correctDot = <img src="https://img.icons8.com/emoji/48/000000/green-circle-emoji.png" />;
  const halfDot = <img src="https://img.icons8.com/emoji/48/000000/red-circle-emoji.png" />;
  const wrongDot = <img src="https://img.icons8.com/emoji/48/000000/black-circle-emoji.png" />;

  const dots = (result) => {
      if (result === 'right') {
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
      <h1>Previous Attempts: {guesses.length}</h1>
      <OuterAttempt>
        {guesses.map((guess, index) => {
          return (
            <InnerAttempt>
              {guess}
              {results[index].map((result, idx) => (
                  <RowDiv>
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