import React from 'react'

import "./Post.css"

const Post = (props) => {
  return (
    <div className='post'>
      <h3 className='author'>{props.author}</h3>
      <p className='text'>{props.body}</p>
    </div>
  )
}

export default Post
