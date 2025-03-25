import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <div className="timer" id="timerDisplay">30s</div>
      <div className="btn-group">
        <button id="startButton">Start Timer</button>
        <button id="resetButton" >Reset Timer</button>
      </div>
      <div className="message" id="messageArea"></div>
    </div>
  </div>
    </>
  )
}

export default App
