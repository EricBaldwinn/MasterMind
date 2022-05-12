import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    axios.get('/setAnswer')
    .then((data) => {
      setNumbers(data.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div>
      <h1>Hellow World!</h1>
    </div>
  )
};

export default App;