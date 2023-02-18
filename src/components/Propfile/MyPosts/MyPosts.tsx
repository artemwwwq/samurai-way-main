import React, {useRef} from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {ActionTypes, ProfilePageType} from "../../../Redux/state";


export type postPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

function MyPosts(props: postPropsType) {

    const postsMapEl = props.profilePage.posts.map(m=> <Posts key={m.id} id={m.id} message={m.message} like={m.like}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if(newPostEl.current !== null){
            props.dispatch({type: "ADD-POST"})
        }

    }

    const onChangeValue = () => {
        if(newPostEl.current !== null) {
            let newText = newPostEl.current.value
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText})
        }
    }



    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostEl}
                          onChange={onChangeValue}
                          value={props.profilePage.newPostText}
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