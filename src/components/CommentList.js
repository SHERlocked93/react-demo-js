import React from 'react'

const CommentList = ({ comments }) => {
    return (
      <div className='comment-list-component'>
          <label>评论列表</label>
          <ul className='list-group mb-3'>
              { comments.map((comment, idx) => <li className='list-group-item' key={ idx }>{ comment }</li>) }
          </ul>
      </div>
    )
}


export default CommentList
