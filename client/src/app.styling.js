import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const AppDiv = styled.div`

`

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`

export const RulesDiv = styled.div`
display: flex;
flex-direction: column;
`

export const ModalText = styled.p`
padding: 10px;
margin-bottom: 10px;
font-size: 18px;
line-height: 28px;
`
export const ModalButton = styled.button`
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
margin: 12px;
`

export const Wins = styled.h2`
margin-left: auto;
`

export const TitleContainer = styled.div`
display: flex;
flex-direction: row;
`

export const Title = styled.h1`
position: absolute;
left: 44%;
`