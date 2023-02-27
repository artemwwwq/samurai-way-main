import {ActionTypes} from "./redux-store";


export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT'


export type PostPropsType = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
}


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are my posts! ', like: 12},
        {id: 2, message: 'Its my first post!', like: 18}
    ],
    newPostText: ''
}


export const profileReducer = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostPropsType = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST,
        newText: newText
    } as const
}





