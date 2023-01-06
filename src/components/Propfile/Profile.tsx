import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Posts";

type AppPropsType = {
    posts: Array<PostPropsType>
    addPost: (postMessage: string)=>void
}




function Profile(props: AppPropsType) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;