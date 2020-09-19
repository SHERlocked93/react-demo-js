import React, { Component } from 'react'

class CommentBox extends Component {
    constructor(props) {
        super(props)
    }

    /**
     * 提交留言
     * @param ev
     */
    handleSubmit(ev) {
        this.props.onAddComment(this.textInput.value)
        ev.preventDefault()
        this.textInput.value = ''
    }

    render() {
        return (
          <div>
              <form action='' className='p-5' onSubmit={ ev => this.handleSubmit(ev) }>
                  <div className='form-group'>
                      <label htmlFor=''>留言内容</label>
                      <input type='text' className='form-control'
                             placeholder='请输入内容'
                             ref={ textInput => this.textInput = textInput }/>
                  </div>
                  <button type='submit' className='btn btn-primary'>留言</button>
                  <p>已有{ this.props.commentsLength }条评论</p>
              </form>
          </div>
        )
    }
}

export default CommentBox
