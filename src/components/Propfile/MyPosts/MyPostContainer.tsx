import React from "react";
import {addPostActionCreator, PostPropsType, updateNewPostActionCreator} from "../../../Redux/Propfile-reducer";
import MyPosts from "./MyPosts";
import {RootReducerType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export type mapStateToPropsType = {
    newPostText: string;
    posts: Array<PostPropsType>
}

export type mapDispatchToProps = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type MyPostMapProps = mapStateToPropsType & mapDispatchToProps

const mapStateToProps = (state: RootReducerType): mapStateToPropsType  => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: ()=> {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText: string)=> {
            let action = updateNewPostActionCreator(newText)
            dispatch(action)
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);