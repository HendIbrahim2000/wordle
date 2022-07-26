import React, {useEffect} from "react";
import {useWordle} from '../hooks/useWordle'

import Grid from "./Grid";

 const Wordle = ({solution}) => {
    const {letters, addLetter} = useWordle(solution)
    useEffect(()=>{
        document.addEventListener("keydown", addLetter);
          return ()=> {
            document.removeEventListener("keydown", addLetter);
          }
        },[])
    return (
        <div>
            <p>Solution : {solution}</p>
            <p>Guess the word : {letters && letters}</p>
            <Grid />
            
        </div>
    )
 }

 export default Wordle