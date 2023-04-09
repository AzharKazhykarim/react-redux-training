import React from 'react'
import m from './Post.module.css'
export default function Post(props) {
  return (

    <div className={m.item}>
      <img src="https://images.theconversation.com/files/387712/original/file-20210304-15-n1wg4d.jpg?ixlib=rb-1.1.0&rect=29%2C302%2C3812%2C1903&q=45&auto=format&w=1356&h=668&fit=crop" alt="" />
      {props.message}
      <div>
        <span>{props.likesCount} Likes</span>
      </div>
    </div>


  )
}
