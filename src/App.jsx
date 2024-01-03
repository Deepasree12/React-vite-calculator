import 'bootstrap/dist/css/bootstrap.min.css'
import Calc from "../Components/Calc"
import { useState } from 'react'

function App() {
  const [ButtonDisplay,setDisplay]=useState("")  

  function buttonValue(buttonText){
   
    if (buttonText==="c"){
      setDisplay("")
    }
    else if(buttonText==="="){
      let item=eval(ButtonDisplay)
      setDisplay(item)
      
    }
    else{
      setDisplay(ButtonDisplay+buttonText)
    }
  }

  return (
    <div className="w-25 h-75 px-5 py-4  border border-seconadry shadow mt-4">
    <h1 className='text-primary-emphasis'>calculator</h1>
    <input type="text" value={ButtonDisplay} readOnly className='border border-secondary w-100 mb-3'/>
    
    <Calc  buttonValue={buttonValue}/>
    
        
    </div>
  )
}

export default App
