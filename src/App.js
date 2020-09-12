import React from 'react'
import logo from './logo.svg'
import './App.css'
import CommentBox from './components/CommentBox'

function App() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={ logo } className="App-logo" alt="logo"/>
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
          </header>

          <CommentBox></CommentBox>
      </div>
    )
}

export default App
