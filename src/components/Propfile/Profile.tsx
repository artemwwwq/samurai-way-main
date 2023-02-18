import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {ActionTypes, MessagePageType, PostPropsType, ProfilePageType,} from "../../Redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes)=> void

}




function Profile(props: ProfilePropsType) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;