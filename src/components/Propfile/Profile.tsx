import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {MessagePageType, PostPropsType, ProfilePageType, updateNewPostText} from "../../Redux/state";


type AppPropsType = {
    profilePage: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (newText: string)=> void

}




function Profile(props: AppPropsType) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={updateNewPostText}/>
        </div>
    )
}

export default Profile;