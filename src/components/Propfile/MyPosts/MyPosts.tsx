import React, {ChangeEvent, useRef} from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/Propfile-reducer";
import {ActionTypes, ProfilePageType} from "../../../Redux/state";


export type postPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

function MyPosts(props: postPropsType) {

    const postsMapEl = props.profilePage.posts.map(m=> <Posts key={m.id} id={m.id} message={m.message} like={m.like}/>)

    const addPost = () => {
            props.dispatch(addPostActionCreator())
    }

    const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let newText = e.currentTarget.value
            let action = updateNewPostActionCreator(newText)
            props.dispatch(action)
        }




    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea
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