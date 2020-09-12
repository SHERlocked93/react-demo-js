import React from 'react'
import logo from './logo.svg'
import './App.css'
import Welcome from './welcome'
import NameCard from './components/NameCard'

function App() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={ logo } className="App-logo" alt="logo"/>
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                  hello world
              </a>
          </header>
          <Welcome/>
          <NameCard name='viking' number={ 123123 } isHuman={ true }
                    tags={ ['react', '喜欢睡觉', '西瓜'] }/>
      </div>
    )
}

export default App
