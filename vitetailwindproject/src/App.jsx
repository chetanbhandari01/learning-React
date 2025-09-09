import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
      <h1 className=' text-white rounded-xl '>Tailwind test</h1> 
      <Card username="chetan" btntext="click me"  />  
      <Card username="Hi tutorial" btntext="visit me" />
    </>
  )
}

export default App
