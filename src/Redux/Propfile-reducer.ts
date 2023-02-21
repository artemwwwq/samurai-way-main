import {ActionTypes, PostPropsType, ProfilePageType} from "./store";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are my posts! ', like: 12},
        {id: 2, message: 'Its my first post!', like: 18}
    ],
    newPostText: ''

}

export const profileReducer = (state = initialState , action: ActionTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostPropsType = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
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





