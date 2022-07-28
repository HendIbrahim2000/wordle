import React, {useEffect} from "react";
import {useWordle} from '../hooks/useWordle';

import Row from "./Row";


 const Grid = ({solution}) => {
    const {guesses,validation, addLetter} = useWordle(solution)
    
    useEffect(()=>{
        return ()=> {
            document.addEventListener("keydown", addLetter);
        }
        },[])
    return (
        <div style={{display:'flex'}}>
            {guesses.map((item, index) =>{
                
                const validate = validation[index]
                return <Row text={item} key={index} color={validate} />
            } )}
            {/* <Row text='' />
            <Row text='' />
            <Row text='' />
            <Row text='' />
            <Row text='' /> */}
        </div>
    )
 }

 export default Grid