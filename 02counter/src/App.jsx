import { useState } from 'react'

import './App.css'

function App() {
const [counter, setCounter]= useState(15)

//  const counter = 15

  const addValue = () => {
    setCounter(counter + 1)
  }

  const subtractValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter App {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button> {" "}
      <button
      onClick={subtractValue}>Remove value</button> 
      <p>footer : {counter}</p>
    </>
  );
}

export default App
