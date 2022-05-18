import React, {useState, useEffect} from 'react';
import {InputDiv, NumpadDiv, OuterDiv, Numbers, ButtonDiv, ButtonStyle, GuessInput, GuessOuter, GuessInner} from './inputs.styling';

export const Inputs = ({checkGuess}) => {
  const [numbers, setNumbers] = useState('');
  const numpad = [0, 1, 2, 3, 4, 5, 6, 7];


  const inputChange = (event) => {
    const re = /^[0-7\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setNumbers(event.target.value)
    }
  }

  const submitGuess = (event) => {
    event.preventDefault();
    setNumbers('');
    if (numbers.length === 4) {
      checkGuess(numbers.split(''));
    }
  }

  const addNum = (num) => {
    if (numbers.length < 4) {
      setNumbers(numbers + num)
    }
  }

  const deleteNum = () => {
    if (numbers.length >= 1) {
      let numCopy = numbers.substring(0, numbers.length - 1);
      setNumbers(numCopy);
    }
  }

  const clearNums = () => {
    if (numbers.length >= 1) {
      setNumbers('');
    }
  }


  return (
    <OuterDiv>
    <InputDiv>
      {numpad.map((num, index) => (
        <NumpadDiv key={index}>
          <Numbers onClick={() => addNum(num)}>{num}</Numbers>
          </NumpadDiv>
      ))}
      </InputDiv>
      <ButtonDiv>
      <ButtonStyle type="button" onClick={deleteNum}>Delete</ButtonStyle>
      <ButtonStyle type="button" onClick={clearNums}>Clear</ButtonStyle>
      <ButtonStyle type="button" onClick={submitGuess}>Submit</ButtonStyle>
      </ButtonDiv>
      <GuessOuter>
        <GuessInner>
      <form role="submitGuess" onSubmit={submitGuess}>
      <GuessInput type='text' value={numbers} minLength='0' maxLength='4' onChange={inputChange}></GuessInput>
      </form>
        </GuessInner>
      </GuessOuter>
    </OuterDiv>
  )
}