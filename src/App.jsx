import './App.css'
import React, { useState } from 'react'


function App() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <>
        <h1>react clock by Peywan!</h1>
        <p>the count is: {count}</p>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </>
  )
}

export default App
