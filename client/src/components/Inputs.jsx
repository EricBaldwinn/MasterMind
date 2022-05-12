import React, {useState} from 'react';
import {InputDiv, NumpadDiv, OuterDiv, InputNums} from '../../dist/styling/inputs.styling';

export const Inputs = () => {
  const [guess, setGuess] = useState([]);
  const [numbers, setNumbers] = useState('');
  const numpad = [0, 1, 2, 3, 4, 5, 6, 7];

  const inputChange = (event) => {
    setNumbers(event.target.value)
  }

  const submitGuess = () => {
    event.preventDefault();
    setGuess(numbers.split(''));
    setNumbers('');
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
          <p onClick={() => addNum(num)}>{num}</p>
          </NumpadDiv>
      ))}
      </InputDiv>
      <button type="button" onClick={deleteNum}>Delete</button>
      <button type="button" onClick={clearNums}>Clear</button>
      <button>Submit</button>
      <form role="submitGuess" onSubmit={submitGuess}>
      <InputNums type='text' value={numbers} maxLength='4' minLength='0' onChange={inputChange}></InputNums>
      </form>
    </OuterDiv>
  )
}