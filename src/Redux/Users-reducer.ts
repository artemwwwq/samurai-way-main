import react from 'react'
import {ActionTypes} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'


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



export type PhotosType = {
    small: string
    large: string
}

export type locationType = {
    city: string
    country: string
}

export type initialStateTypeUsers = {
    users: Array<userArrType>
    pageSize: number
    totalPageCount: number
    currentPage: number
}


const initialState: initialStateTypeUsers = {
    users: [],
    pageSize: 10,
    totalPageCount: 0,
    currentPage: 1
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalPageCount: action.count}
        }
        default:
            return state
    }
}


export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: userArrType[]) => ({type: 'SET_USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setUserTotalCountAC = (totalUsersCount: any) => ({type: 'SET_TOTAL_COUNT', count: totalUsersCount} as const )