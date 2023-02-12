import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {MessagePageType, PostPropsType, ProfilePageType, } from "../../Redux/state";


type AppPropsType = {
    profilePage: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (newText: string)=> void


}




function Profile(props: AppPropsType) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;