import styled from 'styled-components';


export const OuterDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin: 12px;
height: 240px;
`

export const InputDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
width: 148px;
`

export const NumpadDiv = styled.div`
display: flex;
flex: 1 1 30%;
`

export const GuessOuter = styled.div`
width: 190px;
overflow: hidden;
`
export const GuessInner = styled.div`
left: 0;
position: sticky;
`

export const GuessInput = styled.input`
border: 0;
letter-spacing: 35px;
padding-left: 15px;
background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
background-position: bottom;
background-size: 50px 1px;
background-repeat: repeat-x;
background-position-x: 35px;
width: 220px;
min-width: 220px;
font-size: 24px;
outline: none;
padding-left: 12px;
`

export const Numbers = styled.p`
    font-size: 24px;
    background-color: #4eb5f1;
    width: 28px;
    text-align: center;
    border-radius: 25px;
    margin: 10px;
    &:hover {
      cursor: pointer;
    }
`

export const ButtonDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const ButtonStyle = styled.button`
    width: 96px;
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

