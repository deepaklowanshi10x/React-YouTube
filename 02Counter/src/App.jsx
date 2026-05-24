import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let counter = 15
  const addValue = () => {
    console.log("clicked", counter);
  counter = counter + 1
}

  return (
    <>
     <h1>JavaScript YouTube</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}>Add value </button>
     <br/>
     <button>Remove value</button>
    </>
  )
}

export default App
