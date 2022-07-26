import React, {useState ,useEffect} from "react";
import {useWordle} from '../hooks/useWordle';

import Row from "./Row";


 const Grid = ({solution}) => {
    const {guesses, addLetter} = useWordle(solution)
    
    useEffect(()=>{
        document.addEventListener("keydown", addLetter);
        return ()=> {
        document.removeEventListener("keydown", addLetter);
        }
        },[])
    return (
        <div style={{display:'flex'}}>
            
            {guesses.map((item, index) => <Row text={item} key={index} />)}
            {/* <Row text='' />
            <Row text='' />
            <Row text='' />
            <Row text='' />
            <Row text='' /> */}
        </div>
    )
 }

 export default Grid