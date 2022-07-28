import React, {useEffect} from "react";
import {useWordle} from '../hooks/useWordle'

import Grid from "./Grid";

 const Wordle = ({solution}) => {
    const {letters, addLetter} = useWordle(solution)
    useEffect(()=>{
          return ()=> {
            document.addEventListener("keydown", addLetter);
          }
        },[])
    return (
        <div>
            
            <p>Guess the word : {letters && letters}</p>
            <Grid solution={solution} />
            
        </div>
    )
 }

 export default Wordle