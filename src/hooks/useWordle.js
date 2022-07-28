import {useState} from 'react'


export function useWordle (solution) {
    let [letters, setLetters] = useState([])
    const[guesses, setguesses] = useState([...Array(5)])
    const[validation, setValidation] = useState([...Array(5)])

    const addLetter = (event) => {
        if (/^[A-Za-z]$/.test(event.key)){
          setLetters((prev)=>{
            if(prev.length < 5){
              prev = prev.join('') + event.key
              letters = (prev).split('')
              return letters
            }
            
            return prev
          })
        setguesses(()=> {
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
              return [...letters, ...Array(5-letters.length)]

            })
            return  letters
        }
        
            if(event.key === "Enter" ){
                
                if(letters.length===5){
                    for(const letter in letters) {
                        for(const key in solution){
                            if(letters[letter]===solution[key]){
                                if(letter === key) {
                                    setValidation(validation.concat(validation[letter]='green'))
                                    
                                } else {   
                                    setValidation(validation.concat(validation[letter]='yellow'))
                                }   
                            } else{
                                if(validation[letter]!=='yellow' && validation[letter]!=='green') {
                                    setValidation(validation.concat(validation[letter]='gray'))
                                }
                                
                            }
                            
                        }
                        
                        
                    }
                    
                } else {
                    console.log('Word should be 5 words')
                    
                }
                
            }

        
      }
    
    

 return {letters,guesses,validation, addLetter }
}
