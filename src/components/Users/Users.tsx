import React from 'react';
import {mapDispatchStateProps} from "./UsersContianer";
import styles from './users.module.css'
import * as axios from "axios";
import userPng from '../../assist/image/userPng.png'

export const Users = (props: mapDispatchStateProps) => {

    if (props.users.length === 0) {

        axios.default('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })


    }



    return (
        <div>
            {props.users.map(el=> <div key={el.id}>
                <span>
                    <div >
                        <img className={styles.userPhoto}  src={el.photos.small !== null ? el.photos.small : userPng}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={()=>{props.unfollow(el.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.follow(el.id)}}>follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div><div>{el.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div><div>{"el.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

