import React from 'react';
import styles from './users.module.css'
import userPng from '../../assist/image/userPng.png'
import {userArrType} from "../../Redux/Users-reducer";
import {mapDispatchStateProps} from "./UsersContianer";
import axios, {AxiosResponse} from "axios";



export class Users extends React.Component<mapDispatchStateProps> {

    componentDidMount() {
        const axios = require('axios')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response: AxiosResponse) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        const axios = require('axios')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response: AxiosResponse) => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalPageCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);

        return (
            <div>
                <div>
                    {  slicedPages.map(p=> {
                        return <span className={this.props.currentPage === p ? styles.selectedPage : ''} onClick={()=>{ this.onPageChanged(p) }}>{p}  </span>
                    })}
                </div>
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

