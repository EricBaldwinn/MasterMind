import React from 'react';


export const Dots = ({result}) => {
  if (result === 'correct') {
    return <img src="https://img.icons8.com/emoji/48/000000/green-circle-emoji.png" />
  }
  if (result === 'half') {
    return <img src="https://img.icons8.com/emoji/48/000000/red-circle-emoji.png" />
  }
  return <img src="https://img.icons8.com/emoji/48/000000/black-circle-emoji.png" />
}