import React, {useState, useEffect} from 'react'
// import {useWordle} from './hooks/useWordle'

import Wordle from './components/wordle';
// erase letter using backspace (done)
// add typing to blocks (done)
// on enter:
// check if letters are 5 to:
// check if every letter exists in solutions and if in the same index
// change letters color according to existence
// if all right congratulate
// if not all right and its less than six try add row if not less say sorry and stop typing



const App = () => {
  const [solution, setSolution] = useState(null)


  
  useEffect(()=>{
     return ()=>{
      fetch("http://localhost:3001/solutions")
    .then(res => res.json())
    .then(res => {
     const randomWord = Math.floor(Math.random() * res.length)
     return setSolution(res[randomWord].word)
     
    }).then(res=> {
      // console.log(solution)
    })
      
     } 
  },[setSolution])

 

  let solute = null
  if(solution) {
    solute = (
      <><p>Solution : {solution}</p> <Wordle solution={solution} /></>
    )
  }
  return (
    // <div>
      
    //   {solution && console.log(solution)}
    // </div>
    
    <div className='App'>
      {solute}
    </div>
  );
}

export default App;
