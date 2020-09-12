import React, { Component } from 'react'

class DigitalClock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            timer: null
        }
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                this.setState({
                    date: new Date()
                })
                console.log('update')
            }, 1000)
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot)
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    render() {
        return (
          <div className='digital-clock-component jumbotron'>
              <h1>{ this.state.date.toLocaleString() }</h1>

          </div>
        )
    }
}

DigitalClock.propTypes = {}

export default DigitalClock
