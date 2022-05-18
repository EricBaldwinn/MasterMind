import styled from "styled-components";


export const PlayerContainer = styled.div`
  margin-left: auto;
`

export const OuterPlayerContainer = styled.div`
  display: flex;
`

export const PlayerButtons = styled.button`
align-self: center;
width: 150px;
padding: 0.3em 1.2em;
margin: 0 0.3em 0.3em 0;
border-radius: 2em;
box-sizing: border-box;
text-decoration: none;
font-family: sans-serif;
font-weight: 300;
color: #FFFFFF;
background-color: #4eb5f1;
text-align: center;
&:hover {
  background-color: #4095c6;
  cursor: pointer;
}
`

export const IconContainer = styled.div`
display: flex;
flex-direction: row;
`

export const PlayText = styled.p`
position: relative;
right: 10px;
`