import React from 'react'
import logo from './logo.svg'
import './App.css'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: ['this is my comment list']
        }
    }

    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }

    render() {
        const { comments } = this.state
        return (
          <div className="App">
              <header className="App-header">
                  <img src={ logo } className="App-logo" alt="logo"/>
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
              </header>
              <CommentList comments={ comments }></CommentList>
              <CommentBox commentsLength={ comments.length }
                          onAddComment={ comment => this.addComment(comment) }></CommentBox>
          </div>
        )
    }
}

export default App
