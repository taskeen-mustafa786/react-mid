import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(30)

 
const countHandle = ()=>{
  setInterval(()=>{
   
    setCount(prev=>prev-1)
  },1000)
}
  useEffect(()=>{
    if(count<0){
      const element = document.querySelector('#themeToggle')
      element.classList.add('.slider')
    }
  },[count])

  return (
    <>
      <div className="container">
    {// Header with Title and Theme Toggle
     }
    <div className="header">
      <h1>Countdown & Light Switch</h1>
      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" id="themeToggle" />
          <span className="slider"></span>
        </label>
        <span>Light Mode</span>
      </div>
    </div>

    {// Timer and Progress Section
       }
    <div className="timer-section">
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>
      <div className="timer" id="timerDisplay">{count} secs</div>
      <div className="btn-group">
        <button id="startButton" onClick={countHandle}>Start Timer</button>
        <button id="resetButton" onClick={()=>{
          setCount(30)
        }} >Reset Timer</button>
      </div>
      <div className="message" id="messageArea"></div>
    </div>
  </div>
    </>
  )
}

export default App
