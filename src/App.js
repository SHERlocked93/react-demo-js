import React from 'react'
import logo from './logo.svg'
import './App.css'
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'

function App() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={ logo } className="App-logo" alt="logo"/>
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <DigitalClock></DigitalClock>
              <LikesButton></LikesButton>
          </header>
      </div>
    )
}

export default App
