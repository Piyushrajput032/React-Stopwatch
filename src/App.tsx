
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
let adjustHandler: any = undefined;
function App() {
  const [watch, setWatch] = useState(0)
  const [started, setStarted] = useState(false)

  const startHandler = () => {
    adjustHandler = setInterval(() => {
      setWatch((x) => x + 1)
    }, 1000)
    setStarted(true)
  }
  const stopHandler = () => {
    clearInterval(adjustHandler)
    setStarted(false)
  }
  const resetHAndler = () => {
    setWatch(0)
    clearInterval(adjustHandler)
    setStarted(false);

  }

  return (
    <div className="App">
      <h1> Start Stop Watch</h1>
      <h2>{watch}</h2>
      <button className='start' disabled={started} onClick={startHandler}>Start</button>
      <button className='stop' onClick={stopHandler}>Stop</button>
      <button className='reset' onClick={resetHAndler}>Reset</button>
    </div>
  );
}

export default App;
