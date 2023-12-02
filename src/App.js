import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={fetchAdvice}>
          <span>Give me advice!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
