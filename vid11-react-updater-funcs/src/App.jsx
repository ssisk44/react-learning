import './App.css'
import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0);

  function increment(){
    // using the fist letter of the state variable or prev"Variable-name" will reference current state
    setCount(c => c + 1)
    setCount(c => c + 1)
    setCount(c => c + 1)
  }

  function decrement(){
    setCount(c => c - 1)
    setCount(c => c - 1)
    setCount(c => c - 1)
  }

  return (
    <div className='app-container'>
      <h1 className='counter'>{count}</h1>
      <div className='buttons-container'>
        <button className='decrement-button button' onClick={decrement}>Decrement</button>
        <button className='reset-button button' onClick={() => setCount(0)}>Reset</button>
        <button className='increment-button button' onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

export default App
