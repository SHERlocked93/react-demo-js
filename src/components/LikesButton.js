import React, { Component } from 'react'

class LikesButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
        // this.increaseLikes = this.increaseLikes.bind(this)
    }

    increaseLikes() {
        this.setState({
            likes: this.state.likes + 1
        })
        console.log(this.state.likes)
    }

    render() {
        return (
          <div className='likes-buttons-Component'>
              <button className='btn btn-outline-primary btn-lg'
                      onClick={ () => this.increaseLikes() }>
                  👍 { this.state.likes }
              </button>
          </div>
        )
    }
}

export default LikesButton
