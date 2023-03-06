import React from 'react';
import styles from './users.module.css'
import userPng from '../../assist/image/userPng.png'
import {AxiosType, userArrType} from "../../Redux/Users-reducer";
import {mapDispatchStateProps} from "./UsersContianer";
import axios from "axios";



export class Users extends React.Component<mapDispatchStateProps> {

    constructor(props: mapDispatchStateProps) {
        super(props);

        const axios = require('axios')
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: AxiosType) => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div>
                {this.props.users.map((el: userArrType) => <div key={el.id}>
                <span>
                    <div >
                        <img className={styles.userPhoto}  src={el.photos.small !== null ? el.photos.small : userPng}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={()=>{this.props.unfollow(el.id)}}>Unfollow</button>
                            : <button onClick={()=>{this.props.follow(el.id)}}>follow</button>}

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
    }
}

