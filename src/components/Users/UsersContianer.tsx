import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, userArrType} from "../../Redux/Users-reducer";


type mapStateToPropsTypes = {
    users: userArrType[]
}

export type mapStateToDispatch = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<userArrType>) => void
}

export type mapDispatchStateProps = mapStateToPropsTypes & mapStateToDispatch

const mapStateToProps = (state: RootReducerType): mapStateToPropsTypes => {
    return {
        users: state.usersPage.users
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
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);