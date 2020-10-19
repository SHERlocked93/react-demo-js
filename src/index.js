import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Button } from 'antd-mobile'

class App extends Component {
    async componentDidMount() {
        let page = 3
        const url = `http://localhost:9038/api/rtimu/?page=${ page }`
        const res = await axios.get(url)
        console.log(res.data)
    }

    render() {
        return (
          <Button>
              start1
          </Button>
        )
    }
}

export default App

ReactDOM.render(<App/>, document.getElementById('root'))
