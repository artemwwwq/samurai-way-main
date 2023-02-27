import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {MyPostMapProps} from "./MyPostContainer";




function MyPosts(props: MyPostMapProps) {

    const postsMapEl = props.posts.map(m=> <Posts key={m.id} id={m.id} message={m.message} like={m.like}/>)

    const addPost = () => {
        props.addPost()
    }

    const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let newText = e.currentTarget.value
            props.updateNewPostText(newText)
        }




    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea
                          onChange={onChangeValue}
                          value={props.newPostText}
                ></textarea>
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