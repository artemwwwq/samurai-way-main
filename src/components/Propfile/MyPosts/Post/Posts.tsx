import React from "react";
import s from './Posts.module.css'
import {PostPropsType} from "../../../../Redux/store";





function Posts(props: PostPropsType) {
    return <div>
        <div className={s.item}>
            <img src="https://www.kartinki24.ru/uploads/gallery/thumb/25/kartinki24_ru_love_103.jpg" alt=""/>
            {props.message}
        </div>
        <div>like {props.like}</div>
    </div>

}

export default Posts;