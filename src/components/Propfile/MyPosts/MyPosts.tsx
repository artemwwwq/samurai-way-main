import React, {RefObject, useRef} from "react";
import s from './MyPosts.module.css'
import Posts, {PostPropsType} from "./Post/Posts";


export type postPropsType = {
    posts: Array<PostPropsType>
    addPost: (postMessage: string)=> void
}

function MyPosts(props: postPropsType) {

    const postsMapEl = props.posts.map( m=> <Posts message={m.message} like={m.like}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if(newPostEl.current !== null){
            let text = newPostEl.current.value
            props.addPost(text)
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