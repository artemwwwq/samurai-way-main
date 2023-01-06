import React from "react";
import s from './ProfileInfo.module.css'


function ProfileInfo() {
    return <div>
        <div>
            <img src="https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg"
                 alt=""/>
        </div>
        <div className={s.descriptionBlock}>
            ava + discription
        </div>
    </div>
}

export default ProfileInfo;