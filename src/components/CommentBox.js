import React, { Component } from 'react'

class CommentBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    /**
     * 输入改变
     * @param ev
     */
    handleChange(ev) {
        this.setState({
            value: ev.target.value
        })
    }

    /**
     * 提交留言
     * @param ev
     */
    handleSubmit(ev) {
        console.log(this.state.value)
        ev.preventDefault()
    }

    render() {
        return (
          <div>
              <form action='' className='p-5' onSubmit={ ev => this.handleSubmit(ev) }>
                  <div className='form-group'>
                      <label htmlFor=''>留言内容</label>
                      <input type='text' className='form-control'
                             placeholder='请输入内容'
                             onChange={ ev => this.handleChange(ev) }
                             value={ this.state.value }/>
                  </div>
                  <button type='submit' className='btn btn-primary'>留言</button>
              </form>
          </div>
        )
    }
}

export default CommentBox
