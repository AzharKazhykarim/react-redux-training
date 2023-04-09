import React from 'react'
import m from './MyPosts.module.css'
import Post from './Post/Post'



export default function MyPosts(props) {

    const postClick=()=>{
        props.addPost();
    }

    const handleChange=(e)=>{
        props.updateNewPostText(e.target.value);
    }
    
    return (
        <>
            <div>
                My Posts
            </div>
            <div>
                <textarea onChange={handleChange} value={props.newPostText}/>
                <button onClick={postClick}>Add post</button>
            </div>

            <div className={m.posts}>
                {props.posts.map(el=>
                <Post message= {el.message} key={el.id} likesCount={el.likesCount}/>)}
             

            </div>
        </>

    )
}
