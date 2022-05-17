import React from 'react';
import { PlayerContainer, OuterPlayerContainer, PlayerButtons, IconContainer } from '../../dist/styling/inputplayer.styling';


export const InputPlayer = ({ setPlayer, playerName, showName, addNewPlayer, showRules }) => {


  return (
    <OuterPlayerContainer>
      <IconContainer>
        <p>How to play</p>
        <img src="https://img.icons8.com/ios/50/000000/rules.png" onClick={showRules} />
      </IconContainer>
      <PlayerContainer>
        <input placeholder="Enter Player Name" type="text" value={playerName} onChange={setPlayer}></input>
        <PlayerButtons type="button" onClick={showName}>Returning Player</PlayerButtons>
        <PlayerButtons type="button" onClick={addNewPlayer}>NewPlayer</PlayerButtons>
      </PlayerContainer>
    </OuterPlayerContainer>
  )
}