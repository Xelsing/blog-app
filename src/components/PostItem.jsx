import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
  return (
    <div className="post">
    <div className="post__content">
      <h3 style={{margin:'0 0 15px'}}>{props.number}. {props.post.title}</h3>
      <div>
        {props.post.body}
      </div>
    </div>
    <div className="post__btns">
      <MyButton onClick={() => props.remove(props.post)}>
          Удалить
        </MyButton>
    </div>
    </div>
  )
}

export default PostItem