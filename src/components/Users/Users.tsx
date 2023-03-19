import React from 'react';
import styles from "./users.module.css";
import {userArrType} from "../../Redux/Users-reducer";
import userPng from "../../assist/image/userPng.png";


type PropsType = {
    totalPageCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number)=> void
    users: userArrType[]
    unfollow: (userId: number)=> void
    follow: (userId: number)=> void
}


const Users = (props: PropsType) => {

    let pageCount = Math.ceil(props.totalPageCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL);


    return (
        <div>
            <div>
                {slicedPages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}  </span>
                })}
            </div>
            {props.users.map((el: userArrType) => <div key={el.id}>
                <span>
                    <div>
                        <img className={styles.userPhoto} src={el.photos.small !== null ? el.photos.small : userPng}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                               props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(el.id)
                            }}>follow</button>}

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

export default Users;