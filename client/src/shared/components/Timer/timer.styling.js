import styled from 'styled-components';

export const TimerDiv = styled.div`
display: flex;
flex-direction: column;
`

export const TimerButton = styled.button`
align-self: center;
width: 96px;
padding: 0.3em 1.2em;
margin-right: auto;
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