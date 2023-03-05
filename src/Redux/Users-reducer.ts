import react from 'react'
import {ActionTypes} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


export type userArrType = {
    /*id: number,
    photoUrl: string
    followed: boolean,
    fullName: string,
    status: string,
    location: locationType*/
    name: string,
    id: number,
    uniqueUrlName: any,
    photos: PhotosType,
    status: string,
    followed: boolean
}

type PhotosType = {
    small: string
    large: string
}

export type locationType = {
    city: string
    country: string
}

const initialState: initialStateTypeUsers = {
    users: []
}


export type initialStateTypeUsers = {
    users: Array<userArrType>
}


export const usersReducer = (state: initialStateTypeUsers = initialState, action: ActionTypes): initialStateTypeUsers => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}


export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: userArrType[]) => ({type: 'SET_USERS', users} as const)