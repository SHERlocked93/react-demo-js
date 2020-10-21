import React, { Component } from 'react'
import * as Api from '../utils/apis'

class Dati extends Component {
    componentDidMount() {
        Api.testConnect()
    }

    render() {
        return (
          <div>
              dati
          </div>
        )
    }
}

export default Dati
