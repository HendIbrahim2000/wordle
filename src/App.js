import React, {useState, useEffect} from 'react'
// import {useWordle} from './hooks/useWordle'

import Wordle from './components/wordle';
// erase letter using backspace (done)
// add typing to blocks (done)
// on enter:
// check if letters are 5 to:
// check if every letter exists in solutions and if in the same index
// if all right congratulate
// if not all right and its less than six try add row if not less say sorry and stop typing



const App = () => {
  const [solution, setSolution] = useState(null)
  
  useEffect(()=>{
     fetch("http://localhost:3001/solutions")
     .then(res => res.json())
     .then(res => {
      const randomWord = Math.floor(Math.random() * res.length)
      setSolution(res[randomWord].word)
     })
  },[])

 

  
  return (
    <div className='App'>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
