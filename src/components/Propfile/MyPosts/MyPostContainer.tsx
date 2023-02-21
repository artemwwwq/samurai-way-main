import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/Propfile-reducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../Redux/redux-store";


export type postPropsType = {
    store: ReduxStoreType
}

export function MyPostContainer(props: postPropsType) {
        let state = props.store.getState()


    const addPost = () => {
            props.store.dispatch(addPostActionCreator())
    }

    const onChangeValue = (newText: string) => {
            let action = updateNewPostActionCreator(newText)
            props.store.dispatch(action)
        }

    return (<MyPosts addPost={addPost} updateNewPostText={onChangeValue} profilePage={state.profilePage}/>)
}

