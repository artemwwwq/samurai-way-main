import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div className={s.content}>
        <div>
            <img src="https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg"
             alt=""/>
        </div>
        <div>
            ava + discription
        </div>
        <MyPosts />
        </div>
        }

export default Profile;