import React, { Component } from 'react'
import { Button } from 'antd-mobile'

class App extends Component {
    goDati = () => {
        this.props.history.push('/dati')
    }
    goResult = () => {
        this.props.history.push('/result')
    }

    render() {
        return (
          <div>
              <Button onClick={ this.goDati }>随机答题</Button>
              <Button onClick={ this.goResult }>Result</Button>
          </div>
        )
    }
}

export default App
