import React from "react";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUserTotalCountAC, toggleIsFetchingAC,
    unFollowAC,
    userArrType
} from "../../Redux/Users-reducer";
import {AxiosResponse} from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";


type mapStateToPropsTypes = {
    users: userArrType[]
    pageSize: number,
    totalPageCount: number
    currentPage: number
    isFetching: boolean
}

export type mapStateToDispatch = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<userArrType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type mapDispatchStateProps = mapStateToPropsTypes & mapStateToDispatch

class UsersAPIComponent extends React.Component<mapDispatchStateProps> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        const axios = require('axios')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response: AxiosResponse) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        const axios = require('axios')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response: AxiosResponse) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            <div>
                {this.props.isFetching ? <Preloader/> : null}
            </div>
            <Users totalPageCount={this.props.totalPageCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />
        </>
    }
}

const mapStateToProps = (state: RootReducerType): mapStateToPropsTypes => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalPageCount: state.usersPage.totalPageCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapStateToDispatch => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<userArrType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setUserTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);