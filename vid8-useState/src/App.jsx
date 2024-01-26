import './App.css'
import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className='app-container'>
      <h1 className='counter'>{count}</h1>
      <div className='buttons-container'>
        <button className='decrement-button button' onClick={() => setCount(count-=1)}>Decrement</button>
        <button className='reset-button button' onClick={() => setCount(0)}>Reset</button>
        <button className='increment-button button' onClick={() => setCount(count+=1)}>Increment</button>
      </div>
    </div>
  )
}

export default App
