import React, {useState, useEffect} from 'react';
import { TimerDiv, TimerButton } from '../../dist/styling/timer.styling';

export const Timer = ({ resetTimer, setResetTimer }) => {
const [counter, setCounter] = useState(180);
const [isActive, setIsActive] = useState(false);

const toggle = () => {
  setCounter(180);
  setIsActive(!isActive);
}

useEffect(() => {
  if (resetTimer === true) {
    setIsActive(false);
    setCounter(180);
    setResetTimer(false);
  }
  let interval = null;
  if (isActive && counter > 0) {
    interval = setInterval(() => {
      setCounter(counter => counter - 1);
    }, 1000)
  } else if (isActive && counter === 0) {
    setIsActive(false);
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [isActive, counter]);

  return (
    <TimerDiv>
      {counter === 0 ? <h1>Out of time!</h1> : <h1>Time Remaining: {counter} Seconds</h1>}
      <TimerButton type="button" onClick={toggle}>Start Timer</TimerButton>
    </TimerDiv>
  )
}