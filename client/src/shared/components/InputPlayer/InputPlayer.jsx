import React from 'react';
import { PlayerContainer, OuterPlayerContainer, PlayerButtons, IconContainer, PlayText, CurrentPlayer } from './inputplayer.styling';


export const InputPlayer = ({ setPlayer, playerName, showPlayerStats, addNewPlayer, toggleRules, findPlayerGames }) => {


  return (
    <OuterPlayerContainer>
      <IconContainer>
      <img src="https://img.icons8.com/windows/64/000000/information.png" onClick={toggleRules}/>
        <PlayText>How to play</PlayText>
      </IconContainer>
      <PlayerContainer>
        <input placeholder="Enter Player Name" type="text" value={playerName} onChange={setPlayer}></input>
        <PlayerButtons type="button" onClick={showPlayerStats}>Returning Player</PlayerButtons>
        <PlayerButtons type="button" onClick={addNewPlayer}>NewPlayer</PlayerButtons>
      </PlayerContainer>
      <CurrentPlayer>Current Player: {findPlayerGames}</CurrentPlayer>
    </OuterPlayerContainer>
  )
}