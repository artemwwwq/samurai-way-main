import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType,} from "../../Redux/store";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ReduxStoreType} from "../../Redux/redux-store";


type ProfilePropsType = {
    store: ReduxStoreType
}




function Profile(props: ProfilePropsType) {



    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store} />
        </div>
    )
}

export default Profile;