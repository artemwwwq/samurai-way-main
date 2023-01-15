import React, {RefObject, useRef} from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {PostPropsType} from "../../../Redux/state";


export type postPropsType = {
    posts: Array<PostPropsType>
    addPost: (postMessage: string)=> void
}

function MyPosts(props: postPropsType) {

    const postsMapEl = props.posts.map( m=> <Posts id={m.id} message={m.message} like={m.like}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if(newPostEl.current !== null){
            let text = newPostEl.current.value
            props.addPost(text)
            newPostEl.current.value = '';
        }

    }



    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostEl}></textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsMapEl}
        </div>
    </div>
}

export default MyPosts;