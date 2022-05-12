import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Inputs} from './Inputs.jsx';

const App = () => {
  const [answer, setAnswer] = useState([]);


  useEffect(() => {
    axios.get('/setAnswer')
    .then((data) => {
      setAnswer(data.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div>
      <h1>MasterMind</h1>
      <h2>Total Wins: </h2>
      <Inputs />
    </div>
  )
};

export default App;