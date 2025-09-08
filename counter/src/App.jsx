import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { set } from 'express/lib/response'

function App() {
  let [counter,setCounter] = useState(1) //15 we can use true ,false ,[]

  const addvalue= () => {
    counter=counter+1
    setCounter(counter);
  }

  const removevalue = ()=> {
    
    counter=counter-1;
    setCounter(counter)
  }


  return (
    <>
      <h1> Hello React</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue} >add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
