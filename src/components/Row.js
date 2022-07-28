import React from "react";

 const Row = props => {
    return (
            <div className={`row ${props.color?props.color: 'light-gray'}`}>{props.text}</div>
    )
 }

 export default Row