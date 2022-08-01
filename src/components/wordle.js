import React, {useState, useEffect} from "react";
import {useWordle} from '../hooks/useWordle'

import Grid from "./Grid";

 const Wordle = ({solution}) => {
    const {letters, addLetter, isCorrect} = useWordle(solution)
    const [message, setMessage] = useState('')
    const [grid, addGrid] = useState([...Array(1)])
    useEffect(()=>{
          return ()=> {
            document.addEventListener("keydown", addLetter);
          }
        },[])
        useEffect(()=>{
          return ()=> {
            
            if(isCorrect) {
              setMessage('Right.. Good job')
              console.log('jjh')
            } else if (!isCorrect && letters.length === 5 ) {
             
              setMessage('Wrong.. Try again you can solve it')
              addGrid(grid.concat(<Grid solution={solution} />))
            } else {

            }

            
          }
        },[addLetter])
        
    return (
        <div>
            
            <p>Guess the word : {letters && letters}</p>
            {grid.map((item, index)=>{
             return <Grid solution={solution} key={index} />
            })}
            
            <p>{message}</p>
            
        </div>
    )
 }

 export default Wordle