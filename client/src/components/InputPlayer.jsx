import React from 'react';
import { ModalButton } from '../../dist/styling/app.styling';
import axios from 'axios';

export const InputPlayer = ({ setPlayer, playerName, showName, addNewPlayer }) => {


  return (
    <div>
      <input type="text" value={playerName} onChange={setPlayer}></input>
      <ModalButton type="button" onClick={showName}>Returning Player</ModalButton>
      <ModalButton type="button" onClick={addNewPlayer}>NewPlayer</ModalButton>
    </div>
  )
}