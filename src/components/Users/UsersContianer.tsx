import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUserTotalCountAC,
    unFollowAC,
    userArrType
} from "../../Redux/Users-reducer";


type mapStateToPropsTypes = {
    users: userArrType[]
    pageSize: number,
    totalPageCount: number
    currentPage: number
}

export type mapStateToDispatch = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<userArrType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: any) => void
}

export type mapDispatchStateProps = mapStateToPropsTypes & mapStateToDispatch

const mapStateToProps = (state: RootReducerType): mapStateToPropsTypes => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalPageCount: state.usersPage.totalPageCount,
        currentPage: state.usersPage.currentPage
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
        setTotalUserCount: (totalCount: any) => {
            dispatch(setUserTotalCountAC(totalCount))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);