import {RenderEntireTree} from "../render";




export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostPropsType ={
    id: number
    message: string
    like: number
}

type ProfilePageType = {
    posts: Array<PostPropsType>
}

type MessagePageType = {

        messages: Array<MessagesType>
        dialogs: Array<DialogsType>
}


export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}



export const state:RootStateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are my posts! ', like: 12},
            {id: 2, message: 'Its my first post!', like: 18}
        ],

    },

    messagePage: {
        messages: [
            {id: 1, message: 'Hi, my dear friend'},
            {id: 2, message: 'I switch you questions for special'},
            {id: 3, message: 'Hi, my dear friend'},
            {id: 4, message: 'Hi, my dear friend'},
            {id: 5, message: 'Hi, my dear friend'},
            {id: 6, message: 'I LOVE U'}
        ],
        dialogs: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Alexey'},
            {id: 3, name: 'Kiril'},
            {id: 4, name: 'Ivan'},
            {id: 5, name: 'Igor'},
            {id: 6, name: 'Ekaterina'}
        ]
    },



}

export const addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        like: 0
    }
    state.profilePage.posts.push(newPost)
    RenderEntireTree(state)
}

