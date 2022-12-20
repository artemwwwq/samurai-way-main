import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

function MyPosts() {
    return <div>
        <div>My posts</div>
        <div>
            <input type=''/>
            <button>add post</button>
        </div>
        <div className={s.posts}>
            <Posts message='Hi, how are my posts! '/>
            <Posts message ='Its my first post!'/>
    </div>
    </div>
}

export default MyPosts;