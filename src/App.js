import React from 'react'

import Wordle from './components/wordle';


const App = () => {
  return (
    <div className='App'>
      <p>Solution : solution</p>
      <p>Guess the word : words</p>
      <Wordle />
    </div>
  );
}

export default App;
