import React from 'react'
import logo from './logo.svg'
import './App.css'

import ThemeContext from './theme-context'
import ThemedBar from './components/ThemedBar'

/* 主题配置 */
const themes = {
    light: {
        classnames: 'btn btn-primary',
        bgColor: '#eee',
        color: '#000'
    },
    dark: {
        classnames: 'btn btn-light',
        bgColor: '#222',
        color: '#fff'
    }
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
    }

    changeTheme(theme) {
        this.setState({ theme })
    }

    render() {
        return (
          <ThemeContext.Provider value={ themes[this.state.theme] }>
              <div className="App">
                  <header className="App-header">
                      <img src={ logo } className="App-logo" alt="logo"/>
                      <p>
                          Edit <code>src/App.js</code> and save to reload.
                      </p>

                      <a href='#theme-switcher' className='btn btn-light'
                         onClick={ () => this.changeTheme('light') }>浅色主题</a>
                      <a href='#theme-switcher' className='btn btn-secondary'
                         onClick={ () => this.changeTheme('dark') }>深色主题</a>
                  </header>

                  <ThemedBar></ThemedBar>

              </div>
          </ThemeContext.Provider>

        )
    }
}

export default App
