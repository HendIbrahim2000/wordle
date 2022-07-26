import {useState, useEffect} from 'react'


export function useWordle (solution) {
    let [letters, setLetters] = useState([])
    const[guesses, setguesses] = useState([...Array(5)])
    // const sol = solution.split('')
    

    const addLetter = (event) => {
    // console.log(sol)
        if (/^[A-Za-z]$/.test(event.key)){
          setLetters((prev)=>{
            if(prev.length < 5){
              prev = prev.join('') + event.key
              letters = (prev).split('')
            //   console.log(letters)
              return letters
            }
            
            return prev
          })
        //   setguesses(guesses.concat(event.key))
        //   console.log(guesses)
        setguesses(()=> {
            // const restGuess =  guesses.slice(letters.length,5)
            const typing = guesses.splice(0, letters.length, ...letters) 
            
          return [...typing, ...Array(5-letters.length)]
      
           
        })
        return guesses
        }
          if(event.key === "Backspace" ){
            setLetters((prev)=>{
                
                letters = prev.splice(0, prev.length -1)
                return letters
            })
            setguesses(()=> { 
                // console.log(letters)
              return [...letters, ...Array(5-letters.length)]

            })
            return  letters
        }
        if(event.key === "Enter" ){
            if(letters.length===5){

            } else {
                console.log('Word should be 5 words')
            }
        }
 
        // console.log(guesses.length)
        // console.log(guesses)
        
      }
      
    

 return {letters,guesses, addLetter}
}
