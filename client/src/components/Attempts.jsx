import React, {useState} from 'react';
import { AttemptDiv } from '../../dist/styling/attempts.styling';

export const Attempts = ( {results, guesses} ) => {


  return (
    <AttemptDiv>
      {guesses.map((guess, index) => {
        return (
          <div>
            {guess.map((eachGuess, sIndex) => {
              return <div>
                {eachGuess}
                </div>
            })}
          </div>
        );
      })}
    </AttemptDiv>
  )
}